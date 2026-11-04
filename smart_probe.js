const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function probe() {
  const bangs = [
    "%EC%83%9D%EB%B0%A5%EC%86%A1", // 생밥송
    "%EC%83%9D%EB%B0%A9%EC%86%A1"  // 생방송
  ];
  
  const gajoks = [
    "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // 가족기획
    "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 가족渝획
    "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81"  // 가족ㄱㅁ
  ];
  
  const midSeps = [
    "_",
    "_-_"
  ];
  
  const husbands = [
    "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8", // 스킨십 안 해주남편
    "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8" // 스킨십 안 해주는 남편
  ];

  const items = [
    { id: "bc_new40", v: "1775399576", suffix: "1_bh6d3q.jpg" },
    { id: "bc_new41", v: "1775399580", suffix: "2_u3sg2x.jpg" },
    { id: "bc_new42", v: "1775399583", suffix: "3_nog0hx.jpg" }
  ];

  console.log("--- PROBING 40, 41, 42 SEQUENTIALLY (FAST) ---");

  for (const item of items) {
    let found = false;
    for (const b of bangs) {
      for (const g of gajoks) {
        for (const sep of midSeps) {
          for (const h of husbands) {
            // Pattern 1: With "오늘의_아침"
            const url1 = `${baseCloudinary}v${item.v}/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}${sep}%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_${h}_%EC%B6%9C%EC%97%B0_${item.suffix}`;
            
            // Pattern 2: Without "오늘의_아침"
            const url2 = `${baseCloudinary}v${item.v}/MBC_${b}_%E6%96%B0_${g}${sep}%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_${h}_%EC%B6%9C%EC%97%B0_${item.suffix}`;

            // Pattern 3: With space after "죄인가요" instead of underscore
            const url3 = `${baseCloudinary}v${item.v}/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}${sep}%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_-_${h}_%EC%B6%9C%EC%97%B0_${item.suffix}`;

            const urls = [url1, url2, url3];

            for (const url of urls) {
              const res = await fetch(url, { method: "HEAD" });
              if (res.status === 200) {
                console.log(`[SUCCESS] ${item.id} -> ${url}`);
                found = true;
                break;
              }
            }
            if (found) break;
          }
          if (found) break;
        }
        if (found) break;
      }
      if (found) break;
    }
    if (!found) {
      console.log(`[FAILED] ${item.id} not found in first batch.`);
    }
  }
}

probe();

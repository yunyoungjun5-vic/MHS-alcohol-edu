const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return true;
  } catch (err) {}
  return false;
}

const bangs = [
  "%EC%83%9D%EB%B0%A5%EC%86%A1", // 생밥송
  "%EC%83%9D%EB%B0%A9%EC%86%A1", // 생방송
  "%EC%83%9D%EB%B0%A1%EC%86%A1"  // 생박송
];

const onuls = [
  "_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8", // _오늘의_아침
  "_%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8", // _오늘아침
  "" // empty
];

const gajoks = [
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // _新_가족기획 (normal)
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // _新_가족渝획
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // _新_가족ㄱㅁ
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", // _新_가족渰획
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D"  // _新_가족渰획
];

const naiOptions = [
  "_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94", // _나이_많은_게_죄인가요
  "_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94", // _나이_많은게_죄인가요
  "_%EB%82%98%EC%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94", // _남이많은게_죄인가요 or typo "나많은"
  "_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94" // no space after 게
];

const husbands = [
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8", // _스킨십_안_해주남편
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨십_안_해주남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1", // _스킨십_안_해주남편_출연_1
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨십_안_해주는남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0"  // _스킨십_안_해주는_남편_출연
];

const indicators = ["bh6d3q", "u3sg2x", "nog0hx"];

async function run() {
  console.log("Generating combination queue...");
  const queue = [];

  for (const b of bangs) {
    for (const onul of onuls) {
      for (const g of gajoks) {
        for (const nai of naiOptions) {
          for (const h of husbands) {
            // Clean consecutive underscores
            const baseStr = `MBC_${b}${onul}${g}${nai}${h}`.replace(/__/g, "_");
            
            // Generate for all three versions 40, 41, 42
            queue.push({ id: "bc_new40", url: `${baseCloudinary}v1775399576/${baseStr}_1_bh6d3q.jpg` });
            queue.push({ id: "bc_new40", url: `${baseCloudinary}v1775399576/${baseStr}_bh6d3q.jpg` }); // without _1
            queue.push({ id: "bc_new41", url: `${baseCloudinary}v1775399580/${baseStr}_2_u3sg2x.jpg` });
            queue.push({ id: "bc_new42", url: `${baseCloudinary}v1775399583/${baseStr}_3_nog0hx.jpg` });
          }
        }
      }
    }
  }

  console.log(`Total URLs to test: ${queue.length}`);
  const batchSize = 25;
  
  for (let i = 0; i < queue.length; i += batchSize) {
    const batch = queue.slice(i, i + batchSize);
    console.log(`Testing batch ${i / batchSize + 1} / ${Math.ceil(queue.length / batchSize)}...`);

    const results = await Promise.all(batch.map(async (item) => {
      const ok = await test(item.url);
      if (ok) {
        console.log(`\n🎉 [SUCCESS] FOUND FOR ${item.id}: ${item.url}\n`);
        return item;
      }
      return null;
    }));

    const foundItem = results.find(r => r !== null);
    if (foundItem) {
      console.log("Success! Stop probing.");
      process.exit(0);
    }
  }

  console.log("Done checking all options. No result found.");
}

run();

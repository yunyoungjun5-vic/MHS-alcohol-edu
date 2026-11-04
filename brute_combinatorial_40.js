const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return true;
  } catch (err) {}
  return false;
}

// 1. BANG options
const bangs = [
  "%EC%83%9D%EB%B0%A5%EC%86%A1", // 생밥송
  "%EC%83%9D%EB%B0%A9%EC%86%A1", // 생방송
  "%EC%83%9D%EB%B0%A1%EC%86%A1"  // 생박송
];

// 2. ONUL_ACHIM options
const onuls = [
  "_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8", // _오늘의_아침
  "_%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8", // _오늘아침
  "%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8", // 오늘아침
  "" // empty
];

// 3. SHIN_GAJOK options
const gajoks = [
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // _新_가족기획 (normal)
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // _新_가족渝획
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // _新_가족ㄱㅁ
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", // _新_가족渰획
  "_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D", // _新_가족渰획
  "_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D",  // _新가족기획
  "_%E6%96%B0%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D",  // _新가족渝획
  "_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D",          // _가족기획
  "_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D",          // _가족渝획
  ""
];

// 4. NAI_MANEUN options (나이 많은 게 죄인가요)
const naiOptions = [
  "_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94", // _나이_많은_게_죄인가요
  "_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94", // _나이_많은게_죄인가요
  "_%EB%82%98%EC%9D%B4%EB%A7%8E%EC%9D%80%EA%B2%8E%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94", // _나이많은게죄인가요
  "_%EB%82%98%EC%9D%B4%EA%B0%80_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94" // _나이가_많은_게_죄인가요
];

// 5. HUSBAND options
const husbands = [
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8", // _스킨십_안_해주남편
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨십_안_해주남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨십_안_해주는남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A4%80%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨십_안_해준남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨십_안_해주는_남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%89%BD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // _스킨쉽_안_해주남편_출연
  "_%EC%8A%A4%ED%82%A8%EC%89%BD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0" // _스킨쉽_안_해주는남편_출연
];

// Separator between NAI and HUSBAND/출연
const separators = [
  "_",
  "_-_",
  "-"
];

const items = [
  { id: "bc_new40", v: "1775399576", suffix: "1_bh6d3q.jpg" },
  { id: "bc_new41", v: "1775399580", suffix: "2_u3sg2x.jpg" },
  { id: "bc_new42", v: "1775399583", suffix: "3_nog0hx.jpg" }
];

async function run() {
  console.log("--- ROBUST COMBINATORIAL BRUTE ---");
  
  // To avoid spamming too many promises at once, we batch them
  let promises = [];
  const limit = 40; // max concurrent fetches

  for (const item of items) {
    console.log(`Bruting ${item.id}...`);
    let found = false;

    for (const b of bangs) {
      for (const onul of onuls) {
        for (const g of gajoks) {
          for (const nai of naiOptions) {
            for (const h of husbands) {
              for (const sep of separators) {
                // Construct URL
                // Let's form: MBC + BANG + ONUL + GAJOK + NAI + sep + HUSBAND + suffix
                // Notice husbands already start with _ so we replace the leading _ with sep or handle spacer
                const husbPart = h.startsWith("_") ? h : "_" + h;
                
                // Let's create multiple templates
                const templates = [
                  `v${item.v}/MBC_${b}${onul}${g}${nai}${sep}${husbPart.substring(1)}_${item.suffix}`,
                  `v${item.v}/MBC_${b}${onul}${g}${nai}${husbPart}_${item.suffix}`,
                ];

                for (const path of templates) {
                  const url = baseCloudinary + path.replace(/__/g, "_"); // sanitize double underscores

                  promises.push((async () => {
                    if (await test(url)) {
                      console.log(`[SUCCESS FOUND] ${item.id} -> ${url}`);
                      found = true;
                    }
                  })());

                  if (promises.length >= limit) {
                    await Promise.all(promises);
                    promises = [];
                    if (found) break;
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
        if (found) break;
      }
      if (found) break;
    }
  }

  if (promises.length > 0) {
    await Promise.all(promises);
  }
  console.log("Brute search run complete!");
}

run();

const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return url;
  } catch (err) {}
  return null;
}

const gajokTerms = ["%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D"];

// Variations of "新 가족기획" and around it
const midPatterns = (g) => [
  `_E6_96_B0_${g}`, // _新_가족기획
  `_E6_96_B0${g}`,  // _新가족기획
  `E6_96_B0_${g}`,  // 新_가족기획
  `E6_96_B0${g}`,   // 新가족기획
].map(s => s.replace("E6_96_B0", "%E6%96%B0"));

const items = [
  { id: "bc_new40", v: "1775399576", suffix: "1_bh6d3q.jpg" },
  { id: "bc_new41", v: "1775399580", suffix: "2_u3sg2x.jpg" },
  { id: "bc_new42", v: "1775399583", suffix: "3_nog0hx.jpg" }
];

async function run() {
  console.log("--- SCANNING FOR 40, 41, 42 SPACING AND VARIATIONS ---");
  const promises = [];

  for (const item of items) {
    for (const g of gajokTerms) {
      for (const mid of midPatterns(g)) {
        // Try templates with standard spacing around '나이 많은 게 죄인가요 스킨십 안 해주남편 출연'
        // Let's also look at separators like _ or - 
        const titleBody = "%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0";
        const titleBodyNoSpace = "%EB%82%98%EC%9D%B4%EB%A7%8E%EC%9D%80%EA%B2%8C%EC%A3%84%EC%9D%B8%EA%B0%A0%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD%EC%95%88%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0"; // wild guess

        const urls = [
          // Pattern with 오늘의 아침
          `${baseCloudinary}v${item.v}/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_${mid}_${titleBody}_${item.suffix}`,
          `${baseCloudinary}v${item.v}/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_${mid}-${titleBody}_${item.suffix}`,
          `${baseCloudinary}v${item.v}/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8-${mid}-${titleBody}_${item.suffix}`,
          // Pattern without 오늘의 아침
          `${baseCloudinary}v${item.v}/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_${mid}_${titleBody}_${item.suffix}`,
          `${baseCloudinary}v${item.v}/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_${mid}_-_${titleBody}_${item.suffix}`
        ];

        for (const url of urls) {
          promises.push((async () => {
            const result = await test(url);
            if (result) {
              console.log(`FOUND ${item.id}: ${result}`);
            }
          })());
        }
      }
    }
  }

  await Promise.all(promises);
  console.log("Scan completed.");
}

run();

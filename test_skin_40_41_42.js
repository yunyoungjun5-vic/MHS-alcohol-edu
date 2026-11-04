const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return url;
  } catch (err) {}
  return null;
}

const gajokTerms = ["%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D"];
const skinTerms = ["%EC%8A%A4%ED%82%A8%EC%8B%AD", "%EC%8A%A4%ED%82%A8%EC%89%BD"]; // 스킨십, 스킨쉽

const items = [
  { id: "bc_new40", v: "1775399576", suffix: "1_bh6d3q.jpg" },
  { id: "bc_new41", v: "1775399580", suffix: "2_u3sg2x.jpg" },
  { id: "bc_new42", v: "1775399583", suffix: "3_nog0hx.jpg" }
];

async function run() {
  console.log("--- BRUTING SKINSHIP vs SKINSHIP SPELLINGS ---");
  const promises = [];

  for (const item of items) {
    for (const g of gajokTerms) {
      for (const skin of skinTerms) {
        // We'll replace 스킨십 with skin in the original URL
        const originalUrl = `${baseCloudinary}v${item.v}/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_${item.suffix}`
          .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
          .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", g)
          .replaceAll("%EC%8A%A4%ED%82%A8%EC%8B%AD", skin);

        promises.push((async () => {
          const res = await test(originalUrl);
          if (res) {
            console.log(`FOUND ${item.id}: ${res}`);
          }
        })());
      }
    }
  }

  await Promise.all(promises);
  console.log("Skin search done.");
}

run();

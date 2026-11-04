const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return true;
  } catch (err) {}
  return false;
}

// All variations of "생방송"
const bangTerms = ["%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1", "%EC%83%9D%EB%B0%A1%EC%86%A1"];

// All variations of "가족기획"
const gajokTerms = ["%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"];

// All variations of "안 해주는 남편" in Korean:
// - %EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8 (안 해주남편)
// - %EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94%EB%82%A8%ED%8E%B8 (안 해주는남편)
// - %EC%95%88_%ED%95%B4%EC%A4%80%EB%82%A8%ED%8E%B8 (안 해준남편)
const husbTerms = [
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // 스킨십 안 해주남편 출연
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8", // 스킨십 안 해주남편
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_1", // 스킨십 안 해주남편 1
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0", // 스킨십 안 해주는남편 출연
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A4%80%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0" // 스킨십 안 해준남편 출연
];

const items = [
  { id: "bc_new40", v: "1775399576", suffix: "1_bh6d3q.jpg" },
  { id: "bc_new41", v: "1775399580", suffix: "2_u3sg2x.jpg" },
  { id: "bc_new42", v: "1775399583", suffix: "3_nog0hx.jpg" }
];

async function run() {
  console.log("--- BRUTING bc_new40, bc_new41, bc_new42 ---");
  for (const item of items) {
    let found = false;
    for (const b of bangTerms) {
      for (const g of gajokTerms) {
        for (const h of husbTerms) {
          const url = `${baseCloudinary}v${item.v}/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_${h}_${item.suffix}`;
          if (await test(url)) {
            console.log(`FOUND ${item.id}: ${url}`);
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (found) break;
    }
    if (!found) {
      console.log(`NOT FOUND: ${item.id}`);
    }
  }
}

run();

import fs from "fs";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return true;
  } catch (err) {}
  return false;
}

const gajokVariants = [
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 渝
  "%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D", // 渰 (%E6%B8%8D)
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", // 渰 (%E6%B8%B0)
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // Normal
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81"  // ㄱㅁ
];

const items = [
  {
    id: "bc_new35",
    url: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399557/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%82%EB%B0%80_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg"
  },
  {
    id: "bc_new40",
    url: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399576/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg"
  },
  {
    id: "bc_new41",
    url: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399580/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_u3sg2x.jpg"
  },
  {
    id: "bc_new42",
    url: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399583/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_3_nog0hx.jpg"
  }
];

async function run() {
  console.log("--- BRUTING DIRECT REPLACEMENTS FOR 35, 40, 41, 42 ---");
  for (const item of items) {
    let found = false;
    for (const g of gajokVariants) {
      let testUrl = item.url
        .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
        .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
        .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", g);

      if (await test(testUrl)) {
        console.log(`[OK] ${item.id} (with ${g}): ${testUrl}`);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`[FAIL] ${item.id}`);
    }
  }
}

run();

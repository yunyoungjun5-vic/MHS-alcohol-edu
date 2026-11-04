const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) {
      return true;
    }
  } catch (err) {}
  return false;
}

const gajokOpts = [
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 渝
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // Normal
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // ㄱㅁ
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 渰
];

const items = [
  {
    id: "bc_new34",
    v: "1775399553",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%82%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg"
  },
  {
    id: "bc_new35",
    v: "1775399557",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%82%EB%B0%80_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg"
  },
  {
    id: "bc_new36",
    v: "1775399561",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%85%EC%9D%84%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg"
  },
  {
    id: "bc_new36_yal",
    v: "1775399561",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg"
  },
  {
    id: "bc_new37",
    v: "1775399565",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%95_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_nzfnxq.jpg"
  },
  {
    id: "bc_new38",
    v: "1775399568",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_1_ihihbj.jpg"
  },
  {
    id: "bc_new39",
    v: "1775399572",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_ok89bv.jpg"
  },
  {
    id: "bc_new40",
    v: "1775399576",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg"
  },
  {
    id: "bc_new41",
    v: "1775399580",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_u3sg2x.jpg"
  },
  {
    id: "bc_new42",
    v: "1775399583",
    pattern: "MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_{GAJOK}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_3_nog0hx.jpg"
  }
];

async function main() {
  console.log("--- FINDING CORRECT TYPO PATTERNS ---");
  for (const item of items) {
    for (const g of gajokOpts) {
      const url = `${baseCloudinary}v${item.v}/${item.pattern.replace("{GAJOK}", g)}`;
      if (await testUrl(url)) {
        console.log(`[SUCCESS] ${item.id} (with ${g}): ${url}`);
        break;
      }
    }
  }
}

main();

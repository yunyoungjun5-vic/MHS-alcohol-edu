const base = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) {
      console.log(`FOUND 200: ${url}`);
      return true;
    }
  } catch (err) {}
  return false;
}

const gajoks = [
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D",
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D",
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81"
];

const items = [
  { id: "bc_new40", v: "1775399576", h: "1_bh6d3q" },
  { id: "bc_new41", v: "1775399580", h: "2_u3sg2x" },
  { id: "bc_new42", v: "1775399583", h: "3_nog0hx" }
];

async function run() {
  console.log("--- SIMPLIFIED LOGIC PROBING ---");
  for (const item of items) {
    console.log(`\nTesting ${item.id}...`);
    let found = false;

    // We'll generate dynamic candidates based on sub-wording
    for (const g of gajoks) {
      const candidates = [
        // Candidate 1: completely literal without 스킨십 segment
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%B6%9C%EC%97%B0_${item.h}.jpg`,
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%B6%9C%EC%97%B0_${item.h}.jpg`,
        
        // Candidate 2: without "출연" word
        `MBC_%EC%83%9D%EB%B0%A0%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_${item.h}.jpg`,
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_${item.h}.jpg`,

        // Candidate 3: simple number suffix
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_${item.h}.jpg`,
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_${item.h}.jpg`,

        // Candidate 4: only MBC_생방송_오늘의_아침_新_가족기획_-_나이_많은_게_죄인가요
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_${item.h}.jpg`,
        `MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_${item.h}.jpg`
      ];

      for (const cand of candidates) {
        const url = `${base}v${item.v}/${cand}`;
        if (await test(url)) {
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      console.log(`  [FAILED] ${item.id} not found.`);
    }
  }
}

run();

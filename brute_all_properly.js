const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

const items = [
  {
    id: "bc_new34",
    v: "1775399553",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_-_아내_노트의_비밀_출연_1_dume9m.jpg"
  },
  {
    id: "bc_new35",
    v: "1775399557",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_-_아내_노트의_비밀_출연_2_xyebjx.jpg"
  },
  {
    id: "bc_new36",
    v: "1775399561",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_-_외간남자_{BUREUL}_봐_집_지키는_남편_출연_1_kwexhw.jpg"
  },
  {
    id: "bc_new37",
    v: "1775399565",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_-_외간남자_{BUREUL}_봐_집_지키는_남편_출연_2_nzfnxq.jpg"
  },
  {
    id: "bc_new38",
    v: "1775399568",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_-_친정엄마_짝사랑_하는_딸_:_그녀가_친정에_못가는_이유_출연_1_ihihbj.jpg"
  },
  {
    id: "bc_new39",
    v: "1775399572",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_-_친정엄마_짝사랑_하는_딸_그녀가_친정에_못가는_이유_출연_ok89bv.jpg"
  },
  {
    id: "bc_new40",
    v: "1775399576",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_나이_많은_게_죄인가요_스킨십_안_해주는_남편_출연_1_bh6d3q.jpg"
  },
  {
    id: "bc_new41",
    v: "1775399580",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_나이_많은_게_죄인가요_스킨십_안_해주는_남편_출연_2_u3sg2x.jpg"
  },
  {
    id: "bc_new42",
    v: "1775399583",
    suffix: "MBC_{BANG}_오늘의_아침_新_{GAJOK}_나이_많은_게_죄인가요_스킨십_안_해주는_남편_출연_3_nog0hx.jpg"
  },
  {
    id: "bc_new43",
    v: "1775399588",
    suffix: "MBC_{BANG}_출연_新_{GAJOK}_자식만_{JULJUL}_낳아_놓고._나몰라라_철없는_남편_1_nvt6mg.jpg"
  },
  {
    id: "bc_new44",
    v: "1775399592",
    suffix: "MBC_{BANG}_출연_新_{GAJOK}_자식만_{JULJUL}_낳아_놓고._나몰라라_철없는_남편_2_quqd8o.jpg"
  },
  {
    id: "bc_new45",
    v: "1775399595",
    suffix: "MBC_{BANG}_출연_新_{GAJOK}_자식만_{JULJUL}_낳아_놓고._나몰라라_철없는_남편_3_bc1igk.jpg"
  },
  {
    id: "bc_new46",
    v: "1775399611",
    suffix: "MBC_{BANG}오늘의_아침_新{GAJOK}_-_심리상황극_방송_촬영_0331_1_hrvcvn.jpg"
  },
  {
    id: "bc_new47",
    v: "1775399599",
    suffix: "MBC_{BANG}오늘의_아침_新{GAJOK}_-_심리상황극_방송_촬영_0331_2_fwsc8n.jpg"
  }
];

// Candidates
const bangOpts = [
  "%EC%83%9D%EB%B0%A9%EC%86%A1", // 생방송
  "%EC%83%9D%EB%B0%A5%EC%86%A1", // 생밥송
  "%EC%83%9D%EB%B0%A1%EC%86%A1"  // 생박송
];

const gajokOpts = [
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // 가족기획 (correct)
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 가족기획 (typo with 渝)
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // 가족ㄱㅁ (compatibility)
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 가족기획 (another typo)
];

const bureulOpts = [
  "%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%85", // 부를까 봉/봅
  "%EB%B6%85%EC%9D%84%EA%B9%8C_%EB%B4%90", // 붕을까 봐
  "%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%90"  // 부를까 봐
];

const juljulOpts = [
  "%EC%A4%84%EC%A4%84%EC%1D%B4", // 줄줄이 (malformed 1D)
  "%EC%A4%84%EC%A4%84%EC%9D%B4"  // 줄줄이 (correct)
];

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.status;
  } catch (err) {
    return 400;
  }
}

async function run() {
  console.log("Starting master brute-force in background...");
  for (const item of items) {
    let found = false;
    for (const b of bangOpts) {
      for (const g of gajokOpts) {
        for (const bu of bureulOpts) {
          for (const j of juljulOpts) {
            let processedSuffix = item.suffix
              .replaceAll("{BANG}", b)
              .replaceAll("{GAJOK}", g)
              .replaceAll("{BUREUL}", bu)
              .replaceAll("{JULJUL}", j);

            // Also test without spaces/hyphens around "오늘의_아침" vs "오늘아침"
            const url = `${baseCloudinary}v${item.v}/${processedSuffix}`;
            const status = await testUrl(url);
            if (status === 200) {
              console.log(`FOUND ${item.id}: "${url}"`);
              found = true;
              break;
            }

            // Test alternative: "오늘아침" instead of "오늘의_아침" or vice versa
            let alternativeSuffix = processedSuffix;
            if (processedSuffix.includes("오늘의_아침")) {
              alternativeSuffix = processedSuffix.replaceAll("오늘의_아침", "오늘아침");
            } else if (processedSuffix.includes("오늘아침")) {
              alternativeSuffix = processedSuffix.replaceAll("오늘아침", "오늘의_아침");
            }

            if (alternativeSuffix !== processedSuffix) {
              const urlAlt = `${baseCloudinary}v${item.v}/${alternativeSuffix}`;
              const statusAlt = await testUrl(urlAlt);
              if (statusAlt === 200) {
                console.log(`FOUND ${item.id}: "${urlAlt}"`);
                found = true;
                break;
              }
            }
          }
          if (found) break;
        }
        if (found) break;
      }
      if (found) break;
    }
    if (!found) {
      console.log(`FAILED TO FIND URL FOR ${item.id}`);
    }
  }
}

run();

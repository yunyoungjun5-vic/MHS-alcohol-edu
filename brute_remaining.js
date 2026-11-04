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

// All variations of names
const varTerms = ["%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1", "%EC%83%9D%EB%B0%A1%EC%86%A1"]; // 생밥송, 생방송, 생박송

async function brute36() {
  console.log("--- BRUTING bc_new36 ---");
  // Original is: v1775399561/MBC_{VAR}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg
  // In Korean, "얄 지키는 남편" is translated from `%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_...`
  // Let's try replacing "%EC%96%84" (얄/얇) with other characters:
  // - 외간남자 부를까 봐 집 지키는 남편 -> "집_지키는_남편" -> "%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94"
  // - "외_지키는"
  // - "얄_지키는" -> "%EC%96%84"
  // - "얇_지키는" -> "%EC%96%87" or "%EC%96%84"
  const wordCandidates = [
    "%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8", // 얄 지키는 남편
    "%EC%96%94_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8", // 야/얹 지키는 남편
    "%EC%99%B8_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8", // 외 지키는 남편
    "%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8", // 집 지키는 남편
    "%EC%96%94_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg", // wait, what about different suffix?
  ];

  for (const v of varTerms) {
    const templates = [
      `v1775399561/MBC_${v}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg`,
      `v1775399561/MBC_${v}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%96%94_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg`,
      `v1775399561/MBC_${v}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg`,
      `v1775399561/MBC_${v}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%96%94_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg`.replaceAll("_-_", "_"),
    ];

    for (const t of templates) {
      const url = baseCloudinary + t;
      if (await testUrl(url)) {
        console.log(`FOUND bc_new36: ${url}`);
        return;
      }
    }
  }
  console.log("bc_new36 not found yet");
}

async function brute43to45() {
  console.log("--- BRUTING bc_new43, bc_new44, bc_new45 ---");
  // Original is: v1775399588/MBC_생밥송_출연_新_가족기획_자식만_줄줄이_낳아_놓고._나몰라라_철없는_남편_1_nvt6mg.jpg
  // Let's try options with or without period, with or without '출연' prefix, or variations.
  const ids = [
    { num: "43", id_suffix: "1_nvt6mg.jpg", val: "1775399588" },
    { num: "44", id_suffix: "2_quqd8o.jpg", val: "1775399592" },
    { num: "45", id_suffix: "3_bc1igk.jpg", val: "1775399595" }
  ];

  for (const item of ids) {
    let found = false;
    for (const v of varTerms) {
      const candidates = [
        // With period and 출연
        `v${item.val}/MBC_${v}_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_${item.id_suffix}`,
        // Without period
        `v${item.val}/MBC_${v}_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0_%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_${item.id_suffix}`,
        // Without 출연
        `v${item.val}/MBC_${v}_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_${item.id_suffix}`,
        // Raw URL with space or hyphens
        `v${item.val}/MBC_${v}_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_${item.id_suffix}`,
      ];

      for (const c of candidates) {
        const url = baseCloudinary + c;
        if (await testUrl(url)) {
          console.log(`FOUND ${item.num}: ${url}`);
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }
}

async function run() {
  await brute36();
  await brute43to45();
}

run();

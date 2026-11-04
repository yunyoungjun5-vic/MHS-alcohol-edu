const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(name, url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) {
      console.log(`[OK] ${name}: ${url}`);
      return true;
    }
  } catch (err) {}
  return false;
}

async function run() {
  console.log("--- START FAST TARGETED TESTS ---");

  // bc_new36 (v1775399561)
  // Let's try variations of:
  // - %EC%83%9D%EB%B0%A9%EC%86%A1 (생방송)
  // - %EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D (가족기획) vs %EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D etc
  // - %EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94 (얄 지키는) vs %EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90...
  const bangs = ["%EC%83%9D%EB%B0%A9%EC%86%A1"];
  const gajoks = ["%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81"];
  const bodies36 = [
    "_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
    "_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%85%EC%9D%84%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
    "_-%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
    "_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg"
  ];

  for (const b of bangs) {
    for (const g of gajoks) {
      for (const bo of bodies36) {
        const url = `${baseCloudinary}v1775399561/MBC_${b}_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}${bo}`;
        const urlWithOndeul = `${baseCloudinary}v1775399561/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}${bo}`;
        await test("bc_new36_1", url);
        await test("bc_new36_2", urlWithOndeul);
      }
    }
  }

  // let's check bc_new38 and bc_new39 (v1775399568, v1775399572)
  for (const b of bangs) {
    for (const g of gajoks) {
      // original has _-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8...
      const url38 = `${baseCloudinary}v1775399568/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_1_ihihbj.jpg`;
      const url39 = `${baseCloudinary}v1775399572/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_ok89bv.jpg`;
      await test("bc_new38", url38);
      await test("bc_new39", url39);
    }
  }

  // for bc_new40, 41, 42 (v1775399576, 1775399580, 1775399583)
  for (const b of bangs) {
    for (const g of gajoks) {
      const url40 = `${baseCloudinary}v1775399576/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%A8%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg`;
      const url40_alt = `${baseCloudinary}v1775399576/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg`;
      await test("bc_new40_alt1", url40);
      await test("bc_new40_alt2", url40_alt);

      const url41 = `${baseCloudinary}v1775399580/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_u3sg2x.jpg`;
      await test("bc_new41", url41);

      const url42 = `${baseCloudinary}v1775399583/MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_3_nog0hx.jpg`;
      await test("bc_new42", url42);
    }
  }

  // for bc_new43, 44, 45 (v1775399588, 1775399592, 1775399595)
  // 자식만_줄줄이_낳아_놓고._나몰라라_철없는_남편
  // Let's try %EC%9D%B4 vs %EC%1D%B4 of "줄줄이"
  const juls = ["%EC%A4%84%EC%A4%84%EC%9D%B4", "%EC%A4%84%EC%A4%84%EC%1D%B4"];
  for (const b of bangs) {
    for (const g of gajoks) {
      for (const j of juls) {
        const url43 = `${baseCloudinary}v1775399588/MBC_${b}_%EC%B6%9C%EC%97%B0_%E6%96%B0_${g}_%EC%9E%90%EC%8B%9D%EB%A7%8C_${j}_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_1_nvt6mg.jpg`;
        await test("bc_new43", url43);

        const url44 = `${baseCloudinary}v1775399592/MBC_${b}_%EC%B6%9C%EC%97%B0_%E6%96%B0_${g}_%EC%9E%90%EC%8B%9D%EB%A7%8C_${j}_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_2_quqd8o.jpg`;
        await test("bc_new44", url44);

        const url45 = `${baseCloudinary}v1775399595/MBC_${b}_%EC%B6%9C%EC%97%B0_%E6%96%B0_${g}_%EC%9E%90%EC%8B%9D%EB%A7%8C_${j}_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_3_bc1igk.jpg`;
        await test("bc_new45", url45);
      }
    }
  }

  // for bc_new46, 47 (v1775399611, 1775399599)
  // MBC_생방송오늘아침_新가족기획_-_심리상황극_방송_촬영_0331_1_hrvcvn.jpg
  // Let's try combining with/without _ after MBC_생방송
  for (const b of bangs) {
    for (const g of gajoks) {
      const url46 = `${baseCloudinary}v1775399611/MBC_${b}%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0${g}_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_1_hrvcvn.jpg`;
      const url46_alt = `${baseCloudinary}v1775399611/MBC_${b}_%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0${g}_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_1_hrvcvn.jpg`;
      await test("bc_new46", url46);
      await test("bc_new46_alt", url46_alt);

      const url47 = `${baseCloudinary}v1775399599/MBC_${b}%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0${g}_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_2_fwsc8n.jpg`;
      const url47_alt = `${baseCloudinary}v1775399599/MBC_${b}_%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0${g}_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_2_fwsc8n.jpg`;
      await test("bc_new47", url47);
      await test("bc_new47_alt", url47_alt);
    }
  }

  console.log("--- FAST TESTS COMPLETED ---");
}

run();

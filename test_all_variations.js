const idsAndPaths = {
  "bc_new34": "v1775399553/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg",
  "bc_new35": "v1775399557/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg",
  "bc_new36": "v1775399561/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
  "bc_new37": "v1775399565/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_nzfnxq.jpg",
  "bc_new38": "v1775399568/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%B0_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_1_ihihbj.jpg",
  "bc_new39": "v1775399572/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%80_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_ok89bv.jpg",
  "bc_new40": "v1775399576/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg",
  "bc_new41": "v1775399580/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_u3sg2x.jpg",
  "bc_new42": "v1775399583/MBC_{VARIANT}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_3_nog0hx.jpg",
  "bc_new43": "v1775399588/MBC_{VARIANT}_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_1_nvt6mg.jpg",
  "bc_new44": "v1775399592/MBC_{VARIANT}_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_2_quqd8o.jpg",
  "bc_new45": "v1775399595/MBC_{VARIANT}_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_3_bc1igk.jpg",
  "bc_new46": "v1775399611/MBC_{VARIANT}%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_1_hrvcvn.jpg",
  "bc_new47": "v1775399599/MBC_{VARIANT}%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_2_fwsc8n.jpg"
};

const variants = {
  "bap_bap": "%EC%83%9D%EB%B0%A5%EC%86%A1", // 생밥송
  "bang_bang": "%EC%83%9D%EB%B0%A5%EC%86%A1", // Let's check what variants exist
  "bak_bak": "%EC%83%9D%EB%B0%A1%EC%86%A1", // 생박송
  "bang_real": "%EC%83%9D%EB%B0%A9%EC%86%A1" // 생방송
};

// Wait, let's look at the "가족기획" characters inside the URL of the script.
// In the script, we had: "%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D" in bc_new34, but in bc_new35 we had "%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"!
// Wait, %E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D -> %E6%96%B0 is 新, %EA%B0%80%EC%A1%B1 is 가족, %E6%B8%8D%ED%9A%8D is 기획? No!
// Let's check what %E6%B8%8D%ED%9A%8D is. It's not right. The correct encoding for "기획" should be %EA%B8%B0%ED%9A%8D.
// Let's decode the original string in line 310 of the original file:
// "MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg"
// Wait! Let's write a script that checks variations with ALL character replacements:
// e.g., the base URL is:
// https://res.cloudinary.com/dxjz9ksjg/image/upload/ ...
// Let's pull the precise original URL from the checkoint description where the user has the original grep lines!

const originalUrls = {
  bc_new34: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg",
  bc_new35: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399557/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg",
  bc_new36: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399561/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
  bc_new37: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399565/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_nzfnxq.jpg",
  bc_new38: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399568/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%80_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_1_ihihbj.jpg",
  bc_new39: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399572/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%80_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_ok89bv.jpg",
  bc_new40: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399576/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg",
  bc_new41: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399580/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_u3sg2x.jpg",
  bc_new42: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399583/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_3_nog0hx.jpg",
  bc_new43: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399588/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%1D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_1_nvt6mg.jpg",
  bc_new44: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399592/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%1D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_2_quqd8o.jpg",
  bc_new45: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399595/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%1D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_3_bc1igk.jpg",
  bc_new46: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399611/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1%EC%98%A4%EB%8A%98%EC%5D%95%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_1_hrvcvn.jpg",
  bc_new47: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399599/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1%EC%98%A4%EB%8A%98%EC%5D%95%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_2_fwsc8n.jpg"
};

async function testAll() {
  for (const [id, url] of Object.entries(originalUrls)) {
    // Try original
    const resOrig = await fetch(url, { method: 'HEAD' });
    console.log(`${id} -> Original Status: ${resOrig.status}`);

    // Try replaces
    const withBang = url
      .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
      .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1");
    const resBang = await fetch(withBang, { method: 'HEAD' });
    console.log(`${id} -> With Bang Status: ${resBang.status}`);
  }
}

testAll();

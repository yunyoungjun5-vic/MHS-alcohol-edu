const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.status;
  } catch (err) {
    return "ERR";
  }
}

const ids = [
  { num: "43", id_suffix: "1_nvt6mg.jpg", val: "1775399588" },
  { num: "44", id_suffix: "2_quqd8o.jpg", val: "1775399592" },
  { num: "45", id_suffix: "3_bc1igk.jpg", val: "1775399595" }
];

async function run() {
  for (const item of ids) {
    // try with %EC%83%9D%EB%B0%A9%EC%86%A1 (생방송)
    const url = `${baseCloudinary}v${item.val}/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_${item.id_suffix}`;
    const status = await testUrl(url);
    console.log(`bc_new${item.num} with Bang -> Status: ${status} [URL: ${url}]`);
  }
}

run();

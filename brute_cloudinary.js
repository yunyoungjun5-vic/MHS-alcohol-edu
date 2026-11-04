const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

// These are the exact original URLs with the typo "생밥송" or "생박송" that were in the code.
const originalEncodedUrls = {
  bc_new36: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399561/MBC_%EC%83%9D%EB%B0%A1%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%96%84_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
  bc_new43: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399588/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_1_nvt6mg.jpg",
  bc_new44: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399592/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_2_quqd8o.jpg",
  bc_new45: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399595/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_3_bc1igk.jpg",
};

async function check(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status;
  } catch (e) {
    return 'ERROR';
  }
}

async function run() {
  for (const [id, url] of Object.entries(originalEncodedUrls)) {
    console.log(`\nTesting ${id}:`);
    const decoded = decodeURIComponent(url);
    console.log(`Decoded: ${decoded}`);

    // Try with MBC_생방송
    const withBang = url
      .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
      .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1");
    
    const s1 = await check(withBang);
    console.log(`With Bang Status: ${s1} for ${withBang}`);
    
    // Let's also verify if different words exist, e.g. replacing '가족기획' with '가족기기' or checking the spelling.
    // Wait, are they failing because of some other reason?
    // Let's print the withBang url.
  }
}

run();

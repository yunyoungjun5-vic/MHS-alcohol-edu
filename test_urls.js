async function check(name, url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(`${name} -> Status: ${res.status}`);
  } catch (err) {
    console.log(`${name} -> Error: ${err.message}`);
  }
}

const urls = {
  '생밥송 (Saeng-Bap-Song)': "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg",
  '생방송 (Saeng-Bang-Song)': "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg",
  '생박송 (Saeng-Bak-Song)': "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A1%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg"
};

(async () => {
  for (const [name, url] of Object.entries(urls)) {
    await check(name, url);
  }
})();

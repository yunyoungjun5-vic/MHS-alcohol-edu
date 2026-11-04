const originalUrls = {
  bc_new34: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A1%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%82%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg",
  bc_new35: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399557/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%82%EB%B0%80_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg",
  bc_new36: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399561/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%85%EC%9D%84%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg",
  bc_new37: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399565/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%95_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_nzfnxq.jpg",
  bc_new38: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399568/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_1_ihihbj.jpg"
};

const gajokVariants = [
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 渝
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // Normal
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // ㄱㅁ
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 渰
];

const bangVariants = [
  "%EC%83%9D%EB%B0%A9%EC%86%A1", // 생방송
  "%EC%83%9D%EB%B0%A5%EC%86%A1"  // 생밥송
];

async function run() {
  for (const [id, url] of Object.entries(originalUrls)) {
    console.log(`\nTesting ${id}:`);
    for (const b of bangVariants) {
      for (const g of gajokVariants) {
        let testUrl = url
          .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", b)
          .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", b)
          .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", g)
          .replaceAll("%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", g);
        
        const res = await fetch(testUrl, { method: "HEAD" });
        if (res.status === 200) {
          console.log(`  [OK] with bang=${b}, gajok=${g} -> URL: ${testUrl}`);
        }
      }
    }
  }
}

run();

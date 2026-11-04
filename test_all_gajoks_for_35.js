const base = "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399557/";

const bangs = ["%EC%83%9D%EB%B0%A9%EC%86%A1"];
const gajoks = ["%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%8D%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"];
const bils = ["%EB%B9%84%EB%B0%80", "%EB%B9%82%EB%B0%80"];

async function run() {
  const promises = [];
  for (const b of bangs) {
    for (const g of gajoks) {
      for (const bil of bils) {
        const url = `${base}MBC_${b}_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_${g}_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_${bil}_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg`;
        promises.push((async () => {
          const res = await fetch(url, { method: "HEAD" });
          if (res.status === 200) {
            console.log(`FOUND 35: ${url}`);
          }
        })());
      }
    }
  }
  await Promise.all(promises);
  console.log("35 search done.");
}

run();

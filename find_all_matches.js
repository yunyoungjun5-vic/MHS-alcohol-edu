import fs from "fs";

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.status;
  } catch (err) {
    return 404;
  }
}

const gajokOpts = [
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // Normal
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 渝
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // ㄱㅁ
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 渰
];

const bangOpts = [
  "%EC%83%9D%EB%B0%A5%EC%86%A1", // 생밥송
  "%EC%83%9D%EB%B0%A1%EC%86%A1", // 생박송
  "%EC%83%9D%EB%B0%A9%EC%86%A1"  // 생방송
];

async function run() {
  const content = fs.readFileSync("src/pages/MediaCoverage.tsx", "utf-8");
  const regex = /id:\s*"(bc_new\d+)",.*?image:\s*"(https:\/\/res\.cloudinary\.com\/[^"]+)"/gs;
  
  let match;
  console.log("--- SCANNING FOR ALL INDIVIDUAL MATCHES ---");
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const originalUrl = match[2];
    const num = parseInt(id.replace("bc_new", ""));
    if (num < 34 || num > 47) continue;

    console.log(`\nTesting ${id}:`);
    let found = false;
    for (const b of bangOpts) {
      for (const g of gajokOpts) {
        // Build base replacement
        let targetUrl = originalUrl
          .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", b)
          .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", b)
          .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", g)
          .replaceAll("%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", g)
          .replaceAll("%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", g)
          .replaceAll("%EC%1D%B4", "%EC%9D%B4"); // 줄줄이 malformed info

        const status = await testUrl(targetUrl);
        if (status === 200) {
          console.log(`  [OK] with bang=${b}, gajok=${g} -> URL: ${targetUrl}`);
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (!found) {
      // If we still can't find it, let's try a very wide brute force of other possible typos
      // like "봐" -> "%EB%B4%95" or "부가" etc for bc_new36, bc_new37
      console.log(`  [NOT FOUND YET] try other variations...`);
      for (const b of bangOpts) {
        for (const g of gajokOpts) {
          // let's try replacing "봐" or "붕을까" specifically for bc_new36/37
          let targetUrlAlt = originalUrl
            .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", b)
            .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", b)
            .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", g)
            .replaceAll("%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", g)
            .replaceAll("%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", g)
            .replaceAll("%EC%1D%B4", "%EC%9D%B4")
            .replaceAll("%EB%B6%85%EC%9D%84%EA%B9%8C", "%EB%B6%80%EB%A5%BC%EA%B9%8C") // "붕을까" -> "부를까"
            .replaceAll("%EB%B4%95", "%EB%B4%90"); // "봉/봅" -> "봐"
          
          const status = await testUrl(targetUrlAlt);
          if (status === 200) {
            console.log(`  [OK OUTSIDE BASIC] bang=${b}, gajok=${g} -> URL: ${targetUrlAlt}`);
            found = true;
            break;
          }
        }
        if (found) break;
      }
    }
  }
}

run();

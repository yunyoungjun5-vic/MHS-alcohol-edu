import fs from "fs";

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.status;
  } catch (err) {
    return "ERR";
  }
}

async function run() {
  const content = fs.readFileSync("src/pages/MediaCoverage.tsx", "utf-8");
  const regex = /id:\s*"(bc_new\d+)",.*?image:\s*"(https:\/\/res\.cloudinary\.com\/[^"]+)"/gs;
  
  let match;
  console.log("--- ULTIMATE CLEAN TESTS ---");
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const originalUrl = match[2];
    const num = parseInt(id.replace("bc_new", ""));
    if (num < 34 || num > 47) continue;

    // We saw that:
    // 1. Any variation of "생밥송" (%EC%83%9D%EB%B0%A5%EC%86%A1) or "생박송" (%EC%83%9D%EB%B0%A1%EC%86%A1) must become "생방송" (%EC%83%9D%EB%B0%A9%EC%86%A1)
    // 2. Any malformed "%EC%1D%B4" must become "%EC%9D%B4"
    // Let's test this direct clean solution:
    let fixedUrl = originalUrl
      .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
      .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
      .replaceAll("%EC%1D%B4", "%EC%9D%B4");

    let status = await testUrl(fixedUrl);
    
    // If it's 404, let's see if replacing "가족기획" (%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D) with "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D" or "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81" fixes it.
    if (status === 404) {
      const gajokVariants = [
        "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 渝
        "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // ㄱㅁ
        "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 渰
      ];
      for (const variant of gajokVariants) {
        let altUrl = fixedUrl
          .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", variant)
          .replaceAll("%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", variant);
        const statusAlt = await testUrl(altUrl);
        if (statusAlt === 200) {
          fixedUrl = altUrl;
          status = 200;
          break;
        }
      }
    }

    // Let's check other possible character corruptions for remaining 404s
    if (status === 404) {
      // E.g., for bc_new36, what is its actual layout?
      // Let's check with standard 가족기획 with %EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D
      // and checking if we replace "외간남자_붕을까_봐..." with different strings or "붕" vs "부"
    }

    console.log(`[${status === 200 ? "OK" : "FAILED"}] ${id} -> Status: ${status} | URL: ${fixedUrl}`);
  }
}

run();

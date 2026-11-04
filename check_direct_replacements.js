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
  const regex = /(id:\s*"bc_new\d+",[^}]*?image:\s*"(https:\/\/res\.cloudinary\.com\/[^"]+)")/gs;
  
  let match;
  console.log("--- DIRECT REPLACEMENT TESTS ---");
  while ((match = regex.exec(content)) !== null) {
    const idMatch = match[1].match(/id:\s*"(bc_new\d+)"/);
    if (!idMatch) continue;
    const id = idMatch[1];
    const num = parseInt(id.replace("bc_new", ""));
    if (num < 34 || num > 47) continue;

    const originalUrl = match[2];

    // Apply clean strategic replacements
    let fixedUrl = originalUrl
      .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1") // 생밥송 -> 생방송
      .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1") // 생박송 -> 생방송
      .replaceAll("%EC%1D%B4", "%EC%9D%B4"); // Malformed %EC%1D%B4 -> %EC%9D%B4 in 줄줄이

    // Let's also verify if there is another typo "가족기획" -> "가족기기" or similar
    // We noticed that bc_new35 and bc_new37 worked with %EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D (가족기획 with 渝)
    // Wait, let's check what is in the original file for bc_new35:
    // In src/pages/MediaCoverage.tsx:
    // Line 334 has "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", but %EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D is the correct one on Cloudinary!
    // Ah! Let's check that!
    
    const status = await testUrl(fixedUrl);
    console.log(`${id} -> Status: ${status} for URL: ${fixedUrl}`);

    // If it's 404, let's try replacing %EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D with %EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D or other variants
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
          console.log(`  [SOLVED] ${id} works with variant ${variant}: ${altUrl}`);
          break;
        }
      }
    }
  }
}

run();

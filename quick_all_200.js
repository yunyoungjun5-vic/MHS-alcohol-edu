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
  console.log("--- FINAL PROOF OF CONCEPT ---");
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const originalUrl = match[2];
    const num = parseInt(id.replace("bc_new", ""));
    if (num < 34 || num > 47) continue;

    // Apply BOTH changes:
    // 1. 생밥송/생박송 -> 생방송
    // 2. 가족기획/가족기기/가족ㄱㅁ -> always %EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D (The working version on Cloudinary!)
    // 3. %EC%1D%B4 -> %EC%9D%B4
    let fixedUrl = originalUrl
      .replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
      .replaceAll("%EC%83%9D%EB%B0%A1%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1")
      .replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D")
      .replaceAll("%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D")
      .replaceAll("%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D", "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D")
      .replaceAll("%EC%1D%B4", "%EC%9D%B4");

    const status = await testUrl(fixedUrl);
    console.log(`[${status === 200 ? "OK" : "FAILURE - " + status}] ${id} -> URL: ${fixedUrl}`);
  }
}

run();

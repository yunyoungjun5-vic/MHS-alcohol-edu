import fs from "fs";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) return true;
  } catch (err) {}
  return false;
}

const gajokVariants = [
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // Normal (this is already in the file)
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 渝
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // ㄱㅁ
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 渰
];

async function run() {
  const content = fs.readFileSync("src/pages/MediaCoverage.tsx", "utf-8");
  const regex = /id:\s*"(bc_new\d+)",.*?image:\s*"(https:\/\/res\.cloudinary\.com\/[^"]+)"/gs;
  
  let match;
  console.log("--- RUNNING PRECISE RELATIVE REPLACEMENTS ---");
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const originalUrl = match[2];
    const num = parseInt(id.replace("bc_new", ""));
    if (num !== 40 && num !== 41 && num !== 42) continue;

    console.log(`\nProbing combinations for ${id}...`);
    let found = false;

    // We only replace %EC%83%9D%EB%B0%A5%EC%86%A1 (생밥송) -> %EC%83%9D%EB%B0%A9%EC%86%A1 (생방송)
    let fixedBang = originalUrl.replaceAll("%EC%83%9D%EB%B0%A5%EC%86%A1", "%EC%83%9D%EB%B0%A9%EC%86%A1");

    for (const g of gajokVariants) {
      let finalUrl = fixedBang.replaceAll("%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", g);
      if (await test(finalUrl)) {
        console.log(`  [OK] ${id} with gajok=${g} -> URL: ${finalUrl}`);
        found = true;
        break;
      }
    }

    if (!found) {
      console.log(`  [FAILED] ${id} could not be resolved by simple replaces.`);
    }
  }
}

run();

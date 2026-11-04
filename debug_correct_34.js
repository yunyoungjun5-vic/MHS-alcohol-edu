import fs from "fs";

const content = fs.readFileSync("test_all_images.js", "utf-8");
const match = content.match(/correctNew34 = "([^"]+)"/);
const url = match[1];

const testUrl = "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%82%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg";

console.log(`Length extracted: ${url.length}, testUrl: ${testUrl.length}`);
if (url === testUrl) {
  console.log("Exactly identical!");
} else {
  for (let i = 0; i < Math.max(url.length, testUrl.length); i++) {
    if (url[i] !== testUrl[i]) {
      console.log(`Difference at index ${i}: extracted='${url[i]}' (${url.charCodeAt(i)}), testUrl='${testUrl[i]}' (${testUrl.charCodeAt(i)})`);
      break;
    }
  }
}

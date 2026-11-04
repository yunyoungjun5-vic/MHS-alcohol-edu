const baseCloudinary = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (res.status === 200) {
      console.log(`[FOUND WORKING URL] -> ${url}`);
      return true;
    }
  } catch (err) {}
  return false;
}

const bangs = [
  "%EC%83%9D%EB%B0%A9%EC%86%A1", // 생방송
  "%EC%83%9D%EB%B0%A5%EC%86%A1"  // 생밥송
];

const gajoks = [
  "%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D", // 가족기획
  "%EA%B0%80%EC%A1%B1%E6%B8%9D%ED%9A%8D", // 가족渝획
  "%EA%B0%80%EC%A1%B1%E3%84%93%E3%85%81", // 가족ㄱㅁ
  "%EA%B0%80%EC%A1%B1%E6%B8%B0%ED%9A%8D"  // 가족渰획
];

const onuls = [
  "_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8",
  ""
];

const skins = [
  // "스킨십 안 해주남편"
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8",
  // "스킨십 안 해주는 남편"
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8",
  // "스킨십 안해주는 남편"
  "%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%84_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8",
  // "스킨십안해주는남편"
  "%EC%8A%A4%ED%82%A8%EC%8B%AD%EC%95%88%ED%95%B4%EC%A3%BC%EB%8A%94%EB%82%A8%ED%8E%B8",
  // "스킨쉽 안 해주남편"
  "%EC%8A%A4%ED%82%A8%EC%89%BD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8",
  // "스킨쉽 안 해주는 남편"
  "%EC%8A%A4%ED%82%A8%EC%89%BD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8"
];

const nais = [
  // "나이 많은 게 죄인가요"
  "%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94",
  // "나이 많은 게 죄인가요 "
  "%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_",
  // "나이 많은게 죄인가요"
  "%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94",
  // "나이많은게죄인가요"
  "%EB%82%98%EC%9D%B4%EB%A7%8E%EC%9D%80%EA%B2%8E%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94",
  // "나이 많은 게 죄인 가요"
  "%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8_%EA%B0%80%EC%9A%94",
  // "나이 많은 게 죄인가요" with other spacing
  "%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8E_%EC%A3%84%EC%9D%B8%EA%B0%80"
];

// Separator after gajok
const seps = [
  "_",
  "_-_",
  "-"
];

async function run() {
  console.log("--- STARTING SOLVER FOR bc_new40 ---");
  let found = false;

  for (const b of bangs) {
    for (const g of gajoks) {
      for (const onul of onuls) {
        for (const sep of seps) {
          for (const nai of nais) {
            for (const skin of skins) {
              const url = `${baseCloudinary}v1775399576/MBC_${b}${onul}_%E6%96%B0_${g}${sep}${nai}_${skin}_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg`.replace(/__/g, "_");
              if (await test(url)) {
                found = true;
                break;
              }
            }
            if (found) break;
          }
          if (found) break;
        }
        if (found) break;
      }
      if (found) break;
    }
    if (found) break;
  }
  
  if (!found) {
    console.log("No working URL found with basic layout. Trying alternative formats...");
    // Let's print one sample to verify the structure
    const sample = `${baseCloudinary}v1775399576/MBC_%EC%83%9D%EB%B0%A5%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg`;
    console.log(`Sample checked: ${sample}`);
  }
}

run();

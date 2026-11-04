import https from 'https';

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(null);
    }).end();
  });
}

async function run() {
  const variations = [
    // --- rad_new3 variations (대통령 선거) ---
    // Original PNG:
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4_zpm2rh.png",
    // Original PNG (decoded format test):
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/대통령_선거_통해_zpm2rh.png",
    // JPG version of original:
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4_zpm2rh.jpg",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/대통령_선거_통해_zpm2rh.jpg",
    // "통해서" instead of "통해" (PNG):
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4%EC%84%9C_zpm2rh.png",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/대통령_선거_통해서_zpm2rh.png",
    // "통해서" instead of "통해" (JPG):
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4%EC%84%9C_zpm2rh.jpg",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/대통령_선거_통해서_zpm2rh.jpg",
    
    // Let's also check other possible extensions like jpeg or webp
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4_zpm2rh.jpeg",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4_zpm2rh.webp",

    // What if the directory / v-number is different? e.g. same v-number as rad_new4 (v1775292907), let's check
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292907/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4_zpm2rh.png",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292907/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0_%ED%86%B5%ED%95%B4_zpm2rh.jpg",
    
    // --- rad_new16 variations (남을 행복하게 해주려는 마음) ---
    // Original spelling (which seems to be written "낙을..." %EB%82%B5%EC%9D%84_행복하게_k7jubj.png):
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292910/%EB%82%B5%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.png",
    // But maybe it has .jpg extension instead of .png?
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292910/%EB%82%B5%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.jpg",
    // Correct Spelling spelling 1: "남을..." %EB%82%A8%EC%9D%84
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292910/%EB%82%A8%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.png",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292910/%EB%82%A8%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.jpg",
    // Maybe with v1775292911? or another?
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292911/%EB%82%B5%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.png",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292911/%EB%82%B5%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.jpg",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292911/%EB%82%A8%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.png",
    "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292911/%EB%82%A8%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.jpg"
  ];

  console.log(`Checking ${variations.length} URL variations...`);

  for (const url of variations) {
    const status = await checkUrl(url);
    console.log(`[Status ${status}] -> ${url}`);
  }
}

run();

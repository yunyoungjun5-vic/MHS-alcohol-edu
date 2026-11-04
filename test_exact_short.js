const base = "https://res.cloudinary.com/dxjz9ksjg/image/upload/";

async function test(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    console.log(`Status ${res.status} for ${url}`);
  } catch (err) {
    console.log(`Err: ${err.message}`);
  }
}

async function run() {
  await test(`${base}v1775399576/bh6d3q.jpg`);
  await test(`${base}v1775399576/1_bh6d3q.jpg`);
  await test(`${base}bh6d3q.jpg`);
}

run();

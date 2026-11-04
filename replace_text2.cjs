const fs = require('fs');
const path = 'src/pages/MediaCoverage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/TV조선 가족 두 개의 문 화목하지 않은 부부와 그 사이에서 상처받아 온 아들의 이야기/g, 'TV조선 가족 두 개의 문 - 화목하지 않은 부부와 그 사이에서 상처받아 온 아들의 이야기');

content = content.replace(/MBN 특종세상/g, 'TEMP_TEUKJONG_SESANG');
content = content.replace(/특종세상/g, 'MBN 특종세상');
content = content.replace(/TEMP_TEUKJONG_SESANG/g, 'MBN 특종세상');

content = content.replace(/MBC 생방송오늘아침/g, 'MBC 생방송 오늘 아침');
content = content.replace(/MBC 생방송 오늘아침/g, 'MBC 생방송 오늘 아침');

content = content.replace(/TV 조선 가족 두개의 문 아내의 집착/g, 'TV 조선 가족 두개의 문 - 아내의 집착');

fs.writeFileSync(path, content, 'utf8');
console.log('done');

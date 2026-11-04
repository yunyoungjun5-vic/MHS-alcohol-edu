const fs = require('fs');
const path = 'src/pages/MediaCoverage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/MBC 생방송 오늘 아침 新 가족기획 나이 많은 게 죄인가요/g, 'MBC 생방송 오늘 아침 新 가족기획 - 나이 많은 게 죄인가요');

content = content.replace(/MBC 생방송 오늘 아침 출연 新 가족기획 자식만 줄줄이 낳아 놓고/g, 'MBC 생방송 오늘 아침 출연 新 가족기획 - 자식만 줄줄이 낳아 놓고');

// Notice that user provided double spaces in '新 가족기획  - ' but usually they just mean space hyphen space.
// I'll replace it to "MBC 생방송 오늘 아침 新 가족기획 - 나이 많은 게 죄인가요" which is cleaner. Wait, I should probably do double space if requested, or just single. Let's do exact match replace.

fs.writeFileSync(path, content, 'utf8');
console.log('done');

const fs = require('fs');
const path = 'src/pages/MediaCoverage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace "오늘의 아침" with "오늘 아침"
content = content.replace(/오늘의 아침/g, '오늘 아침');
content = content.replace(/오늘의아침/g, '오늘아침'); // Just in case, wait, the user specifically said "'오늘의 아침' 은 '오늘 아침'".
// Wait, user said "오늘의 아침". Let's stick to literal "오늘의 아침".

// Replace "TVN" with "tvN"
content = content.replace(/TVN/g, 'tvN');

fs.writeFileSync(path, content, 'utf8');
console.log("Replacements complete.");

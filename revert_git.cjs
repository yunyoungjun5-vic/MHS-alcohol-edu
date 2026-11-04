const { execSync } = require('child_process');
try {
  const output = execSync('git checkout src/pages/MediaCoverage.tsx', { encoding: 'utf8' });
  console.log('Success:', output);
} catch (error) {
  console.error('Error:', error.message);
}

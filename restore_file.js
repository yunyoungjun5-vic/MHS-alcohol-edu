import { execSync } from 'child_process';

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf-8' }).trim();
  } catch (err) {
    return "ERROR: " + err.message;
  }
}

console.log("Current working directory:", process.cwd());
console.log("Listing parent directories...");
console.log("Parent list:", run("ls -la .."));
console.log("Search for any .git:", run("find / -maxdepth 3 -name \".git\" 2>/dev/null"));

import { execSync } from "child_process";

try {
  console.log("Git Diff since previous commit:");
  const diff = execSync("git diff HEAD src/pages/MediaCoverage.tsx").toString();
  console.log(diff);
} catch (err) {
  console.error("Error executing git command:", err.message);
  try {
    console.log("Git Log:");
    const log = execSync("git log -n 5 --oneline").toString();
    console.log(log);
  } catch (e) {
    console.error("Failed to get git log:", e.message);
  }
}

#!/usr/bin/env node

console.log("Running OpenDevEnv check...\n");

const nodeVersion = process.version;
console.log("Detected Node version:", nodeVersion);

// Example check
if (parseInt(nodeVersion.replace("v", "")) >= 18) {
  console.log("✅ Node version is compatible");
} else {
  console.log("❌ Node version too low");
}

console.log("\nEnvironment check complete.");

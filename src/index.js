#!/usr/bin/env node
// ☝️ This first line is required — it tells the computer
// "use Node.js to run this file" when someone types opendev in terminal

// --- IMPORTING PACKAGES ---
const { program } = require('commander')  
// commander lets us create commands like "opendev check"

const fs = require('fs')                  
// fs is built into Node.js — it lets us read files from the computer

const yaml = require('js-yaml')           
// js-yaml translates our opendev.yaml into JavaScript data

const chalk = require('chalk')            
// chalk adds colors to our terminal output


// --- HELPER FUNCTION: READ THE YAML FILE ---
function loadConfig() {
  // Check if opendev.yaml exists in the current folder
  if (!fs.existsSync('opendev.yaml')) {
    console.log(chalk.red('❌ No opendev.yaml file found in this folder'))
    console.log(chalk.yellow('💡 Add an opendev.yaml file first'))
    process.exit(1) // Stop the program with an error
  }

  // Read the file and parse it from YAML into JavaScript
  const fileContent = fs.readFileSync('opendev.yaml', 'utf8')
  // fileContent is now raw text like "name: sample-project\nruntime:..."

  const config = yaml.load(fileContent)
  // config is now a JavaScript object like:
  // { name: "sample-project", runtime: ["node >=18"], tools: ["git"] }

  return config // Send the data back to whoever called this function
}


// --- SETTING UP THE CLI ---
program
  .name('opendev')         // The command name
  .description('Developer environment validation tool')
  .version('1.0.0')        // Shows when someone types "opendev --version"


// --- COMMAND 1: opendev check ---
program
  .command('check')        // This registers the "check" command
  .description('Check if your environment matches opendev.yaml requirements')
  .action(() => {
    // This code runs when someone types "opendev check"
    
    console.log(chalk.blue('\n🔍 Reading opendev.yaml...\n'))
    
    const config = loadConfig() // Read the yaml file
    
    console.log(chalk.green(`📦 Project: ${config.name}`))
    console.log(chalk.blue('\n📋 Required tools:'))
    
    // Show what tools are required (Member 2 will add real checking here)
    if (config.tools) {
      config.tools.forEach(tool => {
        console.log(`  - ${tool}`)
      })
    }

    if (config.runtime) {
      console.log(chalk.blue('\n⚙️  Required runtimes:'))
      config.runtime.forEach(runtime => {
        console.log(`  - ${runtime}`)
      })
    }

    console.log(chalk.yellow('\n⚠️  Full validation coming soon (Member 2 is working on it!)'))
  })


// --- COMMAND 2: opendev doctor ---
program
  .command('doctor')
  .description('Run full environment diagnostic')
  .action(() => {
    // This code runs when someone types "opendev doctor"
    
    console.log(chalk.blue('\n🩺 Running environment diagnostic...\n'))
    
    const config = loadConfig()
    
    console.log(chalk.green(`📦 Project: ${config.name}`))
    console.log(chalk.yellow('\n⚠️  Full diagnostic coming soon (Members 2 & 3 are working on it!)'))
  })


// --- COMMAND 3: opendev readme ---
program
  .command('readme')
  .description('Auto-generate README setup section from opendev.yaml')
  .action(() => {
    // This code runs when someone types "opendev readme"
    
    console.log(chalk.blue('\n📝 Generating README section...\n'))
    
    const config = loadConfig()
    
    console.log(chalk.yellow('⚠️  README generator coming soon (Member 4 is working on it!)'))
  })


// --- THIS LINE MUST BE LAST ---
program.parse(process.argv)
// This line reads what the user typed in the terminal
// and runs the matching command above
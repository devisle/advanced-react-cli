#!/usr/bin/env node

const [...args] = process.argv

// console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);

// Current working directory
const cwd = process.cwd()
console.log(cwd)

const inquirer = require('inquirer')

// Cli Model
const cliModel = require('./cliModel')
const cliCommand = cliModel.cliCommand

// CLI Main Options
const cliMainOptions = require('./cliMainOptions')

const prompt = inquirer.createPromptModule()

prompt(cliCommand).then(answers => {
  cliMainOptions(answers)
})

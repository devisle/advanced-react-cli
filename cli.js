#!/usr/bin/env node

const [...args] = process.argv

// console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);

// Current working directory
const cwd = process.cwd()
console.log(cwd)

const inquirer = require('inquirer')

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

// Cli Model
const cliModel = require('./cliModel')
const cliCommand = cliModel.cliCommand

// CLI Main Options
const cliMainOptions = require('./cliMainOptions')

const prompt = inquirer.createPromptModule()

clear()
console.log(
  chalk.blue(
    figlet.textSync('Adv. React CLI', {
      horizontalLayout: 'full',
      font: 'Small',
      verticalLayout: 'full'
    })
  )
)

prompt(cliCommand).then(answers => {
  cliMainOptions(answers)
})

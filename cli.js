#!/usr/bin/env node

const [...args] = process.argv

const inquirer = require('inquirer')
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

// Cli Model
const cliModel = require('./cliModel')
const cliCommand = cliModel.cliCommand

// CLI Main Options
const options = require('./options')
const prompt = inquirer.createPromptModule()

clear()
console.log(
  chalk.green(
    figlet.textSync('Adv. React CLI', {
      horizontalLayout: 'fitted',
      font: 'Small',
      verticalLayout: 'full'
    })
  )
)

prompt(cliCommand).then(answers => {
  options(answers)
})

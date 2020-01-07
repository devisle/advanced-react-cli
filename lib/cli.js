#!/usr/bin/env node
'use strict'

function _toArray (arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest()
}

function _nonIterableRest () {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}

function _iterableToArray (iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter)
}

function _arrayWithHoles (arr) {
  if (Array.isArray(arr)) return arr
}

var _process$argv = _toArray(process.argv),
  args = _process$argv.slice(0) // console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);
// Current working directory

var cwd = process.cwd()
console.log(cwd)

var inquirer = require('inquirer')

var chalk = require('chalk')

var clear = require('clear')

var figlet = require('figlet') // Cli Model

var cliModel = require('./cliModel')

var cliCommand = cliModel.cliCommand // CLI Main Options

var options = require('./options')

var prompt = inquirer.createPromptModule()
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
prompt(cliCommand).then(function (answers) {
  options(answers)
})

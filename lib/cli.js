#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _process$argv = (0, _toArray2["default"])(process.argv),
    args = _process$argv.slice(0); // console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);
// Current working directory


var cwd = process.cwd();
console.log(cwd);

var inquirer = require('inquirer');

var chalk = require('chalk');

var clear = require('clear');

var figlet = require('figlet'); // Cli Model


var cliModel = require('./cliModel');

var cliCommand = cliModel.cliCommand; // CLI Main Options

var options = require('./options');

var prompt = inquirer.createPromptModule();
clear();
console.log(chalk.green(figlet.textSync('Adv. React CLI', {
  horizontalLayout: 'fitted',
  font: 'Small',
  verticalLayout: 'full'
})));
prompt(cliCommand).then(function (answers) {
  options(answers);
});
#!/usr/bin/env node

// let [...args] = process.argv;

// console.log(`folder name ${args}`);
// console.log(`folder location ${args}`);

// Current working directory
const cwd = process.cwd();
// console.log(cwd);

const inquirer = require("inquirer");

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

// Cli Model
const cliModel = require("./cliModel");
const cliCommand = cliModel.cliCommand;

// CLI Main Options
const options = require("./options");
const InqPrompt = inquirer.createPromptModule();

clear();
console.log(
  chalk.green(
    figlet.textSync("Adv. React CLI", {
      horizontalLayout: "fitted",
      font: "Small",
      verticalLayout: "full"
    })
  )
);

InqPrompt(cliCommand).then(answers => {
  options(answers);
});

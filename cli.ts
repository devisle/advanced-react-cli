#!/usr/bin/env node

// let [...args] = process.argv;

// console.log(`folder name ${args}`);
// console.log(`folder location ${args}`);

// Current working directory
const cwd = process.cwd();
require = require("esm")(module /*, options*/);
// console.log(cwd);

import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

// Cli Model
import { CliCommand } from "./cliModel/index";
// const cliModel = require("./cliModel");

// CLI Main Options
import { Options } from "./options";
// const options = require("./options.ts");
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

InqPrompt(CliCommand).then((answers: any) => {
  Options(answers);
});

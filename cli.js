#!/usr/bin/env node

const [...args] = process.argv;

console.log(`folder name ${args[2]}`);
console.log(`folder location ${args[3]}`);

// Current working directory
const cwd = process.cwd();
console.log(cwd);

const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("./cli model/cli-model");
const cliCommand = cliModel.cliCommand;
const reactComponents = cliModel.reactComponents;

// Cli Routes
const cra = require("./cli routes/cra");
const reactRouter = require("./cli routes/reactroute.js");
const nodeSass = require("./cli routes/nodeSass");

const prompt = inquirer.createPromptModule();

prompt(cliCommand).then(answers => {
  switch (answers.installation) {
    case "create-react-app":
      cra();
      break;
    case "react-component":
      prompt(reactComponents).then(answer => console.log(answer));
      break;
    case "react-router":
      reactRouter();
      break;
    case "node-sass":
      nodeSass();
  }
});

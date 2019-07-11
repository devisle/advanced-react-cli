#!/usr/bin/env node

const [...args] = process.argv;

// console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);

// Current working directory
const cwd = process.cwd();
console.log(cwd);

const inquirer = require("inquirer");

// Cli Model
const cliModel = require("./cliModel/cli-model");
const cliCommand = cliModel.cliCommand;

// Cli Routes
const cra = require("./cliRoutes/cra");
const reactRouter = require("./cliRoutes/reactrouter");
const nodeSass = require("./cliRoutes/nodeSass");
const reactComponent = require("./cliRoutes/reactComponent");
const propTypes = require("./cliRoutes/propTypes");
const stateManagement = require("./cliRoutes/stateManagement");

const prompt = inquirer.createPromptModule();

prompt(cliCommand).then(answers => {
  switch (answers.installation) {
    case "create-react-app":
      cra();
      break;
    case "react-component":
      reactComponent();
      break;
    case "react-router":
      reactRouter();
      break;
    case "node-sass":
      nodeSass();
      break;
    case "prop-types":
      propTypes();
      break;
    case "state-management":
      stateManagement();
      break;
    default:
      console.log("You must select an option!");
  }
});

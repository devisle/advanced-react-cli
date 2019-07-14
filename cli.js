#!/usr/bin/env node

const [...args] = process.argv;

// console.log(`folder name ${args[2]}`);
// console.log(`folder location ${args[3]}`);

// Current working directory
const cwd = process.cwd();
console.log(cwd);

const inquirer = require("inquirer");

// Cli Model
const cliModel = require("./cliModel");
const cliCommand = cliModel.cliCommand;

// Cli Routes
const cra = require("./cliRoutes/cra");
const ReactRouter = require("./cliRoutes/reactrouter");
const NodeSass = require("./cliRoutes/nodeSass");
const ReactComponent = require("./cliRoutes/reactComponent");
const PropTypes = require("./cliRoutes/propTypes");
const StateManagement = require("./cliRoutes/stateManagement");

const prompt = inquirer.createPromptModule();

prompt(cliCommand).then(answers => {
  switch (answers.installation) {
    case "create-react-app":
      cra();
      break;
    case "react-component":
      new ReactComponent().whatComponent();
      break;
    case "react-router":
      new ReactRouter().installOrUninstall();
      break;
    case "node-sass":
      new NodeSass().installOrUninstall();
      break;
    case "prop-types":
      new PropTypes().installOrUninstall();
      break;
    case "state-management":
      new StateManagement().prompt();
      break;
    default:
      console.log("You must select an option!");
  }
});

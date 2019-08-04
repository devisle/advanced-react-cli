#!/usr/bin/env node

const [...args] = process.argv;
const currentWorkingDir = process.cwd(); // unused? @shreyas
const inquirer = require("inquirer");
const _cliModel = require("./cli model/cli-model");
const _routes = require("./cli routes/index");

/**
 * @todo export this prompt module, don't create multiple in each cli route!! @shreyas
 */
const prompt = inquirer.createPromptModule();

const cliCommand = _cliModel.cliCommand();
[cra, reactRouter, nodeSass, reactComponent, propTypes, stateManagement] =  _routes.getAllRoutes();

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

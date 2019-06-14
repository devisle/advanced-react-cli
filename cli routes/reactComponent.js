const inquirer = require("inquirer");
const cmd = require("node-cmd");

//Cli Model
const cliModel = require("../cli model/cli-model");
const reactComponents = cliModel.reactComponents;

const prompt = inquirer.createPromptModule();

const reactComponent = () => {
  prompt(reactComponents).then(answer => console.log(answer));
};

module.exports = reactComponent;

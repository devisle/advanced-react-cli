const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");

// Cli Install Commands
const installCommands = require("../cli model/install-commands");
const stateOption = cliModel.stateManagement;

const prompt = inquirer.createPromptModule();

const stateManagement = () => {
  prompt(stateOption).then(({ state }) => {
    if (state === "Redux") {
      cmd.get();
    }
  });
};

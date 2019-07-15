const inquirer = require("inquirer");

// Cli Model
const cliModel = require("../cliModel");
const stateOption = cliModel.stateManagement;
const unstatedOption = cliModel.unstatedOptions;
const YarnOrNpm = cliModel.YarnOrNpm;

//State Management Dependencies
const Redux = require("./StateManagement-Dependencies/redux");
const ReduxThunk = require("./StateManagement-Dependencies/reduxThunk");
const Unstated = require("./StateManagement-Dependencies/unstated");
const UnstatedNext = require("./StateManagement-Dependencies/unstatedNext");

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls state-management packages

*/

module.exports = class StateManagement {
  prompt() {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager;
      prompt(stateOption).then(({ state }) => {
        if (state === "Redux") {
          new Redux().installOrUninstall(packageInstaller);
        } else if (state === "Unstated") {
          prompt(unstatedOption).then(({ state }) => {
            if (state === "Unstated") {
              new Unstated().installOrUninstall(packageInstaller);
            } else if (state === "Unstated-next") {
              new UnstatedNext().installOrUninstall(packageInstaller);
            }
          });
        } else if (state === "Redux-Thunk") {
          new ReduxThunk().installOrUninstall(packageInstaller);
        }
      });
    });
  }
};

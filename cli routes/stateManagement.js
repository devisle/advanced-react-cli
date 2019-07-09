const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;
const stateOption = cliModel.stateManagement;
const unstatedState = cliModel.unstatedStateManagement;

// Cli Install Commands
const {
  reduxObj,
  unstatedObj,
  reduxThunkObj
} = require("../cli model/install-commands");

const { unstated, unstatedNext } = unstatedObj;

// Importing Redux Boiler plate file
const ReduxBoilerPlate = require("../cli model/starter-code/redux");

const prompt = inquirer.createPromptModule();

const stateManagement = () => {
  prompt(stateOption).then(({ state }) => {
    if (state === "Redux") {
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          cmd.get(`${reduxObj.install}`);
          fs.mkdir("./store", err => {
            if (err) throw err;
          });
          cmd.get(`cd store && touch store.js`);
          const writeStream = fs.createWriteStream("./store/store.js");
          writeStream.write(`${ReduxBoilerPlate}`);
          console.log(
            "Packages: redux & react-redux has been installed successfully!"
          );
          console.log("Redux Store has been created successfully!");
        } else if (decision === "Uninstall") {
          cmd.get(`${reduxObj.uninstall}`);
          console.log(
            "Packages: redux & react-redux has been uninstalled successfully!"
          );
        }
      });
    } else if (state === "Unstated") {
      prompt(unstatedState).then(({ decision }) => {
        if (decision === "Unstated") {
          prompt(installOption).then(({ decision }) => {
            if (decision === "Install") {
              cmd.get(`${unstated.install}`);
              console.log("Package: Unstated has been installed!");
              cmd.get(
                `echo "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated" `
              );
            } else {
              cmd.get(`${unstated.uninstall}`);
              console.log("Package: Unstated has been uninstalled!");
            }
          });
        } else if (decision === "Unstated-next") {
          prompt(installOption).then(({ decision }) => {
            if (decision === "Install") {
              cmd.get(`${unstatedNext.install}`);
              console.log("Package: Unstated-next has been installed!");
              cmd.get(
                `echo "Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next " `
              );
            } else {
              cmd.get(`${unstatedNext.uninstall}`);
              console.log("Package: Unstated-next has been uninstalled!");
            }
          });
        }
      });
    } else if (state === "Redux-Thunk") {
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          cmd.get(`${reduxThunkObj.install}`);
          console.log("Package: Redux-Thunk has been installed!");
          cmd.get(
            `echo "Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk " `
          );
        } else {
          cmd.get(`${reduxThunkObj.uninstall}`);
          console.log("Package: Redux-Thunk has been uninstalled!");
        }
      });
    }
  });
};

module.exports = stateManagement;

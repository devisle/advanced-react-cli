const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;
const stateOption = cliModel.stateManagement;

// Cli Install Commands
const { reduxObj, unstatedObj } = require("../cli model/install-commands");

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
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          cmd.get(`${unstatedObj.install}`);
          console.log("Package: Unstated has been installed!");
        } else {
          cmd.get(`${unstatedObj.uninstall}`);
          console.log("Package: Unstated has been uninstalled!");
        }
      });
    }
  });
};

module.exports = stateManagement;

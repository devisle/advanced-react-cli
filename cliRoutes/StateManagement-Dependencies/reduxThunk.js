const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { reduxThunkObj } = require("../../cliModel/install-commands");

const prompt = inquirer.createPromptModule();
module.exports = class ReduxThunk {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install();
      } else {
        this.uninstall();
      }
    });
  }

  install() {
    cmd.get(`${reduxThunkObj.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Redux-Thunk has been installed!");
    console.log(
      "Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk "
    );
  }

  uninstall() {
    cmd.get(`${reduxThunkObj.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Redux-Thunk has been uninstalled!");
  }
};

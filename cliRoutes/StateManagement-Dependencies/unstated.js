const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { unstatedObj } = require("../../cliModel/install-commands");
const { unstated } = unstatedObj;

const prompt = inquirer.createPromptModule();

module.exports = class Unstated {
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
    cmd.get(`${unstated.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
    );
    console.log("Package: Unstated has been installed!");
  }

  uninstall() {
    cmd.get(`${unstated.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Unstated has been uninstalled!");
  }
};

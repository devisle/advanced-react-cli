const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { unstatedObj } = require("../../cliModel/install-commands");
const { unstatedNext } = unstatedObj;

const { unstatedObjYarn } = require("../../cliModel/install-commands-yarn");
const { unstatedNextYarn } = unstatedObjYarn;

const prompt = inquirer.createPromptModule();

module.exports = class UnstatedNext {
  installOrUninstall(packageInstaller) {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install(packageInstaller);
      } else {
        this.uninstall(packageInstaller);
      }
    });
  }

  install(packageInstaller) {
    cmd.get(`${unstatedNext.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next "
    );
    console.log("Package: Unstated-next has been installed!");
  }

  uninstall(packageInstaller) {
    cmd.get(`${unstatedNext.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Unstated-next has been uninstalled!");
  }
};

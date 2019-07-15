const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cliModel");
const installOption = cliModel.installOption;
const YarnOrNpm = cliModel.YarnOrNpm;

// CLI Install Commands
const { reactRouterObj } = require("../cliModel/install-commands");

const { reactRouterObjYarn } = require("../cliModel/install-commands-yarn");

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls React Router package

*/
module.exports = class ReactRouter {
  installOrUninstall() {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager;
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          this.install(packageInstaller);
        } else if (decision === "Uninstall") {
          this.uninstall(packageInstaller);
        }
      });
    });
  }

  install(packageInstaller) {
    if (packageInstaller === "NPM") {
      cmd.get(`${reactRouterObj.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been installed successfully!"
      );
    } else {
      cmd.get(`${reactRouterObjYarn.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been installed successfully!"
      );
    }
  }

  uninstall(packageInstaller) {
    if (packageInstaller === "NPM") {
      cmd.get(`${reactRouterObj.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been uninstalled successfully!"
      );
    } else {
      cmd.get(`${reactRouterObjYarn.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been uninstalled successfully!"
      );
    }
  }
};

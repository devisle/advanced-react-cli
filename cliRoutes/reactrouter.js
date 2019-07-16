const inquirer = require("inquirer");
const customCMD = require("../customNodeCMD");

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
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${reactRouterObj.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : console.log(stderr, data);
          },
          "install"
        );
        console.log(
          "Packages: react-router & react-router-dom has been installed successfully!"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${reactRouterObjYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : console.log(stderr, data);
          },
          "install"
        );
        console.log(
          "Packages: react-router & react-router-dom has been installed successfully!"
        );
        break;
    }
  }

  uninstall(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${reactRouterObj.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : console.log(stderr, data);
          },
          "uninstall"
        );
        console.log(
          "Packages: react-router & react-router-dom has been uninstalled successfully!"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${reactRouterObjYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : console.log(stderr, data);
          },
          "uninstall"
        );
        console.log(
          "Packages: react-router & react-router-dom has been uninstalled successfully!"
        );
        break;
    }
  }
};

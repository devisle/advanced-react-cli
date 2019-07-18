const inquirer = require("inquirer");

const customCMD = require("../../customNodeCMD");
const errorLogging = require("../../customNodeCMD/customError");

// Cli Model
const cliModel = require("../../cliModel");
const installOption = cliModel.installOption;

// CLI Install Commands
const { nodeSassObj } = require("../../cliModel/install-commands");

const { nodeSassObjYarn } = require("../../cliModel/install-commands-yarn");

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls Node-Sass package

*/

module.exports = class NodeSass {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install(packageInstaller);
      } else if (decision === "Uninstall") {
        this.uninstall(packageInstaller);
      }
    });
  }

  install(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${nodeSassObj.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        console.log("Package: node-sass has been installed successfully!");
        break;

      case "Yarn":
        customCMD.get(
          `${nodeSassObjYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        console.log("Package: node-sass has been installed successfully!");
        break;
    }
  }

  uninstall(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${nodeSassObj.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        console.log("Package: node-sass has been uninstalled successfully!");
        break;

      case "Yarn":
        customCMD.get(
          `${nodeSassObjYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        console.log("Package: node-sass has been uninstalled successfully!");
        break;
    }
  }
};

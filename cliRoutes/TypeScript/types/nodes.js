const inquirer = require("inquirer");

const customCMD = require("../../customNodeCMD");
const errorLogging = require("../../customNodeCMD/customError");

// CLI Model
const cliModel = require("../../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { TypeScriptReactObj } = require("../../../cliModel/install-commands");
const { typesNodes } = TypeScriptReactObj;

const {
  TypeScriptReactObjYarn
} = require("../../../cliModel/install-commands-yarn");
const { typesNodesYarn } = TypeScriptReactObjYarn;

const prompt = inquirer.createPromptModule();

/*

  Installs @types/nodes

*/

module.exports = class TypesNodes {
  installOrUninstall(packageInstaller) {
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
          `${typesNodes.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${typesNodesYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        break;
    }
  }

  uninstall(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${typesNodes.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${typesNodesYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        break;
    }
  }
};

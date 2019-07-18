const inquirer = require("inquirer");

const customCMD = require("../../../customNodeCMD");
const errorLogging = require("../../../customNodeCMD/customError");

// CLI Model
const cliModel = require("../../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { TypeScriptReactObj } = require("../../../cliModel/install-commands");
const { typesReactRouter } = TypeScriptReactObj;

const {
  TypeScriptReactObjYarn
} = require("../../../cliModel/install-commands-yarn");
const { typesReactRouterYarn } = TypeScriptReactObjYarn;

const prompt = inquirer.createPromptModule();

/*

  Installs @types/react-router @types/react-router-dom

*/

module.exports = class TypesReactRouter {
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
          `${typesReactRouter.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${typesReactRouterYarn.install}`,
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
          `${typesReactRouter.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${typesReactRouterYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        break;
    }
  }
};

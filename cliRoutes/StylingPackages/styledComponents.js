const inquirer = require("inquirer");

const customCMD = require("../../customNodeCMD");
const errorLogging = require("../../customNodeCMD/customError");

// Cli Model
const cliModel = require("../../cliModel");
const installOption = cliModel.installOption;
const YarnOrNpm = cliModel.YarnOrNpm;

// CLI Install Commands
const { styledComponentsObj } = require("../../cliModel/install-commands");

const {
  styledComponentsObjYarn
} = require("../../cliModel/install-commands-yarn");

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls Node-Sass package

*/

module.exports = class StyledComponents {
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
          `${styledComponentsObj.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        console.log(
          "Package: styled-components has been installed successfully!"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${styledComponentsObjYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        console.log(
          "Package: styled-components has been installed successfully!"
        );
        break;
    }
  }

  uninstall(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${styledComponentsObj.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        console.log(
          "Package: styled-components has been uninstalled successfully!"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${styledComponentsObjYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        console.log(
          "Package: styled-components has been uninstalled successfully!"
        );
        break;
    }
  }
};

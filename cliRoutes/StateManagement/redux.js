const inquirer = require("inquirer");
const fs = require("fs");

const customCMD = require("../../customNodeCMD");
const errorLogging = require("../../customNodeCMD/customError");

// Cli Model
const cliModel = require("../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { reduxObj } = require("../../cliModel/install-commands");

const { reduxObjYarn } = require("../../cliModel/install-commands-yarn");

// Importing Redux Boiler plate file
const ReduxBoilerPlate = require("../../cliModel/starter-code/redux");

const prompt = inquirer.createPromptModule();

module.exports = class Redux {
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
    fs.mkdir("./store", err => {
      if (err) throw err;
    });
    customCMD.run(`cd store && touch store.js`);
    const writeStream = fs.createWriteStream("./store/store.js");
    writeStream.write(`${ReduxBoilerPlate}`);

    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${reduxObj.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        console.log(
          "Packages: redux & react-redux has been installed successfully!"
        );
        console.log("Redux Store has been created successfully!");
        break;

      case "Yarn":
        customCMD.get(
          `${reduxObjYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "install"
        );
        console.log(
          "Packages: redux & react-redux has been installed successfully!"
        );
        console.log("Redux Store has been created successfully!");
        break;
    }
  }

  uninstall(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        customCMD.get(
          `${reduxObj.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        console.log(
          "Packages: redux & react-redux has been uninstalled successfully!"
        );
        break;

      case "Yarn":
        customCMD.get(
          `${reduxObjYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data);
          },
          "uninstall"
        );
        console.log(
          "Packages: redux & react-redux has been uninstalled successfully!"
        );
        break;
    }
  }
};

const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

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
    switch (packageInstaller) {
      case "NPM":
        cmd.get(`${reduxObj.install}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        fs.mkdir("./store", err => {
          if (err) throw err;
        });
        cmd.get(`cd store && touch store.js`);
        const writeStream = fs.createWriteStream("./store/store.js");
        writeStream.write(`${ReduxBoilerPlate}`);
        console.log(
          "Packages: redux & react-redux has been installed successfully!"
        );
        console.log("Redux Store has been created successfully!");
        break;

      case "Yarn":
        cmd.get(`${reduxObjYarn.install}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        fs.mkdir("./store", err => {
          if (err) throw err;
        });
        cmd.get(`cd store && touch store.js`);
        const writeStream = fs.createWriteStream("./store/store.js");
        writeStream.write(`${ReduxBoilerPlate}`);
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
        cmd.get(`${reduxObj.uninstall}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        console.log(
          "Packages: redux & react-redux has been uninstalled successfully!"
        );
        break;

      case "Yarn":
        cmd.get(`${reduxObjYarn.uninstall}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        console.log(
          "Packages: redux & react-redux has been uninstalled successfully!"
        );
        break;
    }
  }
};

const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cliModel");
const installOption = cliModel.installOption;
const YarnOrNpm = cliModel.YarnOrNpm;

// CLI Install Commands
const { propTypesObj } = require("../cliModel/install-commands");

const { propTypesObjYarn } = require("../cliModel/install-commands-yarn");

const propTypeBoilerPlate = require("../cliModel/starter-code/propTypes");

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls PropTypes package

*/
module.exports = class propTypes {
  installOrUninstall() {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager;
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          this.install(packageManager);
        } else if (decision === "Uninstall") {
          this.uninstall(packageManager);
        }
      });
    });
  }

  install(packageManager) {
    if (packageManager === "NPM") {
      cmd.get(`${propTypesObj.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      fs.mkdir("./propTypes", err => {
        if (err) throw err;
      });
      cmd.get(`cd propTypes && touch propTypes.js`);
      const writeStream = fs.createWriteStream("./propTypes/propTypes.js");
      writeStream.write(`${propTypeBoilerPlate}`);
      console.log("Package: prop-types has been installed successfully!");
      console.log("PropTypes Folder has been created!");
    } else {
      cmd.get(`${propTypesObjYarn.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      fs.mkdir("./propTypes", err => {
        if (err) throw err;
      });
      cmd.get(`cd propTypes && touch propTypes.js`);
      const writeStream = fs.createWriteStream("./propTypes/propTypes.js");
      writeStream.write(`${propTypeBoilerPlate}`);
      console.log("Package: prop-types has been installed successfully!");
      console.log("PropTypes Folder has been created!");
    }
  }

  uninstall(packageManager) {
    if (packageManager === "NPM") {
      cmd.get(`${propTypesObj.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log("Package: prop-types has been uninstalled successfully!");
    } else {
      cmd.get(`${propTypesObjYarn.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log("Package: prop-types has been uninstalled successfully!");
    }
  }
};

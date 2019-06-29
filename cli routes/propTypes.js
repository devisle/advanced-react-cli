const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;

// CLI Install Commands
const { propTypesObj } = require("../cli model/install-commands");

const propTypeBoilerPlate = require("../cli model/starter-code/propTypes");

const prompt = inquirer.createPromptModule();

const propTypes = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${propTypesObj.install}`, function(err, data, stderr) {
        console.log(data);
      });
      fs.mkdir("./propTypes", err => {
        if (err) throw err;
      });
      cmd.get(`cd propTypes && touch propTypes.js`);
      const writeStream = fs.createWriteStream("./propTypes/propTypes.js");
      writeStream.write(`${propTypeBoilerPlate}`);
      console.log("Package: prop-types has been installed successfully!");
      console.log("PropTypes Folder has been created!");
    } else if (decision === "Uninstall") {
      cmd.get(`${propTypesObj.uninstall}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log("Package: prop-types has been uninstalled successfully!");
    }
  });
};

module.exports = propTypes;

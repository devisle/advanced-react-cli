const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption();

// CLI Install Commands
const { propTypesObj } = require("../cli model/install-commands");
/**
 * tut @shreyas ;)
 * @see f cli.js prompt const for further comment
 */
const prompt = inquirer.createPromptModule();

const propTypes = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${propTypesObj.install}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log("Package: prop-types has been installed successfully!");
    } else if (decision === "Uninstall") {
      cmd.get(`${propTypesObj.uninstall}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log("Package: prop-types has been uninstalled successfully!");
    }
  });
};

module.exports = propTypes;

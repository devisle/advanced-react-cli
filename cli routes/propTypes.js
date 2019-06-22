const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;

// CLI Install Commands
const { propTypesObj } = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const propTypes = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${propTypesObj.install}`, function(err, data, stderr) {
        console.log(data);
      });
    } else if (decision === "Uninstall") {
      cmd.get(`${propTypesObj.uninstall}`, function(err, data, stderr) {
        console.log(data);
      });
    }
  });
};

module.exports = propTypes;

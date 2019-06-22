const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;

// Install Commands
const {} = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const propTypes = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get("npm i prop-types", function(err, data, stderr) {
        console.log(data);
      });
    } else if (decision === "Uninstall") {
      cmd.get("npm uninstall prop-types", function(err, data, stderr) {
        console.log(data);
      });
    }
  });
};

module.exports = propTypes;

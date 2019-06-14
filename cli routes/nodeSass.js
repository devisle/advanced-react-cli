const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;

const prompt = inquirer.createPromptModule();

const nodeSass = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get("npm i node-sass", function(err, data, stderr) {
        console.log(data);
      });
    } else if (decision === "Uninstall") {
      cmd.get("npm uninstall node-sass", function(err, data, stderr) {
        console.log(data);
      });
    }
  });
};

module.exports = nodeSass;

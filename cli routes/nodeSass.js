const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;

// CLI Install Commands
const { nodeSassObj } = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const nodeSass = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${nodeSassObj.install}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log("Packages: node-sass has been installed successfully!");
    } else if (decision === "Uninstall") {
      cmd.get(`${nodeSassObj.uninstall}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log("Packages: node-sass has been uninstalled successfully!");
    }
  });
};

module.exports = nodeSass;

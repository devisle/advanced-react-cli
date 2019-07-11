const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cliModel/cli-model");
const installOption = cliModel.installOption;

// CLI Install Commands
const { nodeSassObj } = require("../cliModel/install-commands");

const prompt = inquirer.createPromptModule();

const nodeSass = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${nodeSassObj.install}`, (err, data, stderr) => {
        if (err) throw err;
        else console.log(data);
      });
      console.log("Package: node-sass has been installed successfully!");
    } else if (decision === "Uninstall") {
      cmd.get(`${nodeSassObj.uninstall}`, (err, data, stderr) => {
        if (err) throw err;
        else console.log(data);
      });
      console.log("Package: node-sass has been uninstalled successfully!");
    }
  });
};

module.exports = nodeSass;

const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cliModel");
const installOption = cliModel.installOption;

// CLI Install Commands
const { nodeSassObj } = require("../cliModel/install-commands");

const prompt = inquirer.createPromptModule();

module.exports = class NodeSass {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install();
      } else if (decision === "Uninstall") {
        this.uninstall();
      }
    });
  }

  install() {
    cmd.get(`${nodeSassObj.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: node-sass has been installed successfully!");
  }

  uninstall() {
    cmd.get(`${nodeSassObj.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: node-sass has been uninstalled successfully!");
  }
};

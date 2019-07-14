const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cliModel");
const installOption = cliModel.installOption;

// CLI Install Commands
const { reactRouterObj } = require("../cliModel/install-commands");

const prompt = inquirer.createPromptModule();

module.exports = class ReactRouter {
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
    cmd.get(`${reactRouterObj.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Packages: react-router & react-router-dom has been installed successfully!"
    );
  }

  uninstall() {
    cmd.get(`${reactRouterObj.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Packages: react-router & react-router-dom has been uninstalled successfully!"
    );
  }
};

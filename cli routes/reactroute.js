const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;

// CLI Install Commands
const { reactRouter } = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const reactRouter = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${reactRouter.install}`, function(err, data, stderr) {
        console.log(data);
      });
    } else if (decision === "Uninstall") {
      cmd.get(`${reactRouter.uninstall}`, function(err, data, stderr) {
        console.log(data);
      });
    }
  });
};

module.exports = reactRouter;

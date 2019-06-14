const inquirer = require("inquirer");
const cmd = require("node-cmd");
const cliModel = require("../cli model/cli-model");

const prompt = inquirer.createPromptModule();
const installOption = cliModel.installOption;

const cra = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get("npm i -g create-react-app", function(err, data, stderr) {
        console.log(data);
      });
    } else if (decision === "Uninstall") {
      cmd.get("npm uninstall -g create-react-app", function(err, data, stderr) {
        console.log(data);
      });
    }
  });
};

module.exports = cra;

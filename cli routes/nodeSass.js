const inquirer = require("inquirer");
const cmd = require("node-cmd");

const prompt = inquirer.createPromptModule();

const installOption = [
  {
    type: "list",
    name: "decision",
    message: "Would you like to Install or Uninstall?",
    choices: ["Install", "Uninstall"]
  }
];

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

const inquirer = require("inquirer");
const cmd = require("node-cmd");

const installOption = [
  {
    type: "list",
    name: "decision",
    message: "Would you like to Install or Uninstall?",
    choices: ["Install", "Uninstall"]
  }
];

const prompt = inquirer.createPromptModule();

const reactRouter = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get("npm i react-router react-router-dom", function(
        err,
        data,
        stderr
      ) {
        console.log(data);
      });
    } else if (decision === "Uninstall") {
      cmd.get("npm uninstall react-router react-router-dom", function(
        err,
        data,
        stderr
      ) {
        console.log(data);
      });
    }
  });
};

module.exports = reactRouter;

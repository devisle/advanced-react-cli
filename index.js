const inquirer = require("inquirer");
const cmd = require("node-cmd");

const cliCommand = [
  {
    type: "list",
    name: "installation",
    message: "What would you like to install?",
    choices: [
      "create-react-app",
      "react-component",
      "react-router",
      "node-sass"
    ]
  }
];

const installOption = [
  {
    type: "list",
    name: "decision",
    message: "Would you like to Install or Uninstall?",
    choices: ["Install", "Uninstall"]
  }
];

const reactComponents = [
  {
    type: "list",
    name: "component",
    message: "Function or Class Component?",
    choices: ["function", "class"]
  }
];

const prompt = inquirer.createPromptModule();

prompt(cliCommand).then(answers => {
  switch (answers.installation) {
    case "create-react-app":
      prompt(reactComponents).then(({ decision }) => {
        if (decision === "Install") {
          cmd.get("npm i -g create-react-app", function(err, data, stderr) {
            console.log(data);
          });
        } else if (decision === "Uninstall") {
          cmd.get("npm uninstall -g create-react-app", function(
            err,
            data,
            stderr
          ) {
            console.log(data);
          });
        }
      });
      break;
    case "react-component":
      prompt(reactComponents).then(answer => console.log(answer));
      break;
    case "react-router":
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
      break;
    case "node-sass":
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
  }
});

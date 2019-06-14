#!/usr/bin/env node

const [...args] = process.argv;

console.log(`folder name ${args[2]}`);
console.log(`folder location ${args[3]}`);

//Current working directory
const cwd = process.cwd();
console.log(cwd);

const inquirer = require("inquirer");
const cmd = require("node-cmd");

const cra = require("./cli routes/cra");
const reactRouter = require("./cli routes/reactroute.js");

// console.log(cra);

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

const installFolder = [
  {
    type: "input",
    name: "destination",
    message:
      "Please input the name of the folder you would like to create for your project?"
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
      cra();
      break;
    case "react-component":
      prompt(reactComponents).then(answer => console.log(answer));
      break;
    case "react-router":
      reactRouter();
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

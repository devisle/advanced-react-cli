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

module.exports = cliCommand;
module.exports = installOption;
module.exports = installFolder;
module.exports = reactComponents;

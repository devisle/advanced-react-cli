module.exports.cliCommand = [
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

module.exports.installOption = [
  {
    type: "list",
    name: "decision",
    message: "Would you like to Install or Uninstall?",
    choices: ["Install", "Uninstall"]
  }
];

module.exports.addPackage = [
  {
    type: "input",
    name: "packageAdd",
    message: `Would you like to add a package? (y/n)`
  }
];

module.exports.installFolder = [
  {
    type: "input",
    name: "folderName",
    message:
      "Please input the name of the folder you would like to create for your project? (Enter a . if for current directory)"
  }
];

module.exports.componentName = [
  {
    type: "input",
    name: "componentName",
    message:
      "Please enter the file name of the component you would like to create: "
  }
];

module.exports.reactComponents = [
  {
    type: "list",
    name: "component",
    message: "Function or Class Component?",
    choices: ["function", "class"]
  }
];
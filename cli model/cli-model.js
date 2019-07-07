module.exports.cliCommand = [
  {
    type: "expand",
    name: "installation",
    message: "What would you like to install?",
    key: "a",
    choices: [
      { key: "a", name: "create-react-app", value: "create-react-app" },
      { key: "b", name: "react-component", value: "react-component" },
      { key: "c", name: "react-router", value: "react-router" },
      { key: "d", name: "node-sass", value: "node-sass" },
      { key: "e", name: "prop-types", value: "prop-types" },
      { key: "f", name: "state-management", value: "state-management" }
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

// Add new package Yes/No

module.exports.addPackage = [
  {
    type: "input",
    name: "packageAdd",
    message: `Would you like to add a package? (y/n)`
  }
];

// Input name for Install Folder

module.exports.installFolder = [
  {
    type: "input",
    name: "folderName",
    message:
      "Please input the name of the folder you would like to create for your project? (Enter a . if for current directory)"
  }
];

// Input name when creating new components for React project

module.exports.componentName = [
  {
    type: "input",
    name: "componentName",
    message:
      "Please enter the file name of the component you would like to create: "
  }
];

// React Components selection: Functional/Class

module.exports.reactComponents = [
  {
    type: "list",
    name: "component",
    message: "Function or Class Component?",
    choices: ["function", "class"]
  }
];

// React State Management tools: More options soon! ('Unstated', Easy-Peasy')
module.exports.stateManagement = [
  {
    type: "list",
    name: "state",
    message:
      "Please select the tool to add to your project for state management: ",
    choices: ["Redux", "Unstated"]
  }
];

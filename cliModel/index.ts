const cliCommand: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "installation",
    message: "What would you like to install?",
    choices: [
      "CustomPackageInstall",
      "CreateReactApp",
      "ReactComponent",
      "ReactRouter",
      "StylingPackages",
      "PropTypes",
      "StateManagement",
      "TypeScript"
    ]
  }
];
module.exports.cliCommand = cliCommand;

const multiplePackageInstall: [
  {
    type: string;
    name: string;
    message: string;
    default: string[];
    pageSize: number;
    choices: string[];
  }
] = [
  {
    type: "checkbox",
    name: "packages",
    message: "Select packages for your new React Project: ",
    default: ["create-react-app"],
    pageSize: 9,
    choices: [
      "create-react-app",
      "react-router react-router-dom",
      "redux react-redux",
      "redux-thunk",
      "prop-types",
      "node-sass",
      "styled-components",
      "unstated",
      "unstated-next",
      "typescript",
      "@types/node",
      "@types/react-redux",
      "@types/react @types/react-dom",
      "@types/react-router @types/react-router-dom",
      "@types/jest"
    ]
  }
];
module.exports.multiplePackageInstall = multiplePackageInstall;

const installOption: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "decision",
    message: "Would you like to Install or Uninstall?",
    choices: ["Install", "Uninstall"]
  }
];

module.exports.installOption = installOption;

// Add new package Yes/No

const addPackage: [{ type: string; name: string; message: string }] = [
  {
    type: "input",
    name: "packageAdd",
    message: `Would you like to add a package? (Y/N)`
  }
];

module.exports.addPackage = addPackage;

// Input name for Install Folder

const installFolder: [{ type: string; name: string; message: string }] = [
  {
    type: "input",
    name: "folderName",
    message:
      "Please input the name of the folder you would like to create for your project? (Enter a . if for current directory)"
  }
];

module.exports.installFolder = installFolder;

// Input name when creating new components for React project

const componentName: [{ type: string; name: string; message: string }] = [
  {
    type: "input",
    name: "componentName",
    message:
      "Please enter the file name of the component you would like to create: "
  }
];

module.exports.componentName = componentName;
// React Components selection: Functional/Class

const reactComponents: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "component",
    message: "Function or Class Component?",
    choices: ["function", "class"]
  }
];

module.exports.reactComponents = reactComponents;

// Styling Packages

const stylingPackages: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "stylingTool",
    message: "Please select the Styling Package to add to your project: ",
    choices: ["StyledComponents", "NodeSass"]
  }
];

module.exports.stylingPackages = stylingPackages;

// React State Management tools: More options soon! ('Unstated', Easy-Peasy')

const stateManagement: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "state",
    message:
      "Please select the tool to add to your project for state management: ",
    choices: ["Redux", "Unstated", "Redux-Thunk"]
  }
];

module.exports.stateManagement = stateManagement;

// Unstated options

const unstatedOptions: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "state",
    message:
      "Please select the which version of Unstated you would like to add to your project: ",
    choices: ["Unstated", "Unstated-next"]
  }
];

module.exports.unstatedOptions = unstatedOptions;

// TypeScript and Packages

const typescriptPackages: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "typescriptPackage",
    message: "Please select the TypeScript module to add to your project: ",
    choices: [
      "CustomInstall",
      "TypeScript",
      "@types/node",
      "@types/react @types/react-dom",
      "@types/react-router @types/react-router-dom",
      "@types/react-redux",
      "@types/jest"
    ]
  }
];

module.exports.typescriptPackages = typescriptPackages;

// Package Manager Options

const YarnOrNpm: [
  { type: string; name: string; message: string; choices: string[] }
] = [
  {
    type: "list",
    name: "packageManager",
    message: "Would you like to install using Yarn or NPM?",
    choices: ["Yarn", "NPM"]
  }
];

module.exports.YarnOrNpm = YarnOrNpm;

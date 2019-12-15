export {};

import { QuestionCollection } from "inquirer";

const CliCommand: QuestionCollection = {
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
};

export { CliCommand };

const MultiplePackageInstall: QuestionCollection = {
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
};

export { MultiplePackageInstall };

const InstallOption: QuestionCollection = {
  type: "list",
  name: "decision",
  message: "Would you like to Install or Uninstall?",
  choices: ["Install", "Uninstall"]
};

export { InstallOption };

// Add new package Yes/No

const AddPackage: QuestionCollection = {
  type: "input",
  name: "packageAdd",
  message: `Would you like to add a package? (Y/N)`
};

export { AddPackage };

// Input name for Install Folder

const InstallFolder: QuestionCollection = {
  type: "input",
  name: "folderName",
  message: "Please name your project folder "
};

export { InstallFolder };

// Input name when creating new components for React project

const ComponentName: QuestionCollection = {
  type: "input",
  name: "componentName",
  message:
    "Please enter the file name of the component you would like to create: "
};

export { ComponentName };
// React Components selection: Functional/Class

const ReactComponents: QuestionCollection = {
  type: "list",
  name: "component",
  message: "Function or Class Component?",
  choices: ["function", "class"]
};

export { ReactComponents };

// Styling Packages

const StylingPackages: QuestionCollection = {
  type: "list",
  name: "stylingTool",
  message: "Please select the Styling Package to add to your project: ",
  choices: ["StyledComponents", "NodeSass"]
};

export { StylingPackages };

// React State Management tools: More options soon! ('Unstated', Easy-Peasy')

const StateManagement: QuestionCollection = {
  type: "list",
  name: "state",
  message:
    "Please select the tool to add to your project for state management: ",
  choices: ["Redux", "Unstated", "Redux-Thunk"]
};

export { StateManagement };

// Unstated options

const UnstatedOptions: QuestionCollection = {
  type: "list",
  name: "state",
  message:
    "Please select the which version of Unstated you would like to add to your project: ",
  choices: ["Unstated", "Unstated-next"]
};

export { UnstatedOptions };

// TypeScript and Packages

const TypescriptPackages: QuestionCollection = {
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
};

export { TypescriptPackages };

// Package Manager Options

const YarnOrNpm: QuestionCollection = {
  type: "list",
  name: "packageManager",
  message: "Would you like to install using Yarn or NPM?",
  choices: ["Yarn", "NPM"]
};

export { YarnOrNpm };

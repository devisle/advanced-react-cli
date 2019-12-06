"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YarnOrNpm = exports.TypescriptPackages = exports.UnstatedOptions = exports.StateManagement = exports.StylingPackages = exports.ReactComponents = exports.ComponentName = exports.InstallFolder = exports.AddPackage = exports.InstallOption = exports.MultiplePackageInstall = exports.CliCommand = void 0;
var CliCommand = [{
  type: "list",
  name: "installation",
  message: "What would you like to install?",
  choices: ["CustomPackageInstall", "CreateReactApp", "ReactComponent", "ReactRouter", "StylingPackages", "PropTypes", "StateManagement", "TypeScript"]
}];
exports.CliCommand = CliCommand;
var MultiplePackageInstall = [{
  type: "checkbox",
  name: "packages",
  message: "Select packages for your new React Project: ",
  "default": ["create-react-app"],
  pageSize: 9,
  choices: ["create-react-app", "react-router react-router-dom", "redux react-redux", "redux-thunk", "prop-types", "node-sass", "styled-components", "unstated", "unstated-next", "typescript", "@types/node", "@types/react-redux", "@types/react @types/react-dom", "@types/react-router @types/react-router-dom", "@types/jest"]
}];
exports.MultiplePackageInstall = MultiplePackageInstall;
var InstallOption = [{
  type: "list",
  name: "decision",
  message: "Would you like to Install or Uninstall?",
  choices: ["Install", "Uninstall"]
}];
exports.InstallOption = InstallOption;
// Add new package Yes/No
var AddPackage = [{
  type: "input",
  name: "packageAdd",
  message: "Would you like to add a package? (Y/N)"
}];
exports.AddPackage = AddPackage;
// Input name for Install Folder
var InstallFolder = [{
  type: "input",
  name: "folderName",
  message: "Please input the name of the folder you would like to create for your project? (Enter a . if for current directory)"
}];
exports.InstallFolder = InstallFolder;
// Input name when creating new components for React project
var ComponentName = [{
  type: "input",
  name: "componentName",
  message: "Please enter the file name of the component you would like to create: "
}];
exports.ComponentName = ComponentName;
// React Components selection: Functional/Class
var ReactComponents = [{
  type: "list",
  name: "component",
  message: "Function or Class Component?",
  choices: ["function", "class"]
}];
exports.ReactComponents = ReactComponents;
// Styling Packages
var StylingPackages = [{
  type: "list",
  name: "stylingTool",
  message: "Please select the Styling Package to add to your project: ",
  choices: ["StyledComponents", "NodeSass"]
}];
exports.StylingPackages = StylingPackages;
// React State Management tools: More options soon! ('Unstated', Easy-Peasy')
var StateManagement = [{
  type: "list",
  name: "state",
  message: "Please select the tool to add to your project for state management: ",
  choices: ["Redux", "Unstated", "Redux-Thunk"]
}];
exports.StateManagement = StateManagement;
// Unstated options
var UnstatedOptions = [{
  type: "list",
  name: "state",
  message: "Please select the which version of Unstated you would like to add to your project: ",
  choices: ["Unstated", "Unstated-next"]
}];
exports.UnstatedOptions = UnstatedOptions;
// TypeScript and Packages
var TypescriptPackages = [{
  type: "list",
  name: "typescriptPackage",
  message: "Please select the TypeScript module to add to your project: ",
  choices: ["CustomInstall", "TypeScript", "@types/node", "@types/react @types/react-dom", "@types/react-router @types/react-router-dom", "@types/react-redux", "@types/jest"]
}];
exports.TypescriptPackages = TypescriptPackages;
// Package Manager Options
var YarnOrNpm = [{
  type: "list",
  name: "packageManager",
  message: "Would you like to install using Yarn or NPM?",
  choices: ["Yarn", "NPM"]
}];
exports.YarnOrNpm = YarnOrNpm;
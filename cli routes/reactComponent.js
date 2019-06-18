const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");
const reactComponents = cliModel.reactComponents;
const installFolder = cliModel.installFolder;
const componentName = cliModel.componentName;

const prompt = inquirer.createPromptModule();

const reactComponent = () => {
  prompt(reactComponents).then(({ component }) => {
    prompt(componentName).then(({ componentName }) => {
      prompt(installFolder).then(({ folderName }) => {
        if (component === "function") {
          if (folderName === ".") {
            const writeStream = fs.createWriteStream(`./${componentName}.js`);
            writeStream.write(`import React, {Component} from "react";


const ${componentName} = () => {
return <div />;
};

export default ${componentName};`);
          }
        }
      });
    });
  });
};

module.exports = reactComponent;

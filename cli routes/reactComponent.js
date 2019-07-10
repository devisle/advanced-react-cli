const inquirer = require("inquirer");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");
const reactComponents = cliModel.reactComponents;
const installFolder = cliModel.installFolder;
const componentName = cliModel.componentName;

//React Component Boilerplate
const componentCode = require("../cli model/starter-code/reactComponent");

const prompt = inquirer.createPromptModule();

const reactComponent = () => {
  prompt(reactComponents).then(({ component }) => {
    prompt(componentName).then(({ componentName }) => {
      prompt(installFolder).then(({ folderName }) => {
        if (component === "function") {
          if (folderName === "." || folderName === "") {
            const writeStream = fs.createWriteStream(`./${componentName}.js`);
            const fileData = componentCode(`${component}`, `${componentName}`);
            writeStream.write(fileData);
            console.log(
              `File Creation: Function component ${componentName} has been created successfully!`
            );
          } else {
            fs.mkdir(`./${folderName}`, { recursive: false }, err => {
              if (err) throw err;
            });
            const writeStream = fs.createWriteStream(
              `./${folderName}/${componentName}.js`
            );
            const fileData = componentCode(`${component}`, `${componentName}`);
            writeStream.write(fileData);
            console.log(
              `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
            );
          }
        } else if (component === "class") {
          if (folderName === "." || folderName === "") {
            const writeStream = fs.createWriteStream(`./${componentName}.js`);
            const fileData = componentCode(`${component}`, `${componentName}`);
            writeStream.write(fileData);
            console.log(
              `File Creation: Class component ${component} has been created successfully!`
            );
          } else {
            fs.mkdir(`./${folderName}`, { recursive: false }, err => {
              if (err) throw err;
            });
            const writeStream = fs.createWriteStream(
              `./${folderName}/${componentName}.js`
            );
            const fileData = componentCode(`${component}`, `${componentName}`);
            writeStream.write(fileData);
            console.log(
              `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
            );
          }
        }
      });
    });
  });
};

module.exports = reactComponent;

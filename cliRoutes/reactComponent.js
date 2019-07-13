const inquirer = require("inquirer");
const fs = require("fs");

// Cli Model
const cliModel = require("../cliModel");
const reactComponents = cliModel.reactComponents;
const installFolder = cliModel.installFolder;
const addPackage = cliModel.addPackage;
const componentName = cliModel.componentName;

//React Component Custom Boilerplate
const componentCode = require("../cliModel/starter-code/reactComponent");

const prompt = inquirer.createPromptModule();

const reactComponent = () => {
  prompt(reactComponents).then(({ component }) => {
    prompt(componentName).then(({ componentName }) => {
      prompt(installFolder).then(({ folderName }) => {
        prompt({
          ...addPackage[0],
          message: "Would you like to add PropTypes? : (Y/N)"
        }).then(({ packageAdd }) => {
          let propTypingBool;
          propTypingBool = ["yes", "y"].includes(packageAdd.toLowerCase())
            ? true
            : false;
          prompt({
            ...addPackage[0],
            message: "Would you like to add react-router? : (Y/N)"
          }).then(({ packageAdd }) => {
            let reactRouterBool;
            reactRouterBool = ["yes", "y"].includes(packageAdd.toLowerCase())
              ? true
              : false;
            prompt({
              ...addPackage[0],
              message: "Would you like to add Redux? : (Y/N)"
            }).then(({ packageAdd }) => {
              let reduxBool;
              reduxBool = ["yes", "y"].includes(packageAdd.toLowerCase())
                ? true
                : false;
              //Function Component
              if (component === "function") {
                if ([".", ""].includes(folderName)) {
                  const writeStream = fs.createWriteStream(
                    `./${componentName}.js`
                  );
                  const fileData = componentCode(
                    `${component}`,
                    `${componentName}`,
                    propTypingBool,
                    reactRouterBool,
                    reduxBool
                  );
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
                  const fileData = componentCode(
                    `${component}`,
                    `${componentName}`,
                    propTypingBool,
                    reactRouterBool,
                    reduxBool
                  );
                  writeStream.write(fileData);
                  console.log(
                    `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
                  );
                }
              }

              //Class Component
              else if (component === "class") {
                if ([".", ""].includes(folderName)) {
                  const writeStream = fs.createWriteStream(
                    `./${componentName}.js`
                  );
                  const fileData = componentCode(
                    `${component}`,
                    `${componentName}`,
                    propTypingBool,
                    reactRouterBool,
                    reduxBool
                  );
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
                  const fileData = componentCode(
                    `${component}`,
                    `${componentName}`,
                    propTypingBool,
                    reactRouterBool,
                    reduxBool
                  );
                  writeStream.write(fileData);
                  console.log(
                    `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
                  );
                }
              }
            });
          });
        });
      });
    });
  });
};

module.exports = reactComponent;

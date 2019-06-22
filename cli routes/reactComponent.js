const inquirer = require("inquirer");
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
          if (folderName === "." || folderName === "") {
            const writeStream = fs.createWriteStream(`./${componentName}.js`);
            writeStream.write(`import React from "react";

const ${componentName} = () => {
  return ();
};

export default ${componentName};`);
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
            writeStream.write(`import React from "react";

const ${componentName} = () => {
return <div />;
};

export default ${componentName};`);
            console.log(`File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`);
          }
        } else if (component === "class") {
          if (folderName === "." || folderName === "") {
            const writeStream = fs.createWriteStream(`./${componentName}.js`);
            writeStream.write(`import React, { Component } from 'react'

class ${componentName} extends Component {
  render() {
    return (
      <div>
        // Class Component
      </div>
    )
  }
}

export default ${componentName};
            `);
            console.log(`File Creation: Class component ${component} has been created successfully!`);
          } else {
            fs.mkdir(`./${folderName}`, { recursive: false }, err => {
              if (err) throw err;
            });
            const writeStream = fs.createWriteStream(
              `./${folderName}/${componentName}.js`
            );
            writeStream.write(`import React, { Component } from 'react'

class ${componentName} extends Component {
  render() {
    return (
      <div>
        // Class Component
      </div>
    )
  }
}

export default ${componentName};
            `);
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

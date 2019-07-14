const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cliModel");
const addPackage = cliModel.addPackage;
const installFolder = cliModel.installFolder;

// Cli Install Commands
const {
  createReactApp,
  reactRouterObj,
  reduxObj
} = require("../cliModel/install-commands");

const prompt = inquirer.createPromptModule();

const ReduxBoilerPlate = require("../cliModel/starter-code/redux");

module.exports = class CRA {
  CRAPrompt() {
    prompt({
      ...installFolder[0],
      message:
        "Please input the name of the folder you would like to create for your project? (Enter a folder name, e.g. 'my-app')"
    }).then(({ folderName }) => {
      if (folderName.length > 1) {
        // Prompts to install React Router
        prompt({
          ...addPackage[0],
          message: "Would you like to add React-Router?"
        }).then(({ packageAdd }) => {
          if (["y", "Y", "yes", "Yes"].includes(packageAdd)) {
            // Prompts to install Redux
            prompt({
              ...addPackage[0],
              message: "Would you like to add Redux?"
            }).then(({ packageAdd }) => {
              if (["y", "Y", "yes", "Yes"].includes(packageAdd)) {
                installAll(folderName);
              } else if (["n", "N", "No", "no"].includes(packageAdd)) {
                installCRAandReactRouter(folderName);
              }
            });
            // If 'n' for React Router, prompts to install Redux
          } else if (["n", "N", "No", "no"].includes(packageAdd)) {
            // Prompts to Install Redux
            prompt({
              ...addPackage[0],
              message: "Would you like to add Redux?"
            }).then(({ packageAdd }) => {
              if (["y", "Y", "yes", "Yes"].includes(packageAdd)) {
                installCRAandRedux(folderName);
              } else if (["n", "N", "No", "no"].includes(packageAdd)) {
                installCRA(folderName);
              }
            });
          }
        });
      } else {
        console.log(
          "You must specify the installation directory! (Enter a folder name, e.g. 'my-app', Or Enter '.' to install in current directory) "
        );
      }
    });
  }
};

// Installs CRA + All Packages
const installAll = folderName => {
  fs.appendFile("store.js", ReduxBoilerPlate, err => {
    if (err) throw err;
  });
  cmd.get(
    ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
      reactRouterObj.install
    } && ${
      reduxObj.install
    } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
    (err, data, stderr) => (err ? console.log(err) : console.log(stderr, data))
  );
};

// Installs CRA + React Router

const installCRAandReactRouter = folderName => {
  cmd.get(
    ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
      reactRouterObj.install
    }`,
    (err, data, stderr) => (err ? console.log(err) : console.log(stderr, data))
  );
};

// Installs CRA + Redux

const installCRAandRedux = folderName => {
  fs.appendFile("store.js", ReduxBoilerPlate, err => {
    if (err) throw err;
  });
  cmd.get(
    ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
      reduxObj.install
    } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
    (err, data, stderr) => (err ? console.log(err) : console.log(stderr, data))
  );
};

// Installs only CRA

const installCRA = folderName => {
  cmd.get(
    ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
    (err, data, stderr) => (err ? console.log(err) : console.log(stderr, data))
  );
};

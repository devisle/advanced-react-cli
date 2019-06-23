const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const addPackage = cliModel.addPackage;
const installFolder = cliModel.installFolder;

// Cli Install Commands
const {
  createReactApp,
  reactRouterObj,
  reduxObj
} = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const cra = () => {
  prompt(installFolder).then(({ folderName }) => {
    if (folderName.length > 1) {
      // Prompts to install React Router
      prompt({
        ...addPackage[0],
        message: "Would you like to add React-Router?"
      }).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y") {
          // Prompts to install Redux
          prompt({
            ...addPackage[0],
            message: "Would you like to add Redux?"
          }).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              // Instals CRA , React Router and Redux
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reactRouterObj.install
                } && ${reduxObj.install}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              // Installs CRA and React Router
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reactRouterObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
          // If 'n' for React Router, prompts to install Redux
        } else if (packageAdd === "n" || packageAdd === "N") {
          // Prompts to Install Redux
          prompt({
            ...addPackage[0],
            message: "Would you like to add Redux?"
          }).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reduxObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              // If 'no' for Redux and React Router, it installs just CRA.
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        }
      });
    } else if (folderName === ".") {
      // Prompts to install React Router
      prompt({
        ...addPackage[0],
        message: "Would you like to add React-Router?"
      }).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y") {
          // Prompts to install Redux
          prompt({
            ...addPackage[0],
            message: "Would you like to add Redux?"
          }).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` ${createReactApp} . && ${reactRouterObj.install} && ${
                  reduxObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              // If 'no' for Redux, It installs only CRA and React Router
              cmd.get(
                ` ${createReactApp} . && ${reactRouterObj.install}`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          // If No for React Router, it prompts to install Redux

          prompt({
            ...addPackage[0],
            message: "Would you like to add Redux?"
          }).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` ${createReactApp} . && ${reduxObj.install}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              // If 'n' for React Router and Redux, it installs only CRA
              cmd.get(` ${createReactApp} .`, (err, data, stderr) =>
                console.log(data)
              );
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
};

module.exports = cra;

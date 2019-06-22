const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const addPackage = cliModel.addPackage;
const installFolder = cliModel.installFolder;

// Cli Install Commands
const installCommands = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const cra = () => {
  prompt(installFolder).then(({ folderName }) => {
    if (folderName !== "") {
      console.log("React Router");
      prompt(addPackage).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y") {
          console.log("Node Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${
                  installCommands.cra
                } . && ${installCommands.reactRouter} && ${
                  installCommands.nodeSass
                }`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${
                  installCommands.cra
                } . && ${installCommands.reactRouter}`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          console.log("Node Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${
                  installCommands.cra
                } . && ${installCommands.nodeSass}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${
                  installCommands.cra
                } .`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        }
      });
    } else if (folderName === ".") {
      console.log("React Router");
      prompt(addPackage).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y") {
          console.log("Node Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` ${installCommands.cra} . && ${
                  installCommands.reactRouter
                } && ${installCommands.nodeSass}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` ${installCommands.cra} . && ${installCommands.reactRouter}`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          console.log("Node Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` ${installCommands.cra} . && ${installCommands.nodeSass}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(` ${installCommands.cra} .`, (err, data, stderr) =>
                console.log(data)
              );
            }
          });
        }
      });
    } else {
      console.log(
        "You must specify installation directory! (Enter a folder name, like 'my-app') "
      );
    }
  });
};

module.exports = cra;

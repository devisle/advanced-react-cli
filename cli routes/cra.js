const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const addPackage = cliModel.addPackage;
const installFolder = cliModel.installFolder;

// Cli Install Commands
const { cra, reactRouter, nodeSass } = require("../cli model/install-commands");

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
                ` mkdir ${folderName} && cd ${folderName} && ${cra} . && ${
                  reactRouter.install
                } && ${nodeSass.install}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${cra} . && ${
                  reactRouter.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          console.log("Node Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${cra} . && ${
                  nodeSass.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${cra} .`,
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
                ` ${cra} . && ${reactRouter.install} && ${nodeSass.install}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` ${cra} . && ${reactRouter.install}`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          console.log("Node Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(` ${cra} . && ${nodeSass.install}`, (err, data, stderr) =>
                console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(` ${cra} .`, (err, data, stderr) => console.log(data));
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

const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const addPackage = cliModel.addPackage();
const installFolder = cliModel.installFolder();

// Cli Install Commands
const {
  createReactApp,
  reactRouterObj,
  nodeSassObj
} = require("../cli model/install-commands");;
/**
 * tut @shreyas ;)
 * @see f cli.js prompt const for further comment
 */
const prompt = inquirer.createPromptModule();

const cra = () => {
  prompt(installFolder).then(({ folderName }) => {
    if (folderName !== "") {
      console.log("React-Router");
      prompt(addPackage).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y") {
          console.log("Node-Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reactRouterObj.install
                } && ${nodeSassObj.install}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reactRouterObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          console.log("Node-Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  nodeSassObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        }
      });
    } else if (folderName === ".") {
      console.log("React-Router");
      prompt(addPackage).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y") {
          console.log("Node-Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` ${createReactApp} . && ${reactRouterObj.install} && ${
                  nodeSassObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(
                ` ${createReactApp} . && ${reactRouterObj.install}`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        } else if (packageAdd === "n" || packageAdd === "N") {
          console.log("Node-Sass");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              cmd.get(
                ` ${createReactApp} . && ${nodeSassObj.install}`,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N") {
              cmd.get(` ${createReactApp} .`, (err, data, stderr) =>
                console.log(data)
              );
            }
          });
        }
      });
    } else {
      console.log(
        "You must specify the installation directory! (Enter a folder name, e.g. 'my-app') "
      );
    }
  });
};

module.exports = cra;

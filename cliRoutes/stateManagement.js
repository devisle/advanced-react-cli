const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cliModel");
const installOption = cliModel.installOption;
const stateOption = cliModel.stateManagement;
const unstatedOption = cliModel.unstatedOptions;

// Cli Install Commands
const {
  reduxObj,
  unstatedObj,
  reduxThunkObj
} = require("../cliModel/install-commands");

// Destructuring the Unstated Object
const { unstated, unstatedNext } = unstatedObj;

// Importing Redux Boiler plate file
const ReduxBoilerPlate = require("../cliModel/starter-code/redux");

const prompt = inquirer.createPromptModule();

const stateManagement = () => {
  prompt(stateOption).then(({ state }) => {
    // Redux
    if (state === "Redux") {
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          cmd.get(`${reduxObj.install}`, (err, data, stderr) => {
            if (err) throw err;
            else console.log(data);
          });
          fs.mkdir("./store", err => {
            if (err) throw err;
          });
          cmd.get(`cd store && touch store.js`);
          const writeStream = fs.createWriteStream("./store/store.js");
          writeStream.write(`${ReduxBoilerPlate}`);
          console.log(
            "Packages: redux & react-redux has been installed successfully!"
          );
          console.log("Redux Store has been created successfully!");
        } else if (decision === "Uninstall") {
          cmd.get(`${reduxObj.uninstall}`, (err, data, stderr) => {
            if (err) throw err;
            else console.log(data);
          });
          console.log(
            "Packages: redux & react-redux has been uninstalled successfully!"
          );
        }
      });
    }
    // Unstated
    else if (state === "Unstated") {
      prompt(unstatedOption).then(({ state }) => {
        if (state === "Unstated") {
          prompt(installOption).then(({ decision }) => {
            if (decision === "Install") {
              cmd.get(`${unstated.install}`, (err, data, stderr) => {
                if (err) throw err;
                else console.log(data);
              });
              console.log(
                "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
              );
              console.log("Package: Unstated has been installed!");
            } else {
              cmd.get(`${unstated.uninstall}`, (err, data, stderr) => {
                if (err) throw err;
                else console.log(data);
              });
              console.log("Package: Unstated has been uninstalled!");
            }
          });
        } else if (state === "Unstated-next") {
          prompt(installOption).then(({ decision }) => {
            if (decision === "Install") {
              cmd.get(`${unstatedNext.install}`, (err, data, stderr) => {
                if (err) throw err;
                else console.log(data);
              });
              console.log(
                "Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next "
              );
              console.log("Package: Unstated-next has been installed!");
            } else {
              cmd.get(`${unstatedNext.uninstall}`, (err, data, stderr) => {
                if (err) throw err;
                else console.log(data);
              });
              console.log("Package: Unstated-next has been uninstalled!");
            }
          });
        }
      });
    }
    // Redux-Think
    else if (state === "Redux-Thunk") {
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          cmd.get(`${reduxThunkObj.install}`, (err, data, stderr) => {
            if (err) throw err;
            else console.log(data);
          });
          console.log("Package: Redux-Thunk has been installed!");
          console.log(
            "Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk "
          );
        } else {
          cmd.get(`${reduxThunkObj.uninstall}`, (err, data, stderr) => {
            if (err) throw err;
            else console.log(data);
          });
          console.log("Package: Redux-Thunk has been uninstalled!");
        }
      });
    }
  });
};

module.exports = stateManagement;

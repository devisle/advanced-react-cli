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
module.exports = class StateManagement {
  prompt() {
    prompt(stateOption).then(({ state }) => {
      if (state === "Redux") {
        new Redux().installOrUninstall();
      } else if (state === "Unstated") {
        prompt(unstatedOption).then(({ state }) => {
          if (state === "Unstated") {
            new Unstated().installOrUninstall();
          } else if (state === "Unstated-next") {
            new UnstatedNext().installOrUninstall();
          }
        });
      } else if (state === "Redux-Thunk") {
        new ReduxThunk().installOrUninstall();
      }
    });
  }
};

class Redux {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install();
      } else if (decision === "Uninstall") {
        this.uninstall();
      }
    });
  }

  install() {
    cmd.get(`${reduxObj.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
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
  }

  uninstall() {
    cmd.get(`${reduxObj.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Packages: redux & react-redux has been uninstalled successfully!"
    );
  }
}

class Unstated {
  installOrUninstall() {
    if (state === "Unstated") {
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          this.install();
        } else {
          this.uninstall();
        }
      });
    }
  }

  install() {
    cmd.get(`${unstated.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
    );
    console.log("Package: Unstated has been installed!");
  }

  uninstall() {
    cmd.get(`${unstated.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Unstated has been uninstalled!");
  }
}

class UnstatedNext {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install();
      } else {
        this.uninstall();
      }
    });
  }

  install() {
    cmd.get(`${unstatedNext.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next "
    );
    console.log("Package: Unstated-next has been installed!");
  }

  uninstall() {
    cmd.get(`${unstatedNext.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Unstated-next has been uninstalled!");
  }
}

class ReduxThunk {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install();
      } else {
        this.uninstall();
      }
    });
  }

  install() {
    cmd.get(`${reduxThunkObj.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Redux-Thunk has been installed!");
    console.log(
      "Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk "
    );
  }

  uninstall() {
    cmd.get(`${reduxThunkObj.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Redux-Thunk has been uninstalled!");
  }
}

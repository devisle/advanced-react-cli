const cmd = require("node-cmd");
const fs = require("fs");

// Cli Install Commands
const { createReactApp, reduxObj } = require("../../cliModel/install-commands");

// Import Redux Boilerplate
const ReduxBoilerPlate = require("../../cliModel/starter-code/redux");

module.exports = (folderName, packageInstaller) => {
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

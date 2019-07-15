const cmd = require("node-cmd");

// Cli Install Commands
const { createReactApp } = require("../../cliModel/install-commands");

const { createReactAppYarn } = require("../../cliModel/install-commands-yarn");

module.exports = (folderName, packageInstaller) => {
  if (packageInstaller === "NPM") {
    cmd.get(
      ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
      (err, data, stderr) =>
        err ? console.log(err) : console.log(stderr, data)
    );
  } else {
    cmd.get(
      ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} .`,
      (err, data, stderr) =>
        err ? console.log(err) : console.log(stderr, data)
    );
  }
};

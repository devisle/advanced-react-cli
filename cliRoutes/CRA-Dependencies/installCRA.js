const cmd = require("node-cmd");

// Cli Install Commands
const { createReactApp } = require("../../cliModel/install-commands");

module.exports = folderName => {
  cmd.get(
    ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
    (err, data, stderr) => (err ? console.log(err) : console.log(stderr, data))
  );
};

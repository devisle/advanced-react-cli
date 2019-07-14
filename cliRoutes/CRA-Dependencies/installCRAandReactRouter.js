const cmd = require("node-cmd");
const fs = require("fs");

const {
  createReactApp,
  reactRouterObj
} = require("../../cliModel/install-commands");

module.exports = folderName => {
  cmd.get(
    ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
      reactRouterObj.install
    }`,
    (err, data, stderr) => (err ? console.log(err) : console.log(stderr, data))
  );
};

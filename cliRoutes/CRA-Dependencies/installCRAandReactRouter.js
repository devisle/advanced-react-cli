const cmd = require("node-cmd");
const fs = require("fs");

const {
  createReactApp,
  reactRouterObj
} = require("../../cliModel/install-commands");

const {
  createReactAppYarn,
  reactRouterObjYarn
} = require("../../cliModel/install-commands-yarn");

module.exports = (folderName, packageInstaller) => {
  if (packageInstaller === "NPM") {
    cmd.get(
      ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
        reactRouterObj.install
      }`,
      (err, data, stderr) =>
        err ? console.log(err) : console.log(stderr, data)
    );
  } else {
    cmd.get(
      ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} . && ${
        reactRouterObjYarn.install
      }`,
      (err, data, stderr) =>
        err ? console.log(err) : console.log(stderr, data)
    );
  }
};

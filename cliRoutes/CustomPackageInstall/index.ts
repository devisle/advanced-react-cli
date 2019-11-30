export {};

const inquirer = require("inquirer");
const customCMD = require("../../customNodeCMD");
const errorLogging = require("../../customNodeCMD/customError");

// Cli Model
const cliModel = require("../../cliModel.ts");
const multiplePackageInstall = cliModel.multiplePackageInstall;
const YarnOrNpm = cliModel.YarnOrNpm;

const { createReactApp } = require("../../cliModel/install-commands.ts");

const { createReactAppYarn } = require("../../cliModel/install-commands-yarn");

const prompt = inquirer.createPromptModule();

/*

  Installs A React Application with Custom Packages

*/

module.exports = class CustomPackageInstall {
  prompt() {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      prompt(multiplePackageInstall).then(({ packages }) => {
        if ([...packages].includes("create-react-app")) {
          packages.shift();
          packages.join(" ");
          switch (packageManager) {
            case "Yarn":
              customCMD.get(
                `${createReactAppYarn} ${folderName} && cd ${folderName} && yarn add ${packages.join(
                  " "
                )} `,
                (err, data, stderr) => {
                  err ? console.log(err) : errorLogging(stderr, data);
                },
                "install"
              );
              break;

            case "NPM":
              customCMD.get(
                `${createReactApp} ${folderName} && cd ${folderName} && npm install --save ${packages.join(
                  " "
                )}`,
                (err, data, stderr) => {
                  err ? console.log(err) : errorLogging(stderr, data);
                },
                "install"
              );
          }
        } else {
          switch (packageManager) {
            case "Yarn":
              customCMD.get(
                `yarn add ${packages.join(" ")} `,
                (err, data, stderr) => {
                  err ? console.log(err) : errorLogging(stderr, data);
                },
                "install"
              );
              break;

            case "NPM":
              customCMD.get(
                `npm install --save ${packages.join(" ")}`,
                (err, data, stderr) => {
                  err ? console.log(err) : errorLogging(stderr, data);
                },
                "install"
              );
          }
        }
      });
    });
  }
};

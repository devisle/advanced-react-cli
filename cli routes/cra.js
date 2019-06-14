const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption;
const addPackage = cliModel.addPackage;
const installFolder = cliModel.installFolder;

// Cli Install Commands
const installCommands = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

// Original Code block
// const cra = () => {
//   prompt(installOption).then(({ decision }) => {
//     if (decision === "Install") {
//       cmd.get("npm i -g create-react-app", function(err, data, stderr) {
//         console.log(data);
//       });
//     } else if (decision === "Uninstall") {
//       cmd.get("npm uninstall -g create-react-app", function(err, data, stderr) {
//         console.log(data);
//       });
//     }
//   });
// };

const cra = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      prompt(installFolder).then(({ folderName }) => {
        if (folderName !== "") {
          console.log("React Router");
          prompt(addPackage).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y") {
              console.log("Node Sass");
              prompt(addPackage).then(({ packageAdd }) => {
                if (packageAdd === "y" || packageAdd === "Y") {
                  cmd.get(
                    `${installCommands.cra} ${folderName}`,
                    (err, data, stderr) => console.log(data)
                  );
                  cmd.get(
                    `${installCommands.reactRouter}`,
                    (err, data, stderr) => console.log(data)
                  );
                  cmd.get(`${installCommands.nodeSass}`, (err, data, stderr) =>
                    console.log(data)
                  );
                } else if (packageAdd === "n" || packageAdd === "N") {
                  cmd.get(
                    `${installCommands.cra} ${folderName}`,
                    (err, data, stderr) => console.log(data)
                  );
                  cmd.get(
                    `${installCommands.reactRouter}`,
                    (err, data, stderr) => console.log(data)
                  );
                }
              });
            } else if (packageAdd === "n" || packageAdd === "N") {
              console.log("Node Sass");
              prompt(addPackage).then(({ packageAdd }) => {
                if (packageAdd === "y" || packageAdd === "Y") {
                  cmd.get(
                    `${installCommands.cra} ${folderName}`,
                    (err, data, stderr) => console.log(data)
                  );
                  cmd.get(`${installCommands.nodeSass}`, (err, data, stderr) =>
                    console.log(data)
                  );
                } else if (packageAdd === "n" || packageAdd === "N") {
                  cmd.get(
                    `${installCommands.cra} ${folderName}`,
                    (err, data, stderr) => console.log(data)
                  );
                }
              });
            }
          });
        } else {
          console.log("You must specify installation directory!");
        }
      });
    }
  });
};

module.exports = cra;

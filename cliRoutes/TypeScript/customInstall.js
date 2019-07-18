const inquirer = require("inquirer");

const customCMD = require("../../customNodeCMD");
const errorLogging = require("../../customNodeCMD/customError");

// CLI Model
const cliModel = require("../../cliModel");
const addPackage = cliModel.addPackage;

const prompt = inquirer.createPromptModule();

/*

  Gives user to custom install TypeScript + @types packages.

*/

module.exports = class CustomInstall {
  prompt(packageInstaller) {
    let addTypeScriptNPM,
      addTypesNodeNPM,
      addTypesReactNPM,
      addTypesReactRouterNPM,
      addTypesJestNPM,
      addTypeScriptYarn,
      addTypesNodeYarn,
      addTypesReactYarn,
      addTypesReactRouterYarn,
      addTypesJestYarn;

    /*
        Prompts to install TypeScript
      */
    prompt({
      ...addPackage[0],
      message: "Would you like to install TypeScript? (Y/N)"
    }).then(({ packageAdd }) => {
      if (["y", "yes"].includes(addPackage.toLowerCase())) {
        addTypeScriptNPM, (addTypeScriptYarn = "typescript");
      } else if (["n", "no"].includes(addPackage.toLowerCase())) {
        addTypeScriptNPM, (addTypeScriptYarn = "");
      }
      /*
        Prompts to install @types/node
      */
      prompt({
        ...addPackage[0],
        message: "Would you like to add @types/node? (Y/N)"
      }).then(({ packageAdd }) => {
        if (["y", "yes"].includes(addPackage.toLowerCase())) {
          addTypesNodeNPM, (addTypesNodeYarn = "@types/node");
        } else if (["n", "no"].includes(addPackage.toLowerCase())) {
          addTypesNodeNPM, (addTypesNodeYarn = "");
        }
        /*
          Prompts to install @types/react @types/react-dom
        */
        prompt({
          ...addPackage[0],
          message: "Would you like to add @types/react? (Y/N)"
        }).then(({ packageAdd }) => {
          if (["y", "yes"].includes(addPackage.toLowerCase())) {
            addTypesReactNPM,
              (addTypesReactYarn = "@types/react @types/react-dom");
          } else if (["n", "no"].includes(addPackage.toLowerCase())) {
            addTypesReactNPM, (addTypesReactYarn = "");
          }
          /*
            Prompts to install @types/react-router @types/react-router-dom
          */
          prompt({
            ...addPackage[0],
            message: "Would you like to add @types/react-router? (Y/N)"
          }).then(({ packageAdd }) => {
            if (["y", "yes"].includes(addPackage.toLowerCase())) {
              addTypesReactRouterNPM,
                (addTypesReactRouterYarn =
                  "@types/react-router @types/react-router-dom");
            } else if (["n", "no"].includes(addPackage.toLowerCase())) {
              addTypesReactRouterNPM, (addTypesReactRouterYarn = "");
            }

            /*
              Prompts to install @types/jest
            */
            prompt({
              ...addPackage[0],
              message: "Would you like to add @types/jest? (Y/N)"
            }).then(({ packageAdd }) => {
              if (["y", "yes"].includes(addPackage.toLowerCase())) {
                addTypesJestNPM,
                  (addTypesJestYarn =
                    "@types/react-router @types/react-router-dom");
              } else if (["n", "no"].includes(addPackage.toLowerCase())) {
                addTypesJestNPM, (addTypesJestYarn = "");
              }

              switch (packageInstaller) {
                case "NPM":
                  customCMD.get(
                    ` npm install --save ${addTypeScriptNPM} ${addTypesNodeNPM} ${addTypesReactNPM} ${addTypesReactRouterNPM} ${addTypesJestNPM}`,
                    (err, data, stderr) => {
                      err ? console.log(err) : errorLogging(stderr, data);
                    },
                    "install"
                  );
                  break;

                case "Yarn":
                  customCMD.get(
                    `yarn add ${addTypeScriptYarn} ${addTypesNodeYarn} ${addTypesReactYarn} ${addTypesReactRouterYarn} ${addTypesJestYarn}`,
                    (err, data, stderr) => {
                      err ? console.log(err) : errorLogging(stderr, data);
                    },
                    "install"
                  );
              }
            });
          });
        });
      });
    });
  }
};

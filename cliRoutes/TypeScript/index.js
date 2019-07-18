const inquirer = require("inquirer");

// CLI Model
const cliModel = require("../../cliModel");
// const addPackage = cliModel.addPackage
const TypeScriptPackages = cliModel.typescriptPackages;
const YarnOrNpm = cliModel.YarnOrNpm;

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls TypeScript & @types packages

*/

module.exports = class TypeScript {
  prompt() {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager;
      prompt(TypeScriptPackages).then(({ typescriptPackage }) => {
        switch (typescriptPackage) {
          case "TypeScript":
            console.log("TypeScript");
            break;

          case "@types/nodes":
            console.log("Works");
            break;

          case "@types/react @types/react-dom":
            console.log("Works");
            break;

          case "@types/react-router @types/react-router-dom":
            console.log("Works");
            break;

          case "@types/jest":
            console.log("Works");
            break;
        }
      });
    });
  }
};

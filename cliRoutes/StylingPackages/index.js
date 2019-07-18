const inquirer = require("inquirer");

// CLI Model
const cliModel = require("../../cliModel");
const stylingPackage = cliModel.stylingPackages;
const YarnOrNpm = cliModel.YarnOrNpm;

// Styling Packages Dependencies
const StyledComponents = require("./styledComponents");
const NodeSass = require("./nodeSass");

const prompt = inquirer.createPromptModule();

/*

  Installs/Uninstalls Styling Packages

*/

module.exports = class StylingPackages {
  prompt() {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager;
      prompt(stylingPackage).then(({ stylingTool }) => {
        switch (stylingTool) {
          case "StyledComponents":
            new StyledComponents().installOrUninstall(packageInstaller);
            break;

          case "NodeSass":
            new NodeSass().installOrUninstall(packageInstaller);
            break;
        }
      });
    });
  }
};

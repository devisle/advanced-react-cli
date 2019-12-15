import inquirer, { Answers } from "inquirer";

// Cli Model

import {
  ReactComponents,
  InstallFolder,
  AddPackage,
  ComponentName
} from "../../cliModel/index";

// Component Dependencies
import GenerateComponent from "./index";

const prompt = inquirer.createPromptModule();

/*

  Generates a React Component based on user inputs

*/
module.exports = class ReactComponent {
  // Prompts User for Component type
  componentPrompt() {
    prompt(ReactComponents).then((answers: Answers) => {
      const component = answers.component;
      this.componentName(component);
    });
  }
  // Prompts User for Component Name
  componentName(component: string) {
    prompt(ComponentName).then((answers: Answers) => {
      const componentName = answers.componentName;
      this.folderName(component, componentName);
    });
  }

  // Prompts User for Folder Name
  folderName(component: string, componentName: string) {
    prompt(InstallFolder).then((answers: Answers) => {
      const folderName = answers.folderName;
      this.propTypesAdd(component, componentName, folderName);
    });
  }

  // Prompts User on PropTypes
  propTypesAdd(component: string, componentName: string, folderName: string) {
    let message: string = "Would you like to add PropTypes? (Y/N)";
    prompt({
      ...AddPackage,
      message
    }).then((answers: Answers) => {
      const packageAdd = answers.packageAdd;
      let propTypingBool: boolean;
      propTypingBool = ["yes", "y", ""].includes(packageAdd.toLowerCase())
        ? true
        : false;
      this.reactRouterAdd(component, componentName, folderName, propTypingBool);
    });
  }

  // Prompts User on React-Router
  reactRouterAdd(
    component: string,
    componentName: string,
    folderName: string,
    propTypingBool: boolean
  ) {
    prompt({
      ...AddPackage,
      message: "Would you like to add react-router? (Y/N)"
    }).then((answers: Answers) => {
      const packageAdd = answers.packageAdd;
      let reactRouterBool: boolean;
      reactRouterBool = ["yes", "y", ""].includes(packageAdd.toLowerCase())
        ? true
        : false;
      this.reduxAdd(
        component,
        componentName,
        folderName,
        propTypingBool,
        reactRouterBool
      );
    });
  }

  // Prompts User on Redux
  reduxAdd(
    component: string,
    componentName: string,
    folderName: string,
    propTypingBool: boolean,
    reactRouterBool: boolean
  ) {
    prompt({
      ...AddPackage,
      message: "Would you like to add Redux? (Y/N)"
    }).then((answers: Answers) => {
      const packageAdd = answers.packageAdd;
      let reduxBool: boolean;
      reduxBool = ["yes", "y", ""].includes(packageAdd.toLowerCase())
        ? true
        : false;
      this.functionOrClass(
        component,
        componentName,
        folderName,
        propTypingBool,
        reactRouterBool,
        reduxBool
      );
    });
  }

  // Main Logic Split : Function or Class Component
  functionOrClass(
    component: string,
    componentName: string,
    folderName: string,
    propTypingBool: boolean,
    reactRouterBool: boolean,
    reduxBool: boolean
  ) {
    GenerateComponent({
      component,
      componentName,
      folderName,
      propTypingBool,
      reactRouterBool,
      reduxBool
    });
  }
};

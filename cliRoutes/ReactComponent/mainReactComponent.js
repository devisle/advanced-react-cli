const inquirer = require('inquirer')

// Cli Model
const cliModel = require('../../cliModel')
const reactComponents = cliModel.reactComponents
const installFolder = cliModel.installFolder
const addPackage = cliModel.addPackage
const componentName = cliModel.componentName

// Component Dependencies
const FunctionComponent = require('./functionComponent')
const ClassComponent = require('./classComponent')

const prompt = inquirer.createPromptModule()

/*

  Generates a React Component based on user inputs

*/
module.exports = class ReactComponent {
  // Prompts User for Component type
  componentPrompt () {
    prompt(reactComponents).then(({ component }) => {
      this.componentName(component)
    })
  }
  // Prompts User for Component Name
  componentName (component) {
    prompt(componentName).then(({ componentName }) => {
      this.folderName(component, componentName)
    })
  }

  // Prompts User for Folder Name
  folderName (component, componentName) {
    prompt(installFolder).then(({ folderName }) => {
      this.propTypesAdd(component, componentName, folderName)
    })
  }

  // Prompts User on PropTypes
  propTypesAdd (component, componentName, folderName) {
    prompt({
      ...addPackage[0],
      message: 'Would you like to add PropTypes? (Y/N)'
    }).then(({ packageAdd }) => {
      let propTypingBool
      propTypingBool = ['yes', 'y', ''].includes(packageAdd.toLowerCase())
        ? true
        : false
      this.reactRouterAdd(component, componentName, folderName, propTypingBool)
    })
  }

  // Prompts User on React-Router
  reactRouterAdd (component, componentName, folderName, propTypingBool) {
    prompt({
      ...addPackage[0],
      message: 'Would you like to add react-router? (Y/N)'
    }).then(({ packageAdd }) => {
      let reactRouterBool
      reactRouterBool = ['yes', 'y', ''].includes(packageAdd.toLowerCase())
        ? true
        : false
      this.reduxAdd(
        component,
        componentName,
        folderName,
        propTypingBool,
        reactRouterBool
      )
    })
  }

  // Prompts User on Redux
  reduxAdd (
    component,
    componentName,
    folderName,
    propTypingBool,
    reactRouterBool
  ) {
    prompt({
      ...addPackage[0],
      message: 'Would you like to add Redux? (Y/N)'
    }).then(({ packageAdd }) => {
      let reduxBool
      reduxBool = ['yes', 'y', ''].includes(packageAdd.toLowerCase())
        ? true
        : false
      this.functionOrClass(
        component,
        componentName,
        folderName,
        propTypingBool,
        reactRouterBool,
        reduxBool
      )
    })
  }

  // Main Logic Split : Function or Class Component
  functionOrClass (
    component,
    componentName,
    folderName,
    propTypingBool,
    reactRouterBool,
    reduxBool
  ) {
    if (component === 'function') {
      FunctionComponent({
        component,
        componentName,
        folderName,
        propTypingBool,
        reactRouterBool,
        reduxBool
      })
    } else {
      ClassComponent({
        component,
        componentName,
        folderName,
        propTypingBool,
        reactRouterBool,
        reduxBool
      })
    }
  }
}

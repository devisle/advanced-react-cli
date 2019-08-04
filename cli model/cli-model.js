/**
 * @todo replace all methods with a switch statement which takes a string (command) and returns
 * the appropriate cli option config @shreyas ;)
 * @todo replace method names with something a little more obvious / clean
 */
class CLIModel {

  constructor() { }

  static cliCommand() {
    return [
      {
        type: "list",
        name: "installation",
        message: "What would you like to install?",
        choices: [
          "create-react-app",
          "react-component",
          "react-router",
          "node-sass",
          "prop-types",
          "state-management"
        ]
      }
    ]
  }

  /**
   * @todo install / uninstall "what"? Make this say the chosen cliCommand option
   */
  static installOption() { 
    return [
      {
        type: "list",
        name: "decision",
        message: "Would you like to Install or Uninstall?",
        choices: ["Install", "Uninstall"]
      }
    ]
  }

  /**
   * @todo what "package"?  Make this say the chosen package option
   */
  static addPackage() {
    return [
      {
        type: "input",
        name: "packageAdd",
        message: `Would you like to add a package? (y/n)`
      }
    ]
  }

  static installFolder() {
    return [
      {
        type: "input",
        name: "folderName",
        message:
          "Please input the name of the folder you would like to create for your project? (Enter a . if for current directory)"
      }
    ]
  }

  static componentName() {
    return [
      {
        type: "input",
        name: "componentName",
        message:
          "Please enter the file name of the component you would like to create: "
      }
    ]
  }

  static reactComponents() {
    return [
      {
        type: "list",
        name: "component",
        message: "Function or Class Component?",
        choices: ["function", "class"]
      }
    ]
  }

  /**
   * Maybe leave this option for another time and have another default to Redux
   * as we don't have any other options yet!
   */
  static stateManagement() {
    return [
      {
        type: "list",
        name: "state",
        message:
          "Please select the tool to add to your project for state management: ",
        choices: ["Redux"]
      }
    ]
  }

}

module.exports = CLIModel;


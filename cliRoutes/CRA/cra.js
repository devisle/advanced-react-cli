const inquirer = require('inquirer')

// Cli Model
const cliModel = require('../../cliModel')
const addPackage = cliModel.addPackage
const installFolder = cliModel.installFolder
const YarnOrNpm = cliModel.YarnOrNpm

//Import CRA Install Dependencies
const installAll = require('./installAll')
const installCRA = require('./installCRA')
const installCRAandReactRouter = require('./installCRAandReactRouter')
const installCRAandRedux = require('./installCRAandRedux')

const prompt = inquirer.createPromptModule()

/*

  Installs a Boilerplate react application using Create-react-app + optional packages

*/
module.exports = class CRA {
  CRAPrompt () {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager
      prompt({
        ...installFolder[0],
        message: 'Please give project name, example (my-app)'
      }).then(({ folderName }) => {
        if (folderName.length > 1) {
          /*
            Prompts to install React Router
          */
          prompt({
            ...addPackage[0],
            message: 'Would you like to add React-Router? (Y/N)'
          }).then(({ packageAdd }) => {
            if (['y', 'Y', 'yes', 'Yes', ''].includes(packageAdd)) {
              /*
                Prompts to install Redux
              */
              prompt({
                ...addPackage[0],
                message: 'Would you like to add Redux? (Y/N)'
              }).then(({ packageAdd }) => {
                if (['y', 'Y', 'yes', 'Yes', ''].includes(packageAdd)) {
                  installAll(folderName, packageInstaller)
                } else if (['n', 'N', 'No', 'no'].includes(packageAdd)) {
                  installCRAandReactRouter(folderName, packageInstaller)
                }
              })
              /*
                If 'n' for React Router, prompts to install Redux
              */
            } else if (['n', 'N', 'No', 'no'].includes(packageAdd)) {
              /*
                Prompts to Install Redux
              */
              prompt({
                ...addPackage[0],
                message: 'Would you like to add Redux? (Y/N)'
              }).then(({ packageAdd }) => {
                if (['y', 'Y', 'yes', 'Yes', ''].includes(packageAdd)) {
                  installCRAandRedux(folderName, packageInstaller)
                } else if (['n', 'N', 'No', 'no'].includes(packageAdd)) {
                  installCRA(folderName, packageInstaller)
                }
              })
            }
          })
        } else {
          console.log(
            "You must specify the installation directory! (Enter a folder name, e.g. 'my-app', Or Enter '.' to install in current directory) "
          )
        }
      })
    })
  }
}

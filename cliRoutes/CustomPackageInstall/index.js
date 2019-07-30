const inquirer = require('inquirer')
// const customCMD = require('../customNodeCMD');
// const errorLogging = require('../customNodeCMD/customError');

// Cli Model
const cliModel = require('../../cliModel')
const multiplePackageInstall = cliModel.multiplePackageInstall
const YarnOrNpm = cliModel.YarnOrNpm

const {
  TypeScriptReactObj,
  createReactApp,
  nodeSassObj,
  propTypesObj,
  reactRouterObj,
  reduxObj,
  reduxThunkObj,
  styledComponentsObj,
  unstatedObj
} = require('../../cliModel/install-commands')

const {
  TypeScriptReactObjYarn,
  createReactAppYarn,
  nodeSassObjYarn,
  propTypesObjYarn,
  reactRouterObjYarn,
  reduxObjYarn,
  reduxThunkObjYarn,
  styledComponentsObjYarn,
  unstatedObjYarn
} = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs A React Application with Custom Packages

*/

module.exports = class CustomPackageInstall {
  prompt () {
    prompt(multiplePackageInstall).then(({ packages }) => {
      console.log(packages)
    })
  }
}

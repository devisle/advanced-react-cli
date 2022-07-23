const inquirer = require('inquirer')

const customCMD = require('../../../customNodeCMD')
const errorLogging = require('../../../customNodeCMD/customError')

// CLI Model
const cliModel = require('../../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { TypeScriptReactObj } = require('../../../cliModel/install-commands')
const { typesReactRouter } = TypeScriptReactObj

const {
  TypeScriptReactObjYarn
} = require('../../../cliModel/install-commands-yarn')
const { typesReactRouterYarn } = TypeScriptReactObjYarn

const prompt = inquirer.createPromptModule()

/*

  Installs @types/react-router @types/react-router-dom

*/

module.exports = class TypesReactRouter {
  installOrUninstall (packageManager) {
    prompt(installOption).then(({ decision }) => {
      if (decision === 'Install') {
        this.install(packageManager)
      } else if (decision === 'Uninstall') {
        this.uninstall(packageManager)
      }
    })
  }

  install (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${typesReactRouter.install}`
          : `${typesReactRouterYarn.install}`
      }`,
      'install',
      'Package(s): @types/react-router @types/react-router-dom have been installed successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${typesReactRouter.uninstall}`
          : `${typesReactRouterYarn.uninstall}`
      }`,
      'uninstall',
      'Package(s): @types/react-router @types/react-router-dom have been uninstalled successfully!'
    )
  }
}

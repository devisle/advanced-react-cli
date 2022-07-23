const inquirer = require('inquirer')

const customCMD = require('../../../customNodeCMD')
const errorLogging = require('../../../customNodeCMD/customError')

// CLI Model
const cliModel = require('../../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { TypeScriptReactObj } = require('../../../cliModel/install-commands')
const { typesReact } = TypeScriptReactObj

const {
  TypeScriptReactObjYarn
} = require('../../../cliModel/install-commands-yarn')
const { typesReactYarn } = TypeScriptReactObjYarn

const prompt = inquirer.createPromptModule()

/*

  Installs @types/react @types/react-dom

*/

module.exports = class TypesReact {
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
          ? `${typesReact.install}`
          : `${typesReactYarn.install}`
      }`,
      'install',
      'Package(s): @types/react @types/react-dom have been installed successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${typesReact.uninstall}`
          : `${typesReactYarn.uninstall}`
      }`,
      'uninstall',
      'Package(s): @types/react @types/react-dom have been uninstalled successfully!'
    )
  }
}

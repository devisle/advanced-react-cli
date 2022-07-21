const inquirer = require('inquirer')

const customCMD = require('../../../customNodeCMD')
const errorLogging = require('../../../customNodeCMD/customError')

// CLI Model
const cliModel = require('../../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { TypeScriptReactObj } = require('../../../cliModel/install-commands')
const { typesJest } = TypeScriptReactObj

const {
  TypeScriptReactObjYarn
} = require('../../../cliModel/install-commands-yarn')
const { typesJestYarn } = TypeScriptReactObjYarn

const prompt = inquirer.createPromptModule()

/*

  Installs @types/nodes

*/

module.exports = class TypesJest {
  installOrUninstall (packageInstaller) {
    prompt(installOption).then(({ decision }) => {
      if (decision === 'Install') {
        this.install(packageInstaller)
      } else if (decision === 'Uninstall') {
        this.uninstall(packageInstaller)
      }
    })
  }

  install (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${typesJest.install}`
          : `${typesJestYarn.install}`
      }`,
      'install',
      `Package: @types/jest has been installed successfully!`
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${typesJest.uninstall}`
          : `${typesJestYarn.uninstall}`
      }`,
      'uninstall',
      `Package: @types/jest has been uninstalled successfully!`
    )
  }
}

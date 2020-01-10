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
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${typesJest.install}`,

          'install',
          `Package: @types/jest has been installed successfully!`
        )
        break

      case 'Yarn':
        customCMD.get(
          `${typesJestYarn.install}`,
          'install',
          `Package: @types/jest has been installed successfully!`
        )
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${typesJest.uninstall}`,
          'uninstall',
          `Package: @types/jest has been uninstalled successfully!`
        )
        break

      case 'Yarn':
        customCMD.get(
          `${typesJestYarn.uninstall}`,
          'uninstall',
          `Package: @types/jest has been uninstalled successfully!`
        )
        break
    }
  }
}

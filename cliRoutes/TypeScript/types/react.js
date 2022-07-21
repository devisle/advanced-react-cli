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
          ? `${typesReact.install}`
          : `${typesReactYarn.install}`
      }`,
      'install',
      'Package(s): @types/react @types/react-dom have been installed successfully!'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${typesReact.uninstall}`
          : `${typesReactYarn.uninstall}`
      }`,
      'uninstall',
      'Package(s): @types/react @types/react-dom have been uninstalled successfully!'
    )
  }
}

const inquirer = require('inquirer')

const customCMD = require('../../../customNodeCMD')
const errorLogging = require('../../../customNodeCMD/customError')

// CLI Model
const cliModel = require('../../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { TypeScriptReactObj } = require('../../../cliModel/install-commands')
const { typesReactRedux } = TypeScriptReactObj

const {
  TypeScriptReactObjYarn
} = require('../../../cliModel/install-commands-yarn')
const { typesReactReduxYarn } = TypeScriptReactObjYarn

const prompt = inquirer.createPromptModule()

/*

  Installs @types/react-redux

*/

module.exports = class TypesReactRedux {
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
          ? `${typesReactRedux.install}`
          : `${typesReactReduxYarn.install}`
      }`,
      'install',
      'Package(s): @types/react-redux have been installed successfully!'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${typesReactRedux.uninstall}`
          : `${typesReactReduxYarn.uninstall}`
      }`,
      'uninstall',
      'Package(s): @types/react-redux have been uninstalled successfully!'
    )
  }
}

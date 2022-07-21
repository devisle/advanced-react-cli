const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// CLI Model
const cliModel = require('../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { TypeScriptReactObj } = require('../../cliModel/install-commands')
const { TypeScript } = TypeScriptReactObj

const {
  TypeScriptReactObjYarn
} = require('../../cliModel/install-commands-yarn')
const { TypeScriptYarn } = TypeScriptReactObjYarn

const prompt = inquirer.createPromptModule()

/*

  Installs TypeScript as a dependency

*/

module.exports = class TypeScriptInstall {
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
          ? `${TypeScript.install}`
          : `${TypeScriptYarn.install}`
      }`,
      'install',
      'Package: typescript has been installed successfully!'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${TypeScript.uninstall}`
          : `${TypeScriptYarn.uninstall}`
      }`,
      'uninstall',
      'Package: typescript has been uninstalled successfully!'
    )
  }
}

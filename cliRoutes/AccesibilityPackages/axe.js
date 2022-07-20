const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel')
const installOption = cliModel.installOption

// CLI Install Commands
const { reactaxeObj } = require('../../cliModel/install-commands')

const { reactaxeObjYarn } = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Axe package

*/

module.exports = class Reactaxe {
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
          ? `${reactaxeObj.install}`
          : `${reactaxeObjYarn.install}`
      }`,
      'Install',
      'Package: react-axe has been installed successfully!'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${reactaxeObj.uninstall}`
          : `${reactaxeObjYarn.uninstall}`
      }`,
      'Uninstall',
      'Package: react-axe has been uninstalled successfully!'
    )
  }
}

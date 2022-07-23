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
          ? `${reactaxeObj.install}`
          : `${reactaxeObjYarn.install}`
      }`,
      'Install',
      'Package: react-axe has been installed successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${reactaxeObj.uninstall}`
          : `${reactaxeObjYarn.uninstall}`
      }`,
      'Uninstall',
      'Package: react-axe has been uninstalled successfully!'
    )
  }
}

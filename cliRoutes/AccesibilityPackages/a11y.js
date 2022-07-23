const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel')
const installOption = cliModel.installOption

// CLI Install Commands
const { reacta11yObj } = require('../../cliModel/install-commands')

const { reacta11yObjYarn } = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls A11y package

*/

module.exports = class Reacta11y {
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
          ? `${reacta11yObj.install}`
          : `${reacta11yObjYarn.install}`
      }`,
      'Install',
      'Package: react-a11y has been installed successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${reacta11yObj.uninstall}`
          : `${reacta11yObjYarn.uninstall}`
      }`,
      'Uninstall',
      'Package: react-a11y has been uninstalled successfully!'
    )
  }
}

const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel')
const installOption = cliModel.installOption

// CLI Install Commands
const { nodeSassObj } = require('../../cliModel/install-commands')

const { nodeSassObjYarn } = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Node-Sass package

*/

module.exports = class NodeSass {
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
          ? `${nodeSassObj.install}`
          : `${nodeSassObjYarn.install}`
      }`,
      'install',
      'Package: node-sass has been installed successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${nodeSassObj.uninstall}`
          : `${nodeSassObjYarn.uninstall}`
      }`,
      'uninstall',
      'Package: node-sass has been uninstalled successfully!'
    )
  }
}

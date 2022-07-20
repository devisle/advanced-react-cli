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
          ? `${nodeSassObj.install}`
          : `${nodeSassObjYarn.install}`
      }`,
      'install',
      'Package: node-sass has been installed successfully!'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${nodeSassObj.uninstall}`
          : `${nodeSassObjYarn.uninstall}`
      }`,
      'uninstall',
      'Package: node-sass has been uninstalled successfully!'
    )
  }
}

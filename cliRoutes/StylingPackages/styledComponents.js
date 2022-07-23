const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel')
const installOption = cliModel.installOption

// CLI Install Commands
const { styledComponentsObj } = require('../../cliModel/install-commands')

const {
  styledComponentsObjYarn
} = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Node-Sass package

*/

module.exports = class StyledComponents {
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
          ? `${styledComponentsObj.install}`
          : `${styledComponentsObjYarn.install}`
      }`,
      'install',
      'Package: styled-components has been installed successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${styledComponentsObj.uninstall}`
          : `${styledComponentsObjYarn.uninstall}`
      }`,
      'uninstall',
      'Package: styled-components has been uninstalled successfully!'
    )
  }
}

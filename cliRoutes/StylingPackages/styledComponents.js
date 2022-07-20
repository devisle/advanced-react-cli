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
          ? `${styledComponentsObj.install}`
          : `${styledComponentsObjYarn.install}`
      }`,
      'install',
      'Package: styled-components has been installed successfully!'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${styledComponentsObj.uninstall}`
          : `${styledComponentsObjYarn.uninstall}`
      }`,
      'uninstall',
      'Package: styled-components has been uninstalled successfully!'
    )
  }
}

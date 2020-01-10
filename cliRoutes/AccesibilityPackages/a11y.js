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
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reacta11yObj.install}`,
          'Install',
          'Package: react-a11y has been installed successfully!'
        )
        break

      case 'Yarn':
        customCMD.get(
          `${reacta11yObjYarn.install}`,
          'Install',
          'Package: react-a11y has been installed successfully!'
        )
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reacta11yObj.uninstall}`,
          'Uninstall',
          'Package: react-a11y has been uninstalled successfully!'
        )
        break

      case 'Yarn':
        customCMD.get(
          `${reacta11yObjYarn.uninstall}`,
          'Uninstall',
          'Package: react-a11y has been uninstalled successfully!'
        )
        break
    }
  }
}

const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { unstatedObj } = require('../../cliModel/install-commands')
const { unstated } = unstatedObj

const { unstatedObjYarn } = require('../../cliModel/install-commands-yarn')
const { unstatedYarn } = unstatedObjYarn

const prompt = inquirer.createPromptModule()

module.exports = class Unstated {
  installOrUninstall (packageInstaller) {
    prompt(installOption).then(({ decision }) => {
      if (decision === 'Install') {
        this.install(packageInstaller)
      } else {
        this.uninstall(packageInstaller)
      }
    })
  }

  install (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${unstated.install}`
          : `${unstatedYarn.install}`
      }`,
      'install',
      'Package: Unstated has been installed successfully! Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated'
    )
  }

  uninstall (packageInstaller) {
    customCMD.get(
      `${
        packageInstaller === 'NPM'
          ? `${unstated.uninstall}`
          : `${unstatedYarn.uninstall}`
      }`,
      'uninstall',
      'Package: Unstated has been uninstalled successfully!'
    )
  }
}

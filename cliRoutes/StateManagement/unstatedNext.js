const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { unstatedObj } = require('../../cliModel/install-commands')
const { unstatedNext } = unstatedObj

const { unstatedObjYarn } = require('../../cliModel/install-commands-yarn')
const { unstatedNextYarn } = unstatedObjYarn

const prompt = inquirer.createPromptModule()

module.exports = class UnstatedNext {
  installOrUninstall (packageManager) {
    prompt(installOption).then(({ decision }) => {
      if (decision === 'Install') {
        this.install(packageManager)
      } else {
        this.uninstall(packageManager)
      }
    })
  }

  install (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${unstatedNext.install}`
          : `${unstatedNextYarn.install}`
      }`,
      'install',
      'Package: Unstated-next has been installed successfully! Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next '
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${unstatedNext.uninstall}`
          : `${unstatedNextYarn.uninstall}`
      }`,
      'uninstall',
      'Package: Unstated-next has been uninstalled successfully!'
    )
  }
}

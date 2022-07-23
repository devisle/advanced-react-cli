const inquirer = require('inquirer')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { reduxThunkObj } = require('../../cliModel/install-commands')

const { reduxThunkObjYarn } = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()
module.exports = class ReduxThunk {
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
          ? `${reduxThunkObj.install}`
          : `${reduxThunkObjYarn.install}`
      }`,
      'install',
      'Package: Redux-Thunk has been installed successfully! Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${reduxThunkObj.uninstall}`
          : `${reduxThunkObjYarn.uninstall}`
      }`,
      'uninstall',
      'Package: Redux-Thunk has been uninstalled successfully!'
    )
  }
}

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
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reduxThunkObj.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'install'
        )
        console.log('Package: Redux-Thunk has been installed successfully!')
        console.log(
          'Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk '
        )
        break

      case 'Yarn':
        customCMD.get(
          `${reduxThunkObjYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'install'
        )
        console.log('Package: Redux-Thunk has been installed successfully!')
        console.log(
          'Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk '
        )
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reduxThunkObj.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'uninstall'
        )
        console.log('Package: Redux-Thunk has been uninstalled successfully!')
        break

      case 'Yarn':
        customCMD.get(
          `${reduxThunkObjYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'uninstall'
        )
        console.log('Package: Redux-Thunk has been uninstalled successfully!')
        break
    }
  }
}

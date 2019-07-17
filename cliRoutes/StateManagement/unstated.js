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
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${unstated.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'install'
        )
        console.log(
          'Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated'
        )
        console.log('Package: Unstated has been installed!')
        break

      case 'Yarn':
        customCMD.get(
          `${unstatedYarn.install}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'install'
        )
        console.log(
          'Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated'
        )
        console.log('Package: Unstated has been installed!')
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${unstated.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'uninstall'
        )
        console.log('Package: Unstated has been uninstalled!')
        break

      case 'Yarn':
        customCMD.get(
          `${unstatedYarn.uninstall}`,
          (err, data, stderr) => {
            err ? console.log(err) : errorLogging(stderr, data)
          },
          'uninstall'
        )
        console.log('Package: Unstated has been uninstalled!')
        break
    }
  }
}

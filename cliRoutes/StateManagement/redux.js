const inquirer = require('inquirer')
const fs = require('fs')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { reduxObj } = require('../../cliModel/install-commands')

const { reduxObjYarn } = require('../../cliModel/install-commands-yarn')

// Importing Redux Boiler plate file
const ReduxBoilerPlate = require('../../cliModel/starter-code/redux')

const prompt = inquirer.createPromptModule()

module.exports = class Redux {
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
    fs.mkdir('./store', err => {
      if (err) throw err
    })
    customCMD.run(`cd store && touch store.js`)
    const writeStream = fs.createWriteStream('./store/store.js')
    writeStream.write(`${ReduxBoilerPlate}`)

    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reduxObj.install}`,
          'install',
          'Packages: redux & react-redux have been installed successfully! Redux Store has been created successfully!'
        )
        break

      case 'Yarn':
        customCMD.get(
          `${reduxObjYarn.install}`,
          'install',
          'Packages: redux & react-redux have been installed successfully! Redux Store has been created successfully!'
        )
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${reduxObj.uninstall}`,
          'install',
          'Packages: redux & react-redux have been uninstalled successfully!'
        )
        break

      case 'Yarn':
        customCMD.get(
          `${reduxObjYarn.uninstall}`,
          'install',
          'Packages: redux & react-redux have been uninstalled successfully!'
        )
        break
    }
  }
}

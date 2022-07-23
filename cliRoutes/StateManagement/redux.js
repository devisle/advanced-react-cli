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
    fs.mkdir('./store', err => {
      if (err) throw err
    })
    customCMD.run(`cd store && touch store.js`)
    const writeStream = fs.createWriteStream('./store/store.js')
    writeStream.write(`${ReduxBoilerPlate}`)

    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${reduxObj.install}`
          : `${reduxObjYarn.install}`
      }`,
      'install',
      'Packages: redux & react-redux have been installed successfully! Redux Store has been created successfully!'
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${reduxObj.uninstall}`
          : `${reduxObjYarn.uninstall}`
      }`,
      'uninstall',
      'Packages: redux & react-redux have been uninstalled successfully!'
    )
  }
}

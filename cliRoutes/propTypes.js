const inquirer = require('inquirer')
const fs = require('fs')

const customCMD = require('../customNodeCMD')
const errorLogging = require('../customNodeCMD/customError')

// Cli Model
const cliModel = require('../cliModel')
const installOption = cliModel.installOption
const YarnOrNpm = cliModel.YarnOrNpm

// CLI Install Commands
const { propTypesObj } = require('../cliModel/install-commands')

const { propTypesObjYarn } = require('../cliModel/install-commands-yarn')

const propTypeBoilerPlate = require('../cliModel/starter-code/propTypes')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Prop-Types package

*/
module.exports = class propTypes {
  installOrUninstall () {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager
      prompt(installOption).then(({ decision }) => {
        if (decision === 'Install') {
          this.install(packageInstaller)
        } else if (decision === 'Uninstall') {
          this.uninstall(packageInstaller)
        }
      })
    })
  }

  install (packageInstaller) {
    fs.mkdir('./propTypes', err => {
      if (err) throw err
    })
    customCMD.run(`cd propTypes && touch propTypes.js`)
    const fileStream = fs.createWriteStream('./propTypes/propTypes.js')
    fileStream.write(`${propTypeBoilerPlate}`)

    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${propTypesObj.install}`,
          'install',
          'Package: prop-types has been installed successfully! PropTypes Folder has been created!'
        )
        break

      case 'Yarn':
        customCMD.get(
          `${propTypesObjYarn.install}`,
          'install',
          'Package: prop-types has been installed successfully! PropTypes Folder has been created!'
        )
        break
    }
  }

  uninstall (packageInstaller) {
    switch (packageInstaller) {
      case 'NPM':
        customCMD.get(
          `${propTypesObj.uninstall}`,
          'uninstall',
          'Package: prop-types has been uninstalled successfully!'
        )
        break

      case 'Yarn':
        customCMD.get(
          `${propTypesObjYarn.uninstall}`,
          'uninstall',
          'Package: prop-types has been uninstalled successfully!'
        )
        break
    }
  }
}

const inquirer = require('inquirer')

// CLI Model
const cliModel = require('../../cliModel')
const accesibilityPackage = cliModel.accesibilityPackages
const YarnOrNpm = cliModel.YarnOrNpm

// Accesibility Packages Dependencies
const A11y = require('./a11y')
const Axe = require('./axe')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Accesibility Packages

*/

module.exports = class AccesibilityPackages {
  prompt () {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      const packageInstaller = packageManager
      prompt(accesibilityPackage).then(({ accesibilityPackage }) => {
        switch (accesibilityPackage) {
          case 'A11y':
            new A11y().installOrUninstall(packageInstaller)
            break

          case 'Axe':
            new Axe().installOrUninstall(packageInstaller)
            break
        }
      })
    })
  }
}

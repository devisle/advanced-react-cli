const inquirer = require('inquirer')

// CLI Model
const cliModel = require('../../cliModel')
const accesibilityPackage = cliModel.accesibilityPackages
const YarnOrNpm = cliModel.YarnOrNpm

// Accesibility Packages Dependencies
const Reacta11y = require('./a11y')
const Reactaxe = require('./axe')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls Accesibility Packages

*/

module.exports = class AccesibilityPackages {
  prompt () {
    prompt(YarnOrNpm).then(({ packageInstaller }) => {
      prompt(accesibilityPackage).then(({ access }) => {
        switch (access) {
          case 'Reacta11y':
            new Reacta11y().installOrUninstall(packageInstaller)
            break

          case 'Reactaxe':
            new Reactaxe().installOrUninstall(packageInstaller)
            break
        }
      })
    })
  }
}

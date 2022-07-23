const inquirer = require('inquirer')

// Cli Model
const cliModel = require('../../cliModel')
const stateOption = cliModel.stateManagement
const unstatedOption = cliModel.unstatedOptions
const YarnOrNpm = cliModel.YarnOrNpm

// State Management Dependencies
const Redux = require('./redux')
const ReduxThunk = require('./reduxThunk')
const Unstated = require('./unstated')
const UnstatedNext = require('./unstatedNext')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls state-management packages

*/

module.exports = class StateManagement {
  prompt () {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      prompt(stateOption).then(({ state }) => {
        if (state === 'Redux') {
          new Redux().installOrUninstall(packageManager)
        } else if (state === 'Unstated') {
          prompt(unstatedOption).then(({ state }) => {
            if (state === 'Unstated') {
              new Unstated().installOrUninstall(packageManager)
            } else if (state === 'Unstated-next') {
              new UnstatedNext().installOrUninstall(packageManager)
            }
          })
        } else if (state === 'Redux-Thunk') {
          new ReduxThunk().installOrUninstall(packageManager)
        }
      })
    })
  }
}

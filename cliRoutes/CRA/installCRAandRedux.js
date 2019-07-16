const cmd = require('node-cmd')
const fs = require('fs')

// Cli Install Commands
const { createReactApp, reduxObj } = require('../../cliModel/install-commands')

const {
  createReactAppYarn,
  reduxObjYarn
} = require('../../cliModel/install-commands-yarn')

// Import Redux Boilerplate
const ReduxBoilerPlate = require('../../cliModel/starter-code/redux')

module.exports = (folderName, packageInstaller) => {
  switch (packageInstaller) {
    case 'NPM':
      fs.appendFile('store.js', ReduxBoilerPlate, err => {
        if (err) throw err
      })
      cmd.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
          reduxObj.install
        } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
        (err, data, stderr) =>
          err ? console.log(err) : console.log(stderr, data)
      )
      break

    case 'Yarn':
      fs.appendFile('store.js', ReduxBoilerPlate, err => {
        if (err) throw err
      })
      cmd.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} . && ${
          reduxObjYarn.install
        } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
        (err, data, stderr) =>
          err ? console.log(err) : console.log(stderr, data)
      )
      break
  }
}

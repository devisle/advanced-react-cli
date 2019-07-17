const fs = require('fs')

const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

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
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
          reduxObj.install
        } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
        (err, data, stderr) =>
          err ? console.log(err) : errorLogging(stderr, data),
        'install'
      )
      break

    case 'Yarn':
      fs.appendFile('store.js', ReduxBoilerPlate, err => {
        if (err) throw err
      })
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} . && ${
          reduxObjYarn.install
        } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
        (err, data, stderr) =>
          err ? console.log(err) : errorLogging(stderr, data),
        'install'
      )
      break
  }
}

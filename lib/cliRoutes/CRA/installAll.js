'use strict'

const fs = require('fs')

const customCMD = require('../../customNodeCMD')

const errorLogging = require('../../customNodeCMD/customError') // Cli Install Commands

const {
  createReactApp,
  reactRouterObj,
  reduxObj
} = require('../../cliModel/install-commands')

const {
  createReactAppYarn,
  reactRouterObjYarn,
  reduxObjYarn
} = require('../../cliModel/install-commands-yarn') // Import Redux Boilerplate

const ReduxBoilerPlate = require('../../cliModel/starter-code/redux')

module.exports = (folderName, packageInstaller) => {
  switch (packageInstaller) {
    case 'NPM':
      fs.appendFile('store.js', ReduxBoilerPlate, err => {
        if (err) throw err
      })
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
          reactRouterObj.install
        } && ${
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
          reactRouterObjYarn.install
        } && ${
          reduxObjYarn.install
        } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
        (err, data, stderr) =>
          err ? console.log(err) : errorLogging(stderr, data),
        'install'
      )
      break
  }
}

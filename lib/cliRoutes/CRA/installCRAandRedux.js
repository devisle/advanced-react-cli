'use strict'

var fs = require('fs')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
  createReactApp = _require.createReactApp,
  reduxObj = _require.reduxObj

var _require2 = require('../../cliModel/install-commands-yarn'),
  createReactAppYarn = _require2.createReactAppYarn,
  reduxObjYarn = _require2.reduxObjYarn // Import Redux Boilerplate

var ReduxBoilerPlate = require('../../cliModel/starter-code/redux')

module.exports = function (folderName, packageInstaller) {
  switch (packageInstaller) {
    case 'NPM':
      fs.appendFile('store.js', ReduxBoilerPlate, function (err) {
        if (err) throw err
      })
      customCMD.get(
        ' mkdir '
          .concat(folderName, ' && cd ')
          .concat(folderName, ' && ')
          .concat(createReactApp, ' . && ')
          .concat(
            reduxObj.install,
            ' && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js '
          ),
        function (err, data, stderr) {
          return err ? console.log(err) : errorLogging(stderr, data)
        },
        'install'
      )
      break

    case 'Yarn':
      fs.appendFile('store.js', ReduxBoilerPlate, function (err) {
        if (err) throw err
      })
      customCMD.get(
        ' mkdir '
          .concat(folderName, ' && cd ')
          .concat(folderName, ' && ')
          .concat(createReactAppYarn, ' . && ')
          .concat(
            reduxObjYarn.install,
            ' && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js '
          ),
        function (err, data, stderr) {
          return err ? console.log(err) : errorLogging(stderr, data)
        },
        'install'
      )
      break
  }
}

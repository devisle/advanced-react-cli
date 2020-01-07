'use strict'

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
  createReactApp = _require.createReactApp

var _require2 = require('../../cliModel/install-commands-yarn'),
  createReactAppYarn = _require2.createReactAppYarn

module.exports = function (folderName, packageInstaller) {
  switch (packageInstaller) {
    case 'NPM':
      customCMD.get(
        ' mkdir '
          .concat(folderName, ' && cd ')
          .concat(folderName, ' && ')
          .concat(createReactApp, ' .'),
        function (err, data, stderr) {
          return err ? console.log(err) : errorLogging(stderr, data)
        },
        'install'
      )
      break

    case 'Yarn':
      customCMD.get(
        ' mkdir '
          .concat(folderName, ' && cd ')
          .concat(folderName, ' && ')
          .concat(createReactAppYarn, ' .'),
        function (err, data, stderr) {
          return err ? console.log(err) : errorLogging(stderr, data)
        },
        'install'
      )
      break
  }
}

'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
)

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var inquirer = require('inquirer')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Model

var cliModel = require('../../cliModel')

var multiplePackageInstall = cliModel.multiplePackageInstall
var YarnOrNpm = cliModel.YarnOrNpm

var _require = require('../../cliModel/install-commands'),
  createReactApp = _require.createReactApp

var _require2 = require('../../cliModel/install-commands-yarn'),
  createReactAppYarn = _require2.createReactAppYarn

var _prompt = inquirer.createPromptModule()
/*

  Installs A React Application with Custom Packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function CustomPackageInstall () {
      ;(0, _classCallCheck2['default'])(this, CustomPackageInstall)
    }

    ;(0, _createClass2['default'])(CustomPackageInstall, [
      {
        key: 'prompt',
        value: function prompt () {
          _prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager

            _prompt(multiplePackageInstall).then(function (_ref2) {
              var packages = _ref2.packages

              if (
                (0, _toConsumableArray2['default'])(packages).includes(
                  'create-react-app'
                )
              ) {
                packages.shift()
                packages.join(' ')

                switch (packageManager) {
                  case 'Yarn':
                    customCMD.get(
                      ''
                        .concat(createReactAppYarn, ' ')
                        .concat(folderName, ' && cd ')
                        .concat(folderName, ' && yarn add ')
                        .concat(packages.join(' '), ' '),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                    break

                  case 'NPM':
                    customCMD.get(
                      ''
                        .concat(createReactApp, ' ')
                        .concat(folderName, ' && cd ')
                        .concat(folderName, ' && npm install --save ')
                        .concat(packages.join(' ')),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                }
              } else {
                switch (packageManager) {
                  case 'Yarn':
                    customCMD.get(
                      'yarn add '.concat(packages.join(' '), ' '),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                    break

                  case 'NPM':
                    customCMD.get(
                      'npm install --save '.concat(packages.join(' ')),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                }
              }
            })
          })
        }
      }
    ])
    return CustomPackageInstall
  })()

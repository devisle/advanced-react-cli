'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var inquirer = require('inquirer')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Model

var cliModel = require('../../cliModel/index')

var installOption = cliModel.installOption // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
  unstatedObj = _require.unstatedObj

var unstated = unstatedObj.unstated

var _require2 = require('../../cliModel/install-commands-yarn'),
  unstatedObjYarn = _require2.unstatedObjYarn

var unstatedYarn = unstatedObjYarn.unstatedYarn
var prompt = inquirer.createPromptModule()

module.exports =
  /*#__PURE__*/
  (function () {
    function Unstated () {
      ;(0, _classCallCheck2['default'])(this, Unstated)
    }

    ;(0, _createClass2['default'])(Unstated, [
      {
        key: 'installOrUninstall',
        value: function installOrUninstall (packageInstaller) {
          var _this = this

          prompt(installOption).then(function (_ref) {
            var decision = _ref.decision

            if (decision === 'Install') {
              _this.install(packageInstaller)
            } else {
              _this.uninstall(packageInstaller)
            }
          })
        }
      },
      {
        key: 'install',
        value: function install (packageInstaller) {
          switch (packageInstaller) {
            case 'NPM':
              customCMD.get(
                ''.concat(unstated.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated'
              )
              console.log('Package: Unstated has been installed successfully!')
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(unstatedYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated'
              )
              console.log('Package: Unstated has been installed successfully!')
              break
          }
        }
      },
      {
        key: 'uninstall',
        value: function uninstall (packageInstaller) {
          switch (packageInstaller) {
            case 'NPM':
              customCMD.get(
                ''.concat(unstated.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: Unstated has been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(unstatedYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: Unstated has been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])
    return Unstated
  })()

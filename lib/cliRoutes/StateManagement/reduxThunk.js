'use strict'

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

var inquirer = require('inquirer')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Model

var cliModel = require('../../cliModel/index')

var installOption = cliModel.installOption // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
  reduxThunkObj = _require.reduxThunkObj

var _require2 = require('../../cliModel/install-commands-yarn'),
  reduxThunkObjYarn = _require2.reduxThunkObjYarn

var prompt = inquirer.createPromptModule()

module.exports =
  /*#__PURE__*/
  (function () {
    function ReduxThunk () {
      _classCallCheck(this, ReduxThunk)
    }

    _createClass(ReduxThunk, [
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
                ''.concat(reduxThunkObj.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Package: Redux-Thunk has been installed successfully!'
              )
              console.log(
                'Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk '
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(reduxThunkObjYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Package: Redux-Thunk has been installed successfully!'
              )
              console.log(
                'Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk '
              )
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
                ''.concat(reduxThunkObj.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: Redux-Thunk has been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(reduxThunkObjYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: Redux-Thunk has been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])

    return ReduxThunk
  })()

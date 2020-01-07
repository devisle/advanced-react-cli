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

var customCMD = require('../customNodeCMD')

var errorLogging = require('../customNodeCMD/customError') // Cli Model

var cliModel = require('../cliModel')

var installOption = cliModel.installOption
var YarnOrNpm = cliModel.YarnOrNpm // CLI Install Commands

var _require = require('../cliModel/install-commands'),
  reactRouterObj = _require.reactRouterObj

var _require2 = require('../cliModel/install-commands-yarn'),
  reactRouterObjYarn = _require2.reactRouterObjYarn

var prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls React-Router package

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function ReactRouter () {
      _classCallCheck(this, ReactRouter)
    }

    _createClass(ReactRouter, [
      {
        key: 'installOrUninstall',
        value: function installOrUninstall () {
          var _this = this

          prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager
            var packageInstaller = packageManager
            prompt(installOption).then(function (_ref2) {
              var decision = _ref2.decision

              if (decision === 'Install') {
                _this.install(packageInstaller)
              } else if (decision === 'Uninstall') {
                _this.uninstall(packageInstaller)
              }
            })
          })
        }
      },
      {
        key: 'install',
        value: function install (packageInstaller) {
          switch (packageInstaller) {
            case 'NPM':
              customCMD.get(
                ''.concat(reactRouterObj.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Packages: react-router & react-router-dom have been installed successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(reactRouterObjYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Packages: react-router & react-router-dom have been installed successfully!'
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
                ''.concat(reactRouterObj.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Packages: react-router & react-router-dom have been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(reactRouterObjYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Packages: react-router & react-router-dom have been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])

    return ReactRouter
  })()

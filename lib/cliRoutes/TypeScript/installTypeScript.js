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

var errorLogging = require('../../customNodeCMD/customError') // CLI Model

var cliModel = require('../../cliModel/index')

var installOption = cliModel.installOption // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
  TypeScriptReactObj = _require.TypeScriptReactObj

var TypeScript = TypeScriptReactObj.TypeScript

var _require2 = require('../../cliModel/install-commands-yarn'),
  TypeScriptReactObjYarn = _require2.TypeScriptReactObjYarn

var TypeScriptYarn = TypeScriptReactObjYarn.TypeScriptYarn
var prompt = inquirer.createPromptModule()
/*

  Installs TypeScript as a dependency

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function TypeScriptInstall () {
      _classCallCheck(this, TypeScriptInstall)
    }

    _createClass(TypeScriptInstall, [
      {
        key: 'installOrUninstall',
        value: function installOrUninstall (packageInstaller) {
          var _this = this

          prompt(installOption).then(function (_ref) {
            var decision = _ref.decision

            if (decision === 'Install') {
              _this.install(packageInstaller)
            } else if (decision === 'Uninstall') {
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
                ''.concat(TypeScript.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(TypeScriptYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
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
                ''.concat(TypeScript.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(TypeScriptYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              break
          }
        }
      }
    ])

    return TypeScriptInstall
  })()

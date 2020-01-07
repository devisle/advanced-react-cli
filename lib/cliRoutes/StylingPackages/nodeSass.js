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

var cliModel = require('../../cliModel')

var installOption = cliModel.installOption // CLI Install Commands

var _require = require('../../cliModel/install-commands'),
  nodeSassObj = _require.nodeSassObj

var _require2 = require('../../cliModel/install-commands-yarn'),
  nodeSassObjYarn = _require2.nodeSassObjYarn

var prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls Node-Sass package

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function NodeSass () {
      _classCallCheck(this, NodeSass)
    }

    _createClass(NodeSass, [
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
                ''.concat(nodeSassObj.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log('Package: node-sass has been installed successfully!')
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(nodeSassObjYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log('Package: node-sass has been installed successfully!')
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
                ''.concat(nodeSassObj.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: node-sass has been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(nodeSassObjYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: node-sass has been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])

    return NodeSass
  })()

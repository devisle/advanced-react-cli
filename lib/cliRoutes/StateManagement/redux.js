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

var fs = require('fs')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Model

var cliModel = require('../../cliModel/index')

var installOption = cliModel.installOption // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
  reduxObj = _require.reduxObj

var _require2 = require('../../cliModel/install-commands-yarn'),
  reduxObjYarn = _require2.reduxObjYarn // Importing Redux Boiler plate file

var ReduxBoilerPlate = require('../../cliModel/starter-code/redux')

var prompt = inquirer.createPromptModule()

module.exports =
  /*#__PURE__*/
  (function () {
    function Redux () {
      _classCallCheck(this, Redux)
    }

    _createClass(Redux, [
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
          fs.mkdir('./store', function (err) {
            if (err) throw err
          })
          customCMD.run('cd store && touch store.js')
          var writeStream = fs.createWriteStream('./store/store.js')
          writeStream.write(''.concat(ReduxBoilerPlate))

          switch (packageInstaller) {
            case 'NPM':
              customCMD.get(
                ''.concat(reduxObj.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Packages: redux & react-redux have been installed successfully!'
              )
              console.log('Redux Store has been created successfully!')
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(reduxObjYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Packages: redux & react-redux have been installed successfully!'
              )
              console.log('Redux Store has been created successfully!')
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
                ''.concat(reduxObj.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Packages: redux & react-redux have been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(reduxObjYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Packages: redux & react-redux have been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])

    return Redux
  })()

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

var customCMD = require('../customNodeCMD')

var errorLogging = require('../customNodeCMD/customError') // Cli Model

var cliModel = require('../cliModel')

var installOption = cliModel.installOption
var YarnOrNpm = cliModel.YarnOrNpm // CLI Install Commands

var _require = require('../cliModel/install-commands'),
  propTypesObj = _require.propTypesObj

var _require2 = require('../cliModel/install-commands-yarn'),
  propTypesObjYarn = _require2.propTypesObjYarn

var propTypeBoilerPlate = require('../cliModel/starter-code/propTypes')

var prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls Prop-Types package

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function propTypes () {
      _classCallCheck(this, propTypes)
    }

    _createClass(propTypes, [
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
          fs.mkdir('./propTypes', function (err) {
            if (err) throw err
          })
          customCMD.run('cd propTypes && touch propTypes.js')
          var fileStream = fs.createWriteStream('./propTypes/propTypes.js')
          fileStream.write(''.concat(propTypeBoilerPlate))

          switch (packageInstaller) {
            case 'NPM':
              customCMD.get(
                ''.concat(propTypesObj.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Package: prop-types has been installed successfully!'
              )
              console.log('PropTypes Folder has been created!')
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(propTypesObjYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Package: prop-types has been installed successfully!'
              )
              console.log('PropTypes Folder has been created!')
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
                ''.concat(propTypesObj.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: prop-types has been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(propTypesObjYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: prop-types has been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])

    return propTypes
  })()

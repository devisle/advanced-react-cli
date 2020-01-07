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

var cliModel = require('../../cliModel')

var installOption = cliModel.installOption // CLI Install Commands

var _require = require('../../cliModel/install-commands'),
  styledComponentsObj = _require.styledComponentsObj

var _require2 = require('../../cliModel/install-commands-yarn'),
  styledComponentsObjYarn = _require2.styledComponentsObjYarn

var prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls Node-Sass package

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function StyledComponents () {
      ;(0, _classCallCheck2['default'])(this, StyledComponents)
    }

    ;(0, _createClass2['default'])(StyledComponents, [
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
                ''.concat(styledComponentsObj.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Package: styled-components has been installed successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(styledComponentsObjYarn.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              console.log(
                'Package: styled-components has been installed successfully!'
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
                ''.concat(styledComponentsObj.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: styled-components has been uninstalled successfully!'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(styledComponentsObjYarn.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              console.log(
                'Package: styled-components has been uninstalled successfully!'
              )
              break
          }
        }
      }
    ])
    return StyledComponents
  })()

'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var inquirer = require('inquirer')

var customCMD = require('../../../customNodeCMD')

var errorLogging = require('../../../customNodeCMD/customError') // CLI Model

var cliModel = require('../../../cliModel/index')

var installOption = cliModel.installOption // Cli Install Commands

var _require = require('../../../cliModel/install-commands'),
  TypeScriptReactObj = _require.TypeScriptReactObj

var typesReactRouter = TypeScriptReactObj.typesReactRouter

var _require2 = require('../../../cliModel/install-commands-yarn'),
  TypeScriptReactObjYarn = _require2.TypeScriptReactObjYarn

var typesReactRouterYarn = TypeScriptReactObjYarn.typesReactRouterYarn
var prompt = inquirer.createPromptModule()
/*

  Installs @types/react-router @types/react-router-dom

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function TypesReactRouter () {
      ;(0, _classCallCheck2['default'])(this, TypesReactRouter)
    }

    ;(0, _createClass2['default'])(TypesReactRouter, [
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
                ''.concat(typesReactRouter.install),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'install'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(typesReactRouterYarn.install),
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
                ''.concat(typesReactRouter.uninstall),
                function (err, data, stderr) {
                  err ? console.log(err) : errorLogging(stderr, data)
                },
                'uninstall'
              )
              break

            case 'Yarn':
              customCMD.get(
                ''.concat(typesReactRouterYarn.uninstall),
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
    return TypesReactRouter
  })()

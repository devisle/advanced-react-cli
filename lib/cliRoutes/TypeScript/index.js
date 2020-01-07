'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var inquirer = require('inquirer') // CLI Model

var cliModel = require('../../cliModel') // const addPackage = cliModel.addPackage

var TypeScriptPackages = cliModel.typescriptPackages
var YarnOrNpm = cliModel.YarnOrNpm // TypeScript & @types imports

var CustomInstall = require('./customInstall')

var TypeScriptInstall = require('./installTypeScript')

var TypesNode = require('./types/node')

var TypesReact = require('./types/react')

var TypesReactRouter = require('./types/reactRouter')

var TypesReactRedux = require('./types/reactRedux')

var TypesJest = require('./types/jest')

var _prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls TypeScript & @types packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function TypeScript () {
      ;(0, _classCallCheck2['default'])(this, TypeScript)
    }

    ;(0, _createClass2['default'])(TypeScript, [
      {
        key: 'prompt',
        value: function prompt () {
          _prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager
            var packageInstaller = packageManager

            _prompt(TypeScriptPackages).then(function (_ref2) {
              var typescriptPackage = _ref2.typescriptPackage

              switch (typescriptPackage) {
                case 'CustomInstall':
                  new CustomInstall().prompt(packageInstaller)
                  break

                case 'TypeScript':
                  new TypeScriptInstall().installOrUninstall(packageInstaller)
                  break

                case '@types/node':
                  new TypesNode().installOrUninstall(packageInstaller)
                  break

                case '@types/react @types/react-dom':
                  new TypesReact().installOrUninstall(packageInstaller)
                  break

                case '@types/react-router @types/react-router-dom':
                  new TypesReactRouter().installOrUninstall(packageInstaller)
                  break

                case '@types/react-redux':
                  new TypesReactRedux().installOrUninstall(packageInstaller)
                  break

                case '@types/jest':
                  new TypesJest().installOrUninstall(packageInstaller)
                  break
              }
            })
          })
        }
      }
    ])
    return TypeScript
  })()

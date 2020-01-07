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

var TypesAsync = require('./types/async')

var TypesCors = require('./types/cors')

var _prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls TypeScript & @types packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function TypeScript () {
      _classCallCheck(this, TypeScript)
    }

    _createClass(TypeScript, [
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

                case '@types/async':
                  new TypesAsync().installOrUninstall(packageInstaller)
                  break

                case '@types/cors':
                  new TypesCors().installOrUninstall(packageInstaller)
                  break
              }
            })
          })
        }
      }
    ])

    return TypeScript
  })()

'use strict'

function ownKeys (object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })
    keys.push.apply(keys, symbols)
  }
  return keys
}

function _objectSpread (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key])
      })
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        )
      })
    }
  }
  return target
}

function _defineProperty (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

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

var inquirer = require('inquirer') // Cli Model

var cliModel = require('../../cliModel')

var addPackage = cliModel.addPackage
var installFolder = cliModel.installFolder
var YarnOrNpm = cliModel.YarnOrNpm //Import CRA Install Dependencies

var installAll = require('./installAll')

var installCRA = require('./installCRA')

var installCRAandReactRouter = require('./installCRAandReactRouter')

var installCRAandRedux = require('./installCRAandRedux')

var prompt = inquirer.createPromptModule()
/*

  Installs a Boilerplate react application using Create-react-app + optional packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function CRA () {
      _classCallCheck(this, CRA)
    }

    _createClass(CRA, [
      {
        key: 'CRAPrompt',
        value: function CRAPrompt () {
          prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager
            var packageInstaller = packageManager
            prompt(
              _objectSpread({}, installFolder[0], {
                message: 'Please give project name, example (my-app)'
              })
            ).then(function (_ref2) {
              var folderName = _ref2.folderName

              if (folderName.length > 1) {
                /*
              Prompts to install React Router
            */
                prompt(
                  _objectSpread({}, addPackage[0], {
                    message: 'Would you like to add React-Router? (Y/N)'
                  })
                ).then(function (_ref3) {
                  var packageAdd = _ref3.packageAdd

                  if (['y', 'Y', 'yes', 'Yes', ''].includes(packageAdd)) {
                    /*
                  Prompts to install Redux
                */
                    prompt(
                      _objectSpread({}, addPackage[0], {
                        message: 'Would you like to add Redux? (Y/N)'
                      })
                    ).then(function (_ref4) {
                      var packageAdd = _ref4.packageAdd

                      if (['y', 'Y', 'yes', 'Yes', ''].includes(packageAdd)) {
                        installAll(folderName, packageInstaller)
                      } else if (['n', 'N', 'No', 'no'].includes(packageAdd)) {
                        installCRAandReactRouter(folderName, packageInstaller)
                      }
                    })
                    /*
                  If 'n' for React Router, prompts to install Redux
                */
                  } else if (['n', 'N', 'No', 'no'].includes(packageAdd)) {
                    /*
                  Prompts to Install Redux
                */
                    prompt(
                      _objectSpread({}, addPackage[0], {
                        message: 'Would you like to add Redux? (Y/N)'
                      })
                    ).then(function (_ref5) {
                      var packageAdd = _ref5.packageAdd

                      if (['y', 'Y', 'yes', 'Yes', ''].includes(packageAdd)) {
                        installCRAandRedux(folderName, packageInstaller)
                      } else if (['n', 'N', 'No', 'no'].includes(packageAdd)) {
                        installCRA(folderName, packageInstaller)
                      }
                    })
                  }
                })
              } else {
                console.log(
                  "You must specify the installation directory! (Enter a folder name, e.g. 'my-app', Or Enter '.' to install in current directory) "
                )
              }
            })
          })
        }
      }
    ])

    return CRA
  })()

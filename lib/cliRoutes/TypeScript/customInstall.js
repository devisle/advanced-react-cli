'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

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
        ;(0, _defineProperty2['default'])(target, key, source[key])
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

var inquirer = require('inquirer')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // CLI Model

var cliModel = require('../../cliModel')

var addPackage = cliModel.addPackage

var _prompt = inquirer.createPromptModule()
/*

  Gives user to custom install TypeScript + @types packages.

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function CustomInstall () {
      ;(0, _classCallCheck2['default'])(this, CustomInstall)
    }

    ;(0, _createClass2['default'])(CustomInstall, [
      {
        key: 'prompt',
        value: function prompt (packageInstaller) {
          var addTypeScriptNPM,
            addTypesNodeNPM,
            addTypesReactNPM,
            addTypesReactRouterNPM,
            addTypesReactReduxNPM,
            addTypesJestNPM,
            addTypeScriptYarn,
            addTypesNodeYarn,
            addTypesReactYarn,
            addTypesReactRouterYarn,
            addTypesReactReduxYarn,
            addTypesJestYarn
          /*
          Prompts to install TypeScript
        */

          _prompt(
            _objectSpread({}, addPackage[0], {
              message: 'Would you like to install TypeScript? (Y/N)'
            })
          ).then(function (_ref) {
            var packageAdd = _ref.packageAdd

            if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
              addTypeScriptNPM = 'typescript'
              addTypeScriptYarn = 'typescript'
            } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
              addTypeScriptNPM = ''
              addTypeScriptYarn = ''
            }
            /*
          Prompts to install @types/node
        */

            _prompt(
              _objectSpread({}, addPackage[0], {
                message: 'Would you like to add @types/node? (Y/N)'
              })
            ).then(function (_ref2) {
              var packageAdd = _ref2.packageAdd

              if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                addTypesNodeNPM = 'typescript'
                addTypesNodeYarn = '@types/node'
              } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
                addTypesNodeNPM = ''
                addTypesNodeYarn = ''
              }
              /*
            Prompts to install @types/react @types/react-dom
          */

              _prompt(
                _objectSpread({}, addPackage[0], {
                  message: 'Would you like to add @types/react? (Y/N)'
                })
              ).then(function (_ref3) {
                var packageAdd = _ref3.packageAdd

                if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                  addTypesReactNPM = '@types/react @types/react-dom'
                  addTypesReactYarn = '@types/react @types/react-dom'
                } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
                  addTypesReactNPM = ''
                  addTypesReactYarn = ''
                }
                /*
              Prompts to install @types/react-router @types/react-router-dom
            */

                _prompt(
                  _objectSpread({}, addPackage[0], {
                    message: 'Would you like to add @types/react-router? (Y/N)'
                  })
                ).then(function (_ref4) {
                  var packageAdd = _ref4.packageAdd

                  if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                    addTypesReactRouterNPM =
                      '@types/react-router @types/react-router-dom'
                    addTypesReactRouterYarn =
                      '@types/react-router @types/react-router-dom'
                  } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
                    addTypesReactRouterNPM = ''
                    addTypesReactRouterYarn = ''
                  }
                  /*
                Prompts to install @types/react-redux
              */

                  _prompt(
                    _objectSpread({}, addPackage[0], {
                      message: 'Would you like to add @types/react-redux? (Y/N)'
                    })
                  ).then(function (_ref5) {
                    var packageAdd = _ref5.packageAdd

                    if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                      addTypesReactReduxNPM = '@types/react-redux'
                      addTypesReactReduxYarn = '@types/react-redux'
                    } else if (['n', 'no'].includes(packageAdd.toLowerCase())) {
                      addTypesReactReduxNPM = ''
                      addTypesReactReduxYarn = ''
                    }
                    /*
                  Prompts to install @types/jest
                */

                    _prompt(
                      _objectSpread({}, addPackage[0], {
                        message: 'Would you like to add @types/jest? (Y/N)'
                      })
                    ).then(function (_ref6) {
                      var packageAdd = _ref6.packageAdd

                      if (['y', 'yes'].includes(packageAdd.toLowerCase())) {
                        addTypesJestNPM = '@types/jest'
                        addTypesJestYarn = '@types/jest'
                      } else if (
                        ['n', 'no'].includes(packageAdd.toLowerCase())
                      ) {
                        addTypesJestNPM = ''
                        addTypesJestYarn = ''
                      }

                      switch (packageInstaller) {
                        case 'NPM':
                          customCMD.get(
                            ' npm install --save '
                              .concat(addTypeScriptNPM, ' ')
                              .concat(addTypesNodeNPM, ' ')
                              .concat(addTypesReactNPM, ' ')
                              .concat(addTypesReactRouterNPM, ' ')
                              .concat(addTypesReactReduxNPM, ' ')
                              .concat(addTypesJestNPM),
                            function (err, data, stderr) {
                              err
                                ? console.log(err)
                                : errorLogging(stderr, data)
                            },
                            'install'
                          )
                          break

                        case 'Yarn':
                          customCMD.get(
                            'yarn add '
                              .concat(addTypeScriptYarn, ' ')
                              .concat(addTypesNodeYarn, ' ')
                              .concat(addTypesReactYarn, ' ')
                              .concat(addTypesReactRouterYarn, ' ')
                              .concat(addTypesReactReduxYarn, ' ')
                              .concat(addTypesJestYarn),
                            function (err, data, stderr) {
                              err
                                ? console.log(err)
                                : errorLogging(stderr, data)
                            },
                            'install'
                          )
                      }
                    })
                  })
                })
              })
            })
          })
        }
      }
    ])
    return CustomInstall
  })()

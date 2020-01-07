'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

var inquirer = require('inquirer') // Cli Model

var cliModel = require('../../cliModel')

var stateOption = cliModel.stateManagement
var unstatedOption = cliModel.unstatedOptions
var YarnOrNpm = cliModel.YarnOrNpm // State Management Dependencies

var Redux = require('./redux')

var ReduxThunk = require('./reduxThunk')

var Unstated = require('./unstated')

var UnstatedNext = require('./unstatedNext')

var _prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls state-management packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function StateManagement () {
      ;(0, _classCallCheck2['default'])(this, StateManagement)
    }

    ;(0, _createClass2['default'])(StateManagement, [
      {
        key: 'prompt',
        value: function prompt () {
          _prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager
            var packageInstaller = packageManager

            _prompt(stateOption).then(function (_ref2) {
              var state = _ref2.state

              if (state === 'Redux') {
                new Redux().installOrUninstall(packageInstaller)
              } else if (state === 'Unstated') {
                _prompt(unstatedOption).then(function (_ref3) {
                  var state = _ref3.state

                  if (state === 'Unstated') {
                    new Unstated().installOrUninstall(packageInstaller)
                  } else if (state === 'Unstated-next') {
                    new UnstatedNext().installOrUninstall(packageInstaller)
                  }
                })
              } else if (state === 'Redux-Thunk') {
                new ReduxThunk().installOrUninstall(packageInstaller)
              }
            })
          })
        }
      }
    ])
    return StateManagement
  })()

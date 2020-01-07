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
      _classCallCheck(this, StateManagement)
    }

    _createClass(StateManagement, [
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

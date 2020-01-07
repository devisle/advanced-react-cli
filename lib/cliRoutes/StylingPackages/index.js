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

var cliModel = require('../../cliModel')

var stylingPackage = cliModel.stylingPackages
var YarnOrNpm = cliModel.YarnOrNpm // Styling Packages Dependencies

var StyledComponents = require('./styledComponents')

var NodeSass = require('./nodeSass')

var _prompt = inquirer.createPromptModule()
/*

  Installs/Uninstalls Styling Packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function StylingPackages () {
      _classCallCheck(this, StylingPackages)
    }

    _createClass(StylingPackages, [
      {
        key: 'prompt',
        value: function prompt () {
          _prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager
            var packageInstaller = packageManager

            _prompt(stylingPackage).then(function (_ref2) {
              var stylingTool = _ref2.stylingTool

              switch (stylingTool) {
                case 'StyledComponents':
                  new StyledComponents().installOrUninstall(packageInstaller)
                  break

                case 'NodeSass':
                  new NodeSass().installOrUninstall(packageInstaller)
                  break
              }
            })
          })
        }
      }
    ])

    return StylingPackages
  })()

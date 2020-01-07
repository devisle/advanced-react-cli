'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
)

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
)

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
      ;(0, _classCallCheck2['default'])(this, StylingPackages)
    }

    ;(0, _createClass2['default'])(StylingPackages, [
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

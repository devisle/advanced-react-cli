"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer');

var customCMD = require('../../customNodeCMD');

var errorLogging = require('../../customNodeCMD/customError'); // Cli Model


var cliModel = require('../../cliModel');

var installOption = cliModel.installOption; // CLI Install Commands

var _require = require('../../cliModel/install-commands'),
    reacta11yObj = _require.reacta11yObj;

var _require2 = require('../../cliModel/install-commands-yarn'),
    reacta11yObjYarn = _require2.reacta11yObjYarn;

var prompt = inquirer.createPromptModule();
/*

  Installs/Uninstalls A11y package

*/

module.exports =
/*#__PURE__*/
function () {
  function Reacta11y() {
    (0, _classCallCheck2["default"])(this, Reacta11y);
  }

  (0, _createClass2["default"])(Reacta11y, [{
    key: "installOrUninstall",
    value: function installOrUninstall(packageInstaller) {
      var _this = this;

      prompt(installOption).then(function (_ref) {
        var decision = _ref.decision;

        if (decision === 'Install') {
          _this.install(packageInstaller);
        } else if (decision === 'Uninstall') {
          _this.uninstall(packageInstaller);
        }
      });
    }
  }, {
    key: "install",
    value: function install(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reacta11yObj.install), 'Install', 'Package: react-a11y has been installed successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reacta11yObjYarn.install), 'Install', 'Package: react-a11y has been installed successfully!');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reacta11yObj.uninstall), 'Uninstall', 'Package: react-a11y has been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reacta11yObjYarn.uninstall), 'Uninstall', 'Package: react-a11y has been uninstalled successfully!');
          break;
      }
    }
  }]);
  return Reacta11y;
}();
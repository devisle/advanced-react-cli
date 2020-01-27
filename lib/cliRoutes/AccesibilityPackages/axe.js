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
    reactaxeObj = _require.reactaxeObj;

var _require2 = require('../../cliModel/install-commands-yarn'),
    reactaxeObjYarn = _require2.reactaxeObjYarn;

var prompt = inquirer.createPromptModule();
/*

  Installs/Uninstalls Axe package

*/

module.exports =
/*#__PURE__*/
function () {
  function Reactaxe() {
    (0, _classCallCheck2["default"])(this, Reactaxe);
  }

  (0, _createClass2["default"])(Reactaxe, [{
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
          customCMD.get("".concat(reactaxeObj.install), 'Install', 'Package: react-axe has been installed successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reactaxeObjYarn.install), 'Install', 'Package: react-axe has been installed successfully!');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reactaxeObj.uninstall), 'uninstall', 'Package: react-axe has been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reactaxeObjYarn.uninstall), 'uninstall', 'Package: react-axe has been uninstalled successfully!');
          break;
      }
    }
  }]);
  return Reactaxe;
}();
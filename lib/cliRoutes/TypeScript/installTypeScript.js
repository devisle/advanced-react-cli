"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer');

var customCMD = require('../../customNodeCMD');

var errorLogging = require('../../customNodeCMD/customError'); // CLI Model


var cliModel = require('../../cliModel/index');

var installOption = cliModel.installOption; // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
    TypeScriptReactObj = _require.TypeScriptReactObj;

var TypeScript = TypeScriptReactObj.TypeScript;

var _require2 = require('../../cliModel/install-commands-yarn'),
    TypeScriptReactObjYarn = _require2.TypeScriptReactObjYarn;

var TypeScriptYarn = TypeScriptReactObjYarn.TypeScriptYarn;
var prompt = inquirer.createPromptModule();
/*

  Installs TypeScript as a dependency

*/

module.exports =
/*#__PURE__*/
function () {
  function TypeScriptInstall() {
    (0, _classCallCheck2["default"])(this, TypeScriptInstall);
  }

  (0, _createClass2["default"])(TypeScriptInstall, [{
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
          customCMD.get("".concat(TypeScript.install), 'install', 'Package: typescript has been installed successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(TypeScriptYarn.install), 'install', 'Package: typescript has been installed successfully!');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(TypeScript.uninstall), 'uninstall', 'Package: typescript has been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(TypeScriptYarn.uninstall), 'uninstall', 'Package: typescript has been uninstalled successfully!');
          break;
      }
    }
  }]);
  return TypeScriptInstall;
}();
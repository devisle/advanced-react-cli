"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer');

var customCMD = require('../../customNodeCMD');

var errorLogging = require('../../customNodeCMD/customError'); // Cli Model


var cliModel = require('../../cliModel/index');

var installOption = cliModel.installOption; // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
    reduxThunkObj = _require.reduxThunkObj;

var _require2 = require('../../cliModel/install-commands-yarn'),
    reduxThunkObjYarn = _require2.reduxThunkObjYarn;

var prompt = inquirer.createPromptModule();

module.exports =
/*#__PURE__*/
function () {
  function ReduxThunk() {
    (0, _classCallCheck2["default"])(this, ReduxThunk);
  }

  (0, _createClass2["default"])(ReduxThunk, [{
    key: "installOrUninstall",
    value: function installOrUninstall(packageInstaller) {
      var _this = this;

      prompt(installOption).then(function (_ref) {
        var decision = _ref.decision;

        if (decision === 'Install') {
          _this.install(packageInstaller);
        } else {
          _this.uninstall(packageInstaller);
        }
      });
    }
  }, {
    key: "install",
    value: function install(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reduxThunkObj.install), 'install', 'Package: Redux-Thunk has been installed successfully! Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk');
          console.log();
          break;

        case 'Yarn':
          customCMD.get("".concat(reduxThunkObjYarn.install), 'install', 'Package: Redux-Thunk has been installed successfully! Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reduxThunkObj.uninstall), 'uninstall', 'Package: Redux-Thunk has been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reduxThunkObjYarn.uninstall), 'uninstall', 'Package: Redux-Thunk has been uninstalled successfully!');
          break;
      }
    }
  }]);
  return ReduxThunk;
}();
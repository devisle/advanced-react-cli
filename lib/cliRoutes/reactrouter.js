"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer');

var customCMD = require('../customNodeCMD');

var errorLogging = require('../customNodeCMD/customError'); // Cli Model


var cliModel = require('../cliModel');

var installOption = cliModel.installOption;
var YarnOrNpm = cliModel.YarnOrNpm; // CLI Install Commands

var _require = require('../cliModel/install-commands'),
    reactRouterObj = _require.reactRouterObj;

var _require2 = require('../cliModel/install-commands-yarn'),
    reactRouterObjYarn = _require2.reactRouterObjYarn;

var prompt = inquirer.createPromptModule();
/*

  Installs/Uninstalls React-Router package

*/

module.exports =
/*#__PURE__*/
function () {
  function ReactRouter() {
    (0, _classCallCheck2["default"])(this, ReactRouter);
  }

  (0, _createClass2["default"])(ReactRouter, [{
    key: "installOrUninstall",
    value: function installOrUninstall() {
      var _this = this;

      prompt(YarnOrNpm).then(function (_ref) {
        var packageManager = _ref.packageManager;
        var packageInstaller = packageManager;
        prompt(installOption).then(function (_ref2) {
          var decision = _ref2.decision;

          if (decision === 'Install') {
            _this.install(packageInstaller);
          } else if (decision === 'Uninstall') {
            _this.uninstall(packageInstaller);
          }
        });
      });
    }
  }, {
    key: "install",
    value: function install(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reactRouterObj.install), 'install', 'Packages: react-router & react-router-dom have been installed successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reactRouterObjYarn.install), 'install', 'Packages: react-router & react-router-dom have been installed successfully!');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reactRouterObj.uninstall), 'uninstall', 'Packages: react-router & react-router-dom have been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reactRouterObjYarn.uninstall), 'uninstall', 'Packages: react-router & react-router-dom have been uninstalled successfully!');
          break;
      }
    }
  }]);
  return ReactRouter;
}();
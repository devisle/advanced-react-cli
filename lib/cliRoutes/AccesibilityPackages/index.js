"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer'); // CLI Model


var cliModel = require('../../cliModel');

var accesibilityPackage = cliModel.accesibilityPackages;
var YarnOrNpm = cliModel.YarnOrNpm; // Accesibility Packages Dependencies

var Reacta11y = require('./a11y');

var Reactaxe = require('./axe');

var _prompt = inquirer.createPromptModule();
/*

  Installs/Uninstalls Accesibility Packages

*/


module.exports =
/*#__PURE__*/
function () {
  function AccesibilityPackages() {
    (0, _classCallCheck2["default"])(this, AccesibilityPackages);
  }

  (0, _createClass2["default"])(AccesibilityPackages, [{
    key: "prompt",
    value: function prompt() {
      _prompt(YarnOrNpm).then(function (_ref) {
        var packageManager = _ref.packageManager;
        var packageInstaller = packageManager;

        _prompt(accesibilityPackage).then(function (_ref2) {
          var access = _ref2.access;

          switch (access) {
            case 'Reacta11y':
              new Reacta11y().installOrUninstall(packageInstaller);
              break;

            case 'Reactaxe':
              new Reactaxe().installOrUninstall(packageInstaller);
              break;
          }
        });
      });
    }
  }]);
  return AccesibilityPackages;
}();
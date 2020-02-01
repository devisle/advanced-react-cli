"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer');

var fs = require('fs');

var customCMD = require('../customNodeCMD');

var errorLogging = require('../customNodeCMD/customError'); // Cli Model


var cliModel = require('../cliModel');

var installOption = cliModel.installOption;
var YarnOrNpm = cliModel.YarnOrNpm; // CLI Install Commands

var _require = require('../cliModel/install-commands'),
    propTypesObj = _require.propTypesObj;

var _require2 = require('../cliModel/install-commands-yarn'),
    propTypesObjYarn = _require2.propTypesObjYarn;

var propTypeBoilerPlate = require('../cliModel/starter-code/propTypes');

var prompt = inquirer.createPromptModule();
/*

  Installs/Uninstalls Prop-Types package

*/

module.exports =
/*#__PURE__*/
function () {
  function propTypes() {
    (0, _classCallCheck2["default"])(this, propTypes);
  }

  (0, _createClass2["default"])(propTypes, [{
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
      fs.mkdir('./propTypes', function (err) {
        if (err) throw err;
      });
      customCMD.run("cd propTypes && touch propTypes.js");
      var fileStream = fs.createWriteStream('./propTypes/propTypes.js');
      fileStream.write("".concat(propTypeBoilerPlate));

      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(propTypesObj.install), 'install', 'Package: prop-types has been installed successfully! PropTypes Folder has been created!');
          break;

        case 'Yarn':
          customCMD.get("".concat(propTypesObjYarn.install), 'install', 'Package: prop-types has been installed successfully! PropTypes Folder has been created!');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(propTypesObj.uninstall), 'uninstall', 'Package: prop-types has been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(propTypesObjYarn.uninstall), 'uninstall', 'Package: prop-types has been uninstalled successfully!');
          break;
      }
    }
  }]);
  return propTypes;
}();
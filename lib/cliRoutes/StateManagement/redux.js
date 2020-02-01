"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var inquirer = require('inquirer');

var fs = require('fs');

var customCMD = require('../../customNodeCMD');

var errorLogging = require('../../customNodeCMD/customError'); // Cli Model


var cliModel = require('../../cliModel/index');

var installOption = cliModel.installOption; // Cli Install Commands

var _require = require('../../cliModel/install-commands'),
    reduxObj = _require.reduxObj;

var _require2 = require('../../cliModel/install-commands-yarn'),
    reduxObjYarn = _require2.reduxObjYarn; // Importing Redux Boiler plate file


var ReduxBoilerPlate = require('../../cliModel/starter-code/redux');

var prompt = inquirer.createPromptModule();

module.exports =
/*#__PURE__*/
function () {
  function Redux() {
    (0, _classCallCheck2["default"])(this, Redux);
  }

  (0, _createClass2["default"])(Redux, [{
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
      fs.mkdir('./store', function (err) {
        if (err) throw err;
      });
      customCMD.run("cd store && touch store.js");
      var writeStream = fs.createWriteStream('./store/store.js');
      writeStream.write("".concat(ReduxBoilerPlate));

      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reduxObj.install), 'install', 'Packages: redux & react-redux have been installed successfully! Redux Store has been created successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reduxObjYarn.install), 'install', 'Packages: redux & react-redux have been installed successfully! Redux Store has been created successfully!');
          break;
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall(packageInstaller) {
      switch (packageInstaller) {
        case 'NPM':
          customCMD.get("".concat(reduxObj.uninstall), 'uninstall', 'Packages: redux & react-redux have been uninstalled successfully!');
          break;

        case 'Yarn':
          customCMD.get("".concat(reduxObjYarn.uninstall), 'uninstall', 'Packages: redux & react-redux have been uninstalled successfully!');
          break;
      }
    }
  }]);
  return Redux;
}();
"use strict";

var customCMD = require('../../customNodeCMD');

var errorLogging = require('../../customNodeCMD/customError'); // Cli Install Commands


var _require = require('../../cliModel/install-commands'),
    createReactApp = _require.createReactApp;

var _require2 = require('../../cliModel/install-commands-yarn'),
    createReactAppYarn = _require2.createReactAppYarn;

module.exports = function (folderName, packageInstaller) {
  switch (packageInstaller) {
    case 'NPM':
      customCMD.get(" mkdir ".concat(folderName, " && cd ").concat(folderName, " && ").concat(createReactApp, " ."), 'install', 'Package(s): React, React-Dom (using npx create-react-app) installed successfully!');
      break;

    case 'Yarn':
      customCMD.get(" mkdir ".concat(folderName, " && cd ").concat(folderName, " && ").concat(createReactAppYarn, " ."), 'install', 'Package(s): React, React-Dom (using yarn react-app) uninstalled successfully!');
      break;
  }
};
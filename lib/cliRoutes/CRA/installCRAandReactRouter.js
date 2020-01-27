"use strict";

var customCMD = require('../../customNodeCMD');

var errorLogging = require('../../customNodeCMD/customError');

var _require = require('../../cliModel/install-commands'),
    createReactApp = _require.createReactApp,
    reactRouterObj = _require.reactRouterObj;

var _require2 = require('../../cliModel/install-commands-yarn'),
    createReactAppYarn = _require2.createReactAppYarn,
    reactRouterObjYarn = _require2.reactRouterObjYarn;

module.exports = function (folderName, packageInstaller) {
  switch (packageInstaller) {
    case 'NPM':
      customCMD.get(" mkdir ".concat(folderName, " && cd ").concat(folderName, " && ").concat(createReactApp, " . && ").concat(reactRouterObj.install), 'install', 'Package(s): React (using npx create-react-app), and React-Router have been installed successfully!');
      break;

    case 'Yarn':
      customCMD.get(" mkdir ".concat(folderName, " && cd ").concat(folderName, " && ").concat(createReactAppYarn, " . && ").concat(reactRouterObjYarn.install), 'install', 'Package(s): React (using yarn react-app), and React-Router have been installed successfully!');
      break;
  }
};
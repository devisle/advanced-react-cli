"use strict";

// Cli Routes
var CRA = require('./cliRoutes/CRA/cra');

var ReactRouter = require('./cliRoutes/reactrouter');

var StylingPackages = require('./cliRoutes/StylingPackages/index');

var ReactComponent = require('./cliRoutes/ReactComponent/mainReactComponent');

var PropTypes = require('./cliRoutes/propTypes');

var StateManagement = require('./cliRoutes/StateManagement/stateManagement');

var TypeScript = require('./cliRoutes/TypeScript/index');

var CustomPackageInstall = require('./cliRoutes/CustomPackageInstall');

var AccesibilityPackages = require('./cliRoutes/AccesibilityPackages');

module.exports = function (answers) {
  switch (answers.installation) {
    case 'CreateReactApp':
      new CRA().CRAPrompt();
      break;

    case 'ReactComponent':
      new ReactComponent().componentPrompt();
      break;

    case 'ReactRouter':
      new ReactRouter().installOrUninstall();
      break;

    case 'StylingPackages':
      new StylingPackages().prompt();
      break;

    case 'PropTypes':
      new PropTypes().installOrUninstall();
      break;

    case 'StateManagement':
      new StateManagement().prompt();
      break;

    case 'TypeScript':
      new TypeScript().prompt();
      break;

    case 'CustomPackageInstall':
      new CustomPackageInstall().prompt();
      break;

    case 'AccesibilityPackages':
      new AccesibilityPackages().prompt();
      break;

    default:
      console.log('You must select an option!');
  }
};
// Cli Routes
const CRA = require("./cliRoutes/CRA/cra");
const ReactRouter = require("./cliRoutes/reactrouter");
const StylingPackages = require("./cliRoutes/StylingPackages/index");
const ReactComponent = require("./cliRoutes/ReactComponent/mainReactComponent");
const PropTypes = require("./cliRoutes/propTypes");
const StateManagement = require("./cliRoutes/StateManagement/stateManagement");
const TypeScript = require("./cliRoutes/TypeScript/index");

module.exports = answers => {
  switch (answers.installation) {
    case "CreateReactApp":
      new CRA().CRAPrompt();
      break;

    case "ReactComponent":
      new ReactComponent().componentPrompt();
      break;

    case "ReactRouter":
      new ReactRouter().installOrUninstall();
      break;

    case "StylingPackages":
      new StylingPackages().prompt();
      break;

    case "PropTypes":
      new PropTypes().installOrUninstall();
      break;

    case "StateManagement":
      new StateManagement().prompt();
      break;

    case "TypeScript":
      new TypeScript().prompt();
      break;

    default:
      console.log("You must select an option!");
  }
};

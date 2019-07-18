// Cli Routes
const CRA = require("./cliRoutes/CRA/cra");
const ReactRouter = require("./cliRoutes/reactrouter");
const NodeSass = require("./cliRoutes/StylingPackages/nodeSass");
const StyledComponents = require("./cliRoutes/StylingPackages/styledComponents");
const ReactComponent = require("./cliRoutes/ReactComponent/mainReactComponent");
const PropTypes = require("./cliRoutes/propTypes");
const StateManagement = require("./cliRoutes/StateManagement/stateManagement");

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
    case "NodeSass":
      new NodeSass().installOrUninstall();
      break;
    case "StyledComponents":
      new StyledComponents().installOrUninstall();
      break;
    case "PropTypes":
      new PropTypes().installOrUninstall();
      break;
    case "StateManagement":
      new StateManagement().prompt();
      break;
    case "TypeScript":
      console.log("Fuck your mom");
      break;
    default:
      console.log("You must select an option!");
  }
};

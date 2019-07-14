// Cli Routes
const CRA = require("./cliRoutes/cra");
const ReactRouter = require("./cliRoutes/reactrouter");
const NodeSass = require("./cliRoutes/nodeSass");
const ReactComponent = require("./cliRoutes/reactComponent");
const PropTypes = require("./cliRoutes/propTypes");
const StateManagement = require("./cliRoutes/stateManagement");

module.exports = answers => {
  switch (answers.installation) {
    case "create-react-app":
      new CRA().CRAPrompt();
      break;
    case "react-component":
      new ReactComponent().componentPrompt();
      break;
    case "react-router":
      new ReactRouter().installOrUninstall();
      break;
    case "node-sass":
      new NodeSass().installOrUninstall();
      break;
    case "prop-types":
      new PropTypes().installOrUninstall();
      break;
    case "state-management":
      new StateManagement().prompt();
      break;
    default:
      console.log("You must select an option!");
  }
};

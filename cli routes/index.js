const _cra = require("./cra");
const _reactRouter = require("./reactroute");
const _nodeSass = require("./nodeSass");
const _reactComponent = require("./reactComponent");
const _propTypes = require("./propTypes");
const _stateManagement = require("./stateManagement");

class Routes {

    constructor() { }

    /**
     * @returns All route functions packaged into 1 object
     */
    static getAllRoutes() {
        return [_cra, _reactRouter, _nodeSass, _reactComponent, _propTypes, _stateManagement];
    }
    
}

module.exports = Routes;

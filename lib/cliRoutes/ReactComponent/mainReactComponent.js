"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var inquirer = require('inquirer'); // Cli Model


var _require = require('../../cliModel'),
    reactComponents = _require.reactComponents,
    installFolder = _require.installFolder,
    addPackage = _require.addPackage,
    _componentName = _require.componentName; // Component Dependencies


var generateComponent = require('./index');

var prompt = inquirer.createPromptModule();
/*

  Generates a React Component based on user inputs

*/

module.exports =
/*#__PURE__*/
function () {
  function ReactComponent() {
    (0, _classCallCheck2["default"])(this, ReactComponent);
  }

  (0, _createClass2["default"])(ReactComponent, [{
    key: "componentPrompt",
    // Prompts User for Component type
    value: function componentPrompt() {
      var _this = this;

      prompt(reactComponents).then(function (_ref) {
        var component = _ref.component;

        _this.componentName(component);
      });
    } // Prompts User for Component Name

  }, {
    key: "componentName",
    value: function componentName(component) {
      var _this2 = this;

      prompt(_componentName).then(function (_ref2) {
        var componentName = _ref2.componentName;

        _this2.folderName(component, componentName);
      });
    } // Prompts User for Folder Name

  }, {
    key: "folderName",
    value: function folderName(component, componentName) {
      var _this3 = this;

      prompt(installFolder).then(function (_ref3) {
        var folderName = _ref3.folderName;

        _this3.propTypesAdd(component, componentName, folderName);
      });
    } // Prompts User on PropTypes

  }, {
    key: "propTypesAdd",
    value: function propTypesAdd(component, componentName, folderName) {
      var _this4 = this;

      prompt(_objectSpread({}, addPackage[0], {
        message: 'Would you like to add PropTypes? (Y/N)'
      })).then(function (_ref4) {
        var packageAdd = _ref4.packageAdd;
        var propTypingBool;
        propTypingBool = ['yes', 'y', ''].includes(packageAdd.toLowerCase()) ? true : false;

        _this4.reactRouterAdd(component, componentName, folderName, propTypingBool);
      });
    } // Prompts User on React-Router

  }, {
    key: "reactRouterAdd",
    value: function reactRouterAdd(component, componentName, folderName, propTypingBool) {
      var _this5 = this;

      prompt(_objectSpread({}, addPackage[0], {
        message: 'Would you like to add react-router? (Y/N)'
      })).then(function (_ref5) {
        var packageAdd = _ref5.packageAdd;
        var reactRouterBool;
        reactRouterBool = ['yes', 'y', ''].includes(packageAdd.toLowerCase()) ? true : false;

        _this5.reduxAdd(component, componentName, folderName, propTypingBool, reactRouterBool);
      });
    } // Prompts User on Redux

  }, {
    key: "reduxAdd",
    value: function reduxAdd(component, componentName, folderName, propTypingBool, reactRouterBool) {
      var _this6 = this;

      prompt(_objectSpread({}, addPackage[0], {
        message: 'Would you like to add Redux? (Y/N)'
      })).then(function (_ref6) {
        var packageAdd = _ref6.packageAdd;
        var reduxBool;
        reduxBool = ['yes', 'y', ''].includes(packageAdd.toLowerCase()) ? true : false;

        _this6.functionOrClass(component, componentName, folderName, propTypingBool, reactRouterBool, reduxBool);
      });
    } // Main Logic Split : Function or Class Component

  }, {
    key: "functionOrClass",
    value: function functionOrClass(component, componentName, folderName, propTypingBool, reactRouterBool, reduxBool) {
      generateComponent({
        component: component,
        componentName: componentName,
        folderName: folderName,
        propTypingBool: propTypingBool,
        reactRouterBool: reactRouterBool,
        reduxBool: reduxBool
      });
    }
  }]);
  return ReactComponent;
}();
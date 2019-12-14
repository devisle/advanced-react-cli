#!/usr/bin/env node
// let [...args] = process.argv;
// console.log(`folder name ${args}`);
// console.log(`folder location ${args}`);
// Current working directory
"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _chalk = _interopRequireDefault(require("chalk"));

var _clear = _interopRequireDefault(require("clear"));

var _figlet = _interopRequireDefault(require("figlet"));

var _index = require("./cliModel/index");

var _options = require("./options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cwd = process.cwd();
require = require("esm")(module
/*, options*/
); // console.log(cwd);

// const options = require("./options.ts");
var InqPrompt = _inquirer["default"].createPromptModule();

(0, _clear["default"])();
console.log(_chalk["default"].green(_figlet["default"].textSync("Adv. React CLI", {
  horizontalLayout: "fitted",
  font: "Small",
  verticalLayout: "full"
})));
InqPrompt(_index.CliCommand).then(function (answers) {
  (0, _options.Options)(answers);
});
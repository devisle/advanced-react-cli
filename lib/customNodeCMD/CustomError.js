"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var chalk = require('chalk');

function ErrorLogging(stderr, data) {
  var NewData = data.data.split('\n');
  var NewStderr = stderr.stderr.split('\n');
  NewStderr.forEach(function (log) {
    var warning = log.search('WARN');

    if (warning) {
      var warn = chalk.bgYellow.black('WARN');
      log.replace('WARN', warn);
      console.log(log.replace('WARN', warn));
    }
  });
  NewData.forEach(function (log) {
    var warning = log.search('WARN');

    if (warning) {
      var warn = chalk.bgYellow('WARN');
      log.replace('WARN', warn);
      console.log(log.replace('WARN', warn));
    }
  });
}

var _default = ErrorLogging;
exports["default"] = _default;
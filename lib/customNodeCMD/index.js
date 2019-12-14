"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var exec = require('child_process').exec;

var ora = require('ora');

var cliProgress = require('cli-progress');

var CommandLineFunctions = {
  get: getCommand,
  run: runCommand
};
var install = new ora({
  text: 'Installing package(s)...',
  install: process.argv[2],
  indent: 1,
  spinner: {
    interval: 80,
    frames: ['( ●    )', '(  ●   )', '(   ●  )', '(    ● )', '(     ●)', '(    ● )', '(   ●  )', '(  ●   )', '( ●    )', '(●     )']
  }
});
var uninstall = new ora({
  text: 'Uninstalling package(s)...',
  uninstall: process.argv[2],
  spinner: {
    interval: 80,
    frames: ['( ●    )', '(  ●   )', '(   ●  )', '(    ● )', '(     ●)', '(    ● )', '(   ●  )', '(  ●   )', '( ●    )', '(●     )']
  }
});

function runCommand(command) {
  return exec(command);
}

function getCommand(command, callback, installOrUninstall) {
  exec(command, function () {
    switch (installOrUninstall) {
      case 'install':
        install.start(); // console.log(install.start())

        return function (err, data, stderr) {
          if (!callback) {
            return;
          }

          setTimeout(function () {
            install.color = 'green';
          }, 3000);
          process.stdout.write('\n');
          callback(err, {
            data: data
          }, {
            stderr: stderr
          });
          process.exit();
          install.succeed();
        };
        break;

      case 'uninstall':
        uninstall.start();
        return function (err, data, stderr) {
          if (!callback) {
            return;
          }

          setTimeout(function () {
            uninstall.color = 'green';
          }, 3000); // callback(err, { data }, { stderr });

          process.stdout.write('\n');
          callback(err, {
            data: data
          }, {
            stderr: stderr
          });
          process.exit();
          uninstall.succeed();
        };
    }
  }(callback));
}

var _default = CommandLineFunctions;
exports["default"] = _default;
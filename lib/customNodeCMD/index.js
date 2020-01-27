"use strict";

/*
 The functions runCommand and getCommands are a modified version of the ones
 in the Node-CMD Npm Package.
 Kindly visit https://github.com/RIAEvangelist/node-cmd and support them <3
*/
var spawn = require('child_process').spawn;

var exec = require('child_process').exec; // const ora = require('ora');


var commandLineFunctions = {
  get: getCommand,
  run: runCommand
}; // const install = new ora({
//   text: 'Installing package(s)...',
//   install: process.argv[2]
// }) //Posible deletion
// const uninstall = new ora({
//   text: 'Uninstalling package(s)...',
//   uninstall: process.argv[2]
// }) //Possible deletion

function runCommand(command) {
  return exec(command);
}
/*
This feature was aided by my friend Gensen, github: choyg.
I just want to give him credit for helping me with node related question.
Todo: Change the node default progress bar to something different.
Display custom message instead default node progress bar
*/


function getCommand(command, installOrUninstall, finalCommand) {
  console.log("".concat(installOrUninstall, "ing Packages..."));
  return new Promise(function (resolve, reject) {
    var subproc = spawn(command, {
      stdio: 'inherit',
      shell: true
    });

    if (subproc.stdout !== null) {
      subproc.stdout.on('data', function (data) {
        console.log("Creating project: ".concat(data, "..."));
      });
    }

    subproc.on('exit', function () {
      return console.log("".concat(finalCommand, "\n"));
    });
  })["catch"](function (err) {
    subproc.stderr.on('data', function (data) {
      console.error("stderr: ".concat(data));
    });
  });
}

module.exports = commandLineFunctions;
/*
 The functions runCommand and getCommands are a modified version of the ones
 in the Node-CMD Npm Package.
 Kindly visit https://github.com/RIAEvangelist/node-cmd and support them <3
*/

var exec = require("child_process").exec;
var CLI = require("clui"),
  Spinner = CLI.Spinner;

const commandLineFunctions = {
  get: getCommand,
  run: runCommand
};

const install = new Spinner("Installing the package(s)...", [
  "⣾",
  "⣽",
  "⣻",
  "⢿",
  "⡿",
  "⣟",
  "⣯",
  "⣷"
]);

const uninstall = new Spinner("Uninstalling the package(s)...", [
  "⣾",
  "⣽",
  "⣻",
  "⢿",
  "⡿",
  "⣟",
  "⣯",
  "⣷"
]);

function runCommand(command) {
  return exec(command);
}

function getCommand(command, callback, installOrUninstall) {
  exec(
    command,
    (function() {
      switch (installOrUninstall) {
        case "install":
          install.start();
          return function(err, data, stderr) {
            if (!callback) {
              return;
            }
            // callback(err, { data }, { stderr });
            callback(err, data, stderr);
            process.stdout.write("\n");
            process.exit();
          };
          break;

        case "uninstall":
          uninstall.start();
          return function(err, data, stderr) {
            if (!callback) {
              return;
            }
            // callback(err, { data }, { stderr });
            callback(err, data, stderr);
            process.stdout.write("\n");
            process.exit();
          };
      }
    })(callback)
  );
}

module.exports = commandLineFunctions;

export {};

const exec = require('child_process').exec
const ora = require('ora');
const cliProgress = require('cli-progress');

const CommandLineFunctions = {
  get: getCommand,
  run: runCommand
};

const install = new ora({
  text: 'Installing package(s)...',
  install: process.argv[2],
  indent: 1,
  spinner: {
    interval: 80,
    frames: [
      '( ●    )',
      '(  ●   )',
      '(   ●  )',
      '(    ● )',
      '(     ●)',
      '(    ● )',
      '(   ●  )',
      '(  ●   )',
      '( ●    )',
      '(●     )'
    ]
  }
});

const uninstall = new ora({
  text: 'Uninstalling package(s)...',
  uninstall: process.argv[2],
  spinner: {
    interval: 80,
    frames: [
      '( ●    )',
      '(  ●   )',
      '(   ●  )',
      '(    ● )',
      '(     ●)',
      '(    ● )',
      '(   ●  )',
      '(  ●   )',
      '( ●    )',
      '(●     )'
    ]
  }
});

function runCommand (command: any) {
  return exec(command)
};

function getCommand (command: any, callback: any, installOrUninstall: any) {
  exec(
    command,
    (function () {
      switch (installOrUninstall) {
        case 'install':
          install.start()
          return function (err: any, data: any, stderr: any) {
            if (!callback) {
              return
            };
            setTimeout(() => {
              install.color = 'green'
            }, 3000)
            process.stdout.write('\n')
            callback(err, { data }, { stderr });
            install.succeed();
            process.exit();
          };
          break;

        case 'uninstall':
          uninstall.start()
          return function (err: any, data: any, stderr: any) {
            if (!callback) {
              return
            };
            setTimeout(() => {
              uninstall.color = 'green'
            }, 3000)
            // callback(err, { data }, { stderr });
            process.stdout.write('\n')
            callback(err, { data }, { stderr });
            uninstall.succeed();
            process.exit();
          };
      };
    })(callback)
  };
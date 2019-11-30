/*
 The functions runCommand and getCommands are a modified version of the ones
 in the Node-CMD Npm Package.
 Kindly visit https://github.com/RIAEvangelist/node-cmd and support them <3
*/

const exec = require('child_process').exec
const ora = require('ora')
const cliProgress = require('cli-progress')

const commandLineFunctions = {
  get: getCommand,
  run: runCommand
}

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
})

const uninstall = new ora({
  text: 'Uninstalling package(s)...',
  uninstall: process.argv[2]
})

function runCommand (command) {
  return exec(command)
}

function getCommand (command, callback, installOrUninstall) {
  exec(
    command,
    (function () {
      switch (installOrUninstall) {
        case 'install':
          install.start()
          // console.log(install.start())
          return function (err, data, stderr) {
            if (!callback) {
              return
            }
            setTimeout(() => {
              install.color = 'green'
            }, 3000)
            process.stdout.write('\n')
            callback(err, { data }, { stderr })
            process.exit()
            install.succeed()
          }
          break

        case 'uninstall':
          uninstall.start()
          return function (err, data, stderr) {
            if (!callback) {
              return
            }
            setTimeout(() => {
              uninstall.color = 'green'
            }, 3000)
            // callback(err, { data }, { stderr });
            process.stdout.write('\n')
            callback(err, { data }, { stderr })
            process.exit()
            uninstall.succeed()
          }
      }
    })(callback)
  )
}

module.exports = commandLineFunctions

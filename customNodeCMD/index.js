/*
 The functions runCommand and getCommands are a modified version of the ones
 in the Node-CMD Npm Package.
 Kindly visit https://github.com/RIAEvangelist/node-cmd and support them <3
*/

const spawn = require('child_process').spawn
const exec = require('child_process').exec
// const ora = require('ora');

const commandLineFunctions = {
  get: getCommand,
  run: runCommand
}

// const install = new ora({
//   text: 'Installing package(s)...',
//   install: process.argv[2]
// }) //Posible deletion

// const uninstall = new ora({
//   text: 'Uninstalling package(s)...',
//   uninstall: process.argv[2]
// }) //Possible deletion

function runCommand (command) {
  return exec(command)
}

/*
This feature was aided by my friend Gensen, github: choyg.
I just want to give him credit for helping me with node related question.
Todo: Change the node default progress bar to something different.
Display custom message instead default node progress bar
*/

function getCommand (command, packages) {
  console.log('Installing Packages...')
  const subproc = spawn(command, {
    stdio: 'inherit',
    shell: true
  })
  if (subproc.stdout !== null) {
    subproc.stdout.on('data', data => {
      console.log(`Creating project: ${data}...`)
    })
    subproc.stderr.on('data', data => {
      console.error(`stderr: ${data}`)
    })
  }

  return
  // exec(
  //   //Why exec and code below is greyed out?
  //   command,
  //   (function() {
  //     switch (installOrUninstall) {
  //       case "install":
  //         // install.start()

  //         // console.log(install.start())
  //         return function(err, data, stderr) {
  //           if (!callback) {
  //             return;
  //           }
  //           setTimeout(() => {
  //             install.color = "green";
  //           }, 3000);
  //           process.stdout.write("\n");
  //           callback(err, { data }, { stderr });
  //           // console.log('\x1b[33m%s\x1b[0m', data);  //yellow

  //           process.exit();
  //           install.succeed();
  //         };
  //         break;

  //       case "uninstall":
  //         uninstall.start();
  //         return function(err, data, stderr) {
  //           if (!callback) {
  //             return;
  //           }
  //           setTimeout(() => {
  //             uninstall.color = "green";
  //           }, 3000);
  //           // callback(err, { data }, { stderr });
  //           process.stdout.write("\n");
  //           callback(err, { data }, { stderr });
  //           process.exit();
  //           uninstall.succeed();
  //         };
  //     }
  //   })(callback)
  // );
}
module.exports = commandLineFunctions

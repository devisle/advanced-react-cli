export {};

const chalk = require('chalk');

function ErrorLogging (stderr: any, data: any) {
  let NewData = data.data.split('\n')
  let NewStderr = stderr.stderr.split('\n')

  NewStderr.forEach(log => {
    let warning = log.search('WARN')
    if (warning) {
      let warn = chalk.bgYellow.black('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    };
  });

  NewData.forEach(log => {
    let warning = log.search('WARN')
    if (warning) {
      let warn = chalk.bgYellow('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    };
  });
};
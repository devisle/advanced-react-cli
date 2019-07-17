const chalk = require('chalk')

function errorLogging (stderr, data) {
  const newData = data.data.split('\n')
  const newStderr = stderr.stderr.split('\n')

  newStderr.forEach(log => {
    const warning = log.search('WARN')
    if (warning) {
      const warn = chalk.bgYellow.black('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    }
  })

  newData.forEach(log => {
    const warning = log.search('WARN')
    if (warning) {
      const warn = chalk.bgYellow('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    }
  })
}

module.exports = errorLogging

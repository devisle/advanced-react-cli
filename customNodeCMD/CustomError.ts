const chalk = require('chalk')

function ErrorLogging (stderr, data) {
  const NewData = data.data.split('\n')
  const NewStderr = stderr.stderr.split('\n')

  NewStderr.forEach(log => {
    const warning = log.search('WARN')
    if (warning) {
      const warn = chalk.bgYellow.black('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    }
  })

  NewData.forEach(log => {
    const warning = log.search('WARN')
    if (warning) {
      const warn = chalk.bgYellow('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    }
  })
}

export default ErrorLogging;
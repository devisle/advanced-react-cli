'use strict'

var chalk = require('chalk')

function errorLogging (stderr, data) {
  var newData = data.data.split('\n')
  var newStderr = stderr.stderr.split('\n')
  newStderr.forEach(function (log) {
    var warning = log.search('WARN')

    if (warning) {
      var warn = chalk.bgYellow.black('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    }
  })
  newData.forEach(function (log) {
    var warning = log.search('WARN')

    if (warning) {
      var warn = chalk.bgYellow('WARN')
      log.replace('WARN', warn)
      console.log(log.replace('WARN', warn))
    }
  })
}

module.exports = errorLogging

'use strict'

function _toConsumableArray (arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  )
}

function _nonIterableSpread () {
  throw new TypeError('Invalid attempt to spread non-iterable instance')
}

function _iterableToArray (iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter)
}

function _arrayWithoutHoles (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i]
    }
    return arr2
  }
}

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

var inquirer = require('inquirer')

var customCMD = require('../../customNodeCMD')

var errorLogging = require('../../customNodeCMD/customError') // Cli Model

var cliModel = require('../../cliModel')

var multiplePackageInstall = cliModel.multiplePackageInstall
var YarnOrNpm = cliModel.YarnOrNpm

var _require = require('../../cliModel/install-commands'),
  createReactApp = _require.createReactApp

var _require2 = require('../../cliModel/install-commands-yarn'),
  createReactAppYarn = _require2.createReactAppYarn

var _prompt = inquirer.createPromptModule()
/*

  Installs A React Application with Custom Packages

*/

module.exports =
  /*#__PURE__*/
  (function () {
    function CustomPackageInstall () {
      _classCallCheck(this, CustomPackageInstall)
    }

    _createClass(CustomPackageInstall, [
      {
        key: 'prompt',
        value: function prompt () {
          _prompt(YarnOrNpm).then(function (_ref) {
            var packageManager = _ref.packageManager

            _prompt(multiplePackageInstall).then(function (_ref2) {
              var packages = _ref2.packages

              if (_toConsumableArray(packages).includes('create-react-app')) {
                packages.shift()
                packages.join(' ')

                switch (packageManager) {
                  case 'Yarn':
                    customCMD.get(
                      ''
                        .concat(createReactAppYarn, ' ')
                        .concat(folderName, ' && cd ')
                        .concat(folderName, ' && yarn add ')
                        .concat(packages.join(' '), ' '),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                    break

                  case 'NPM':
                    customCMD.get(
                      ''
                        .concat(createReactApp, ' ')
                        .concat(folderName, ' && cd ')
                        .concat(folderName, ' && npm install --save ')
                        .concat(packages.join(' ')),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                }
              } else {
                switch (packageManager) {
                  case 'Yarn':
                    customCMD.get(
                      'yarn add '.concat(packages.join(' '), ' '),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                    break

                  case 'NPM':
                    customCMD.get(
                      'npm install --save '.concat(packages.join(' ')),
                      function (err, data, stderr) {
                        err ? console.log(err) : errorLogging(stderr, data)
                      },
                      'install'
                    )
                }
              }
            })
          })
        }
      }
    ])

    return CustomPackageInstall
  })()

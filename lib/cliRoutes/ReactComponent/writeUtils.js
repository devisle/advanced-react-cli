'use strict'

function asyncGeneratorStep (gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}

function _asyncToGenerator (fn) {
  return function () {
    var self = this,
      args = arguments
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args)
      function _next (value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }
      function _throw (err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }
      _next(undefined)
    })
  }
}

var fs = require('fs')

var componentCode = require('../../cliModel/starter-code/reactComponent')

exports.writeInCurrentDir = function writeInCurrentDir (generateInfo) {
  var writeStream = fs.createWriteStream(
    './'.concat(generateInfo.componentName, '.js')
  )
  writeFile(writeStream, generateInfo)

  if (generateInfo.component == 'function') {
    console.log(
      'File Creation: Function component '.concat(
        generateInfo.componentName,
        ' has been created successfully!'
      )
    )
  } else {
    console.log(
      'File Creation: Class component '.concat(
        generateInfo.component,
        ' has been created successfully!'
      )
    )
  }
}

exports.writeInNewDir =
  /*#__PURE__*/
  (function () {
    var _writeInNewDir = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee (generateInfo) {
        var writeStream
        return regeneratorRuntime.wrap(
          function _callee$ (_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0
                  _context.next = 3
                  return fs.mkdirSync('./'.concat(generateInfo.folderName), {
                    recursive: false
                  })

                case 3:
                  writeStream = fs.createWriteStream(
                    './'
                      .concat(generateInfo.folderName, '/')
                      .concat(generateInfo.componentName, '.js')
                  )
                  writeFile(writeStream, generateInfo)

                  if (generateInfo.component == 'function') {
                    console.log(
                      'File Creation: Function component '
                        .concat(generateInfo.component, ' in the folder ')
                        .concat(
                          generateInfo.folderName,
                          ' has been created successfully!'
                        )
                    )
                  } else {
                    console.log(
                      'File Creation: Function component '
                        .concat(generateInfo.component, ' in the folder ')
                        .concat(
                          generateInfo.folderName,
                          ' has been created successfully!'
                        )
                    )
                  }

                  _context.next = 11
                  break

                case 8:
                  _context.prev = 8
                  _context.t0 = _context['catch'](0)
                  handleError(_context.t0)

                case 11:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[0, 8]]
        )
      })
    )

    function writeInNewDir (_x) {
      return _writeInNewDir.apply(this, arguments)
    }

    return writeInNewDir
  })()
/**
 * Write to specified location
 * @param {object} writeStream - stream object
 * @param {object} generateInfo
 */

function writeFile (writeStream, generateInfo) {
  var fileData = componentCode(
    ''.concat(generateInfo.component),
    ''.concat(generateInfo.componentName),
    generateInfo.propTypingBool,
    generateInfo.reactRouterBool,
    generateInfo.reduxBool
  )
  writeStream.write(fileData)
}

function handleError (err) {
  console.error(err.message)
  process.exit(1)
}

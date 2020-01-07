'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

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
    var _writeInNewDir = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee (generateInfo) {
        var writeStream
        return _regenerator['default'].wrap(
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

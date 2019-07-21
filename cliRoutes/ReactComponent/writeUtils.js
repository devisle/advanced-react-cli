const fs = require('fs')

const componentCode = require('../../cliModel/starter-code/reactComponent')

exports.writeInCurrentDir = function writeInCurrentDir (generateInfo) {
  const writeStream = fs.createWriteStream(`./${generateInfo.componentName}.js`)
  writeFile(writeStream, generateInfo)

  if (generateInfo.component == 'function') {
    console.log(
      `File Creation: Function component ${
        generateInfo.componentName
      } has been created successfully!`
    )
  } else {
    console.log(
      `File Creation: Class component ${
        generateInfo.component
      } has been created successfully!`
    )
  }
}

exports.writeInNewDir = async function writeInNewDir (generateInfo) {
  try {
    await fs.mkdirSync(`./${generateInfo.folderName}`, { recursive: false })

    const writeStream = fs.createWriteStream(
      `./${generateInfo.folderName}/${generateInfo.componentName}.js`
    )
    writeFile(writeStream, generateInfo)

    if (generateInfo.component == 'function') {
      console.log(
        `File Creation: Function component ${
          generateInfo.component
        } in the folder ${
          generateInfo.folderName
        } has been created successfully!`
      )
    } else {
      console.log(
        `File Creation: Function component ${
          generateInfo.component
        } in the folder ${
          generateInfo.folderName
        } has been created successfully!`
      )
    }
  } catch (err) {
    handleError(err)
  }
}

/**
 * Write to specified location
 * @param {object} writeStream - stream object
 * @param {object} generateInfo
 */
function writeFile (writeStream, generateInfo) {
  const fileData = componentCode(
    `${generateInfo.component}`,
    `${generateInfo.componentName}`,
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

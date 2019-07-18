const fs = require('fs')

// React Component Custom Boilerplate
const componentCode = require('../../cliModel/starter-code/reactComponent')

module.exports = generateFunctionComponent

/**
 * Generates a functional react component
 * @param {object} generateInfo - information required to generate component
 * @param {string} generateInfo.component - type of component (e.g. class or function)
 * @param {string} generateInfo.componentName - name of component
 * @param {string} generateInfo.folderName - name of folder
 * @param {boolean} generateInfo.propTypingBool - add propTypes
 * @param {boolean} generateInfo.reactRouterBool - add react-router
 * @param {boolean} generateInfo.reduxBool - add redux
 */
function generateFunctionComponent (generateInfo) {
  if (['.', ''].includes(generateInfo.folderName)) {
    writeInCurrentDir(generateInfo)
  } else {
    writeInNewDir(generateInfo)
  }
}

function writeInCurrentDir (generateInfo) {
  const writeStream = fs.createWriteStream(`./${generateInfo.componentName}.js`)
  writeFile(writeStream, generateInfo)

  console.log(
    `File Creation: Function component ${
      generateInfo.componentName
    } has been created successfully!`
  )
}

async function writeInNewDir (generateInfo) {
  try {
    await fs.mkdirSync(`./${generateInfo.folderName}`, { recursive: false })

    const writeStream = fs.createWriteStream(
      `./${generateInfo.folderName}/${generateInfo.componentName}.js`
    )
    writeFile(writeStream, generateInfo)

    console.log(
      `File Creation: Function component ${
        generateInfo.component
      } in the folder ${generateInfo.folderName} has been created successfully!`
    )
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

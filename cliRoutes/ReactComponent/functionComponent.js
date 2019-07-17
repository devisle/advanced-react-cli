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
 * @param {boolean} generateInfo.propTypingBool
 * @param {boolean} generateInfo.reactRouterBool
 * @param {boolean} generateInfo.reduxBool
 */
function generateFunctionComponent (generateInfo) {
  if (['.', ''].includes(generateInfo.folderName)) {
    writeInCurrentDir(generateInfo)
  } else {
    writeInNewDir(generateInfo)
  }
}

function writeInCurrentDir(generateInfo) {
  const writeStream = fs.createWriteStream(`./${generateInfo.componentName}.js`)
  const fileData = componentCode(
    `${generateInfo.component}`,
    `${generateInfo.componentName}`,
    generateInfo.propTypingBool,
    generateInfo.reactRouterBool,
    generateInfo.reduxBool
  )
  writeStream.write(fileData)
  console.log(
    `File Creation: Function component ${generateInfo.componentName} has been created successfully!`
  )
}

function writeInNewDir(generateInfo) {
  fs.mkdir(`./${generateInfo.folderName}`, { recursive: false }, err => {
    if (err) throw err
  })
  const writeStream = fs.createWriteStream(
    `./${generateInfo.folderName}/${generateInfo.componentName}.js`
  )
  const fileData = componentCode(
    `${generateInfo.component}`,
    `${generateInfo.componentName}`,
    generateInfo.propTypingBool,
    generateInfo.reactRouterBool,
    generateInfo.reduxBool
  )
  writeStream.write(fileData)
  console.log(
    `File Creation: Function component ${generateInfo.component} in the folder ${generateInfo.folderName} has been created successfully!`
  )
}

const fs = require('fs')

//React Component Custom Boilerplate
const componentCode = require('../../cliModel/starter-code/reactComponent')

module.exports = (
  component,
  componentName,
  folderName,
  propTypingBool,
  reactRouterBool,
  reduxBool
) => {
  if (['.', ''].includes(folderName)) {
    const writeStream = fs.createWriteStream(`./${componentName}.js`)
    const fileData = componentCode(
      `${component}`,
      `${componentName}`,
      propTypingBool,
      reactRouterBool,
      reduxBool
    )
    writeStream.write(fileData)
    console.log(
      `File Creation: Class component ${component} has been created successfully!`
    )
  } else {
    fs.mkdir(`./${folderName}`, { recursive: false }, err => {
      if (err) throw err
    })
    const writeStream = fs.createWriteStream(
      `./${folderName}/${componentName}.js`
    )
    const fileData = componentCode(
      `${component}`,
      `${componentName}`,
      propTypingBool,
      reactRouterBool,
      reduxBool
    )
    writeStream.write(fileData)
    console.log(
      `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
    )
  }
}

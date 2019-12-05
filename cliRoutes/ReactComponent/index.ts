const WriteUtils = require('./writeUtils')

export default GenerateComponent;

/**
 * Generates a react component
 * @param {object} generateInfo - information required to generate component
 * @param {string} generateInfo.component - type of component (e.g. class or function)
 * @param {string} generateInfo.componentName - name of component
 * @param {string} generateInfo.folderName - name of folder
 * @param {boolean} generateInfo.propTypingBool - add propTypes
 * @param {boolean} generateInfo.reactRouterBool - add react-router
 * @param {boolean} generateInfo.reduxBool - add redux
 */
function GenerateComponent (generateInfo) {
  if (['.', ''].includes(generateInfo.folderName)) {
    WriteUtils.writeInCurrentDir(generateInfo)
  } else {
    WriteUtils.writeInNewDir(generateInfo)
  }
}

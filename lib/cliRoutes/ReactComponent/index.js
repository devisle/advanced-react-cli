"use strict";

var writeUtils = require('./writeUtils');

module.exports = generateComponent;
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

function generateComponent(generateInfo) {
  if (['.', ''].includes(generateInfo.folderName)) {
    writeUtils.writeInCurrentDir(generateInfo);
  } else {
    writeUtils.writeInNewDir(generateInfo);
  }
}
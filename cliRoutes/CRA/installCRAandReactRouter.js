const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

const {
  createReactApp,
  reactRouterObj
} = require('../../cliModel/install-commands')

const {
  createReactAppYarn,
  reactRouterObjYarn
} = require('../../cliModel/install-commands-yarn')

module.exports = (folderName, packageInstaller) => {
  switch (packageInstaller) {
    case 'NPM':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
          reactRouterObj.install
        }`,
        (err, data, stderr) =>
          err ? console.log(err) : errorLogging(stderr, data),
        'install'
      )
      break

    case 'Yarn':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} . && ${
          reactRouterObjYarn.install
        }`,
        (err, data, stderr) =>
          err ? console.log(err) : errorLogging(stderr, data),
        'install'
      )
      break
  }
}

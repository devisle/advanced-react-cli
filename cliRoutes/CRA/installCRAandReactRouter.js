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

module.exports = (folderName, packageManager) => {
  switch (packageManager) {
    case 'NPM':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
          reactRouterObj.install
        }`,
        'install',
        'Package(s): React (using npx create-react-app), and React-Router have been installed successfully!'
      )
      break

    case 'Yarn':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} . && ${
          reactRouterObjYarn.install
        }`,
        'install',
        'Package(s): React (using yarn react-app), and React-Router have been installed successfully!'
      )
      break
  }
}

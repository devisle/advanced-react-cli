const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Install Commands
const { createReactApp } = require('../../cliModel/install-commands')

const { createReactAppYarn } = require('../../cliModel/install-commands-yarn')

module.exports = (folderName, packageManager) => {
  switch (packageManager) {
    case 'NPM':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
        'install',
        'Package(s): React, React-Dom (using npx create-react-app) installed successfully!'
      )
      break

    case 'Yarn':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} .`,
        'install',
        'Package(s): React, React-Dom (using yarn react-app) installed successfully!'
      )
      break
  }
}

const customCMD = require('../../customNodeCMD')

// Cli Install Commands
const { createReactApp } = require('../../cliModel/install-commands')

const { createReactAppYarn } = require('../../cliModel/install-commands-yarn')

module.exports = (folderName, packageInstaller) => {
  switch (packageInstaller) {
    case 'NPM':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
        (err, data, stderr) =>
          err ? console.log(err) : console.log(stderr, data),
        'install'
      )
      break

    case 'Yarn':
      customCMD.get(
        ` mkdir ${folderName} && cd ${folderName} && ${createReactAppYarn} .`,
        (err, data, stderr) =>
          err ? console.log(err) : console.log(stderr, data),
        'install'
      )
      break
  }
}

const inquirer = require('inquirer')
const customCMD = require('../../customNodeCMD')
const errorLogging = require('../../customNodeCMD/customError')

// Cli Model
const cliModel = require('../../cliModel')
const multiplePackageInstall = cliModel.multiplePackageInstall
const YarnOrNpm = cliModel.YarnOrNpm

const { createReactApp } = require('../../cliModel/install-commands')

const { createReactAppYarn } = require('../../cliModel/install-commands-yarn')

const prompt = inquirer.createPromptModule()

/*

  Installs A React Application with Custom Packages

*/

module.exports = class CustomPackageInstall {
  prompt () {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      prompt(multiplePackageInstall).then(({ packages }) => {
        if ([...packages].includes('create-react-app')) {
          packages.shift()
          packages.join(' ')
          switch (packageManager) {
            case 'Yarn':
              customCMD.get(
                `${createReactAppYarn} ${folderName} && cd ${folderName} && yarn add ${packages.join(
                  ' '
                )} `,
                'install',
                `Package(s): React (using npx create-react-app), and ${packages.join(
                  ' '
                )} have been installed successfully!`
              )
              break

            case 'NPM':
              customCMD.get(
                `${createReactApp} ${folderName} && cd ${folderName} && npm install --save ${packages.join(
                  ' '
                )}`,
                'install',
                `Package(s): React (using yarn react-app), and ${packages.join(
                  ' '
                )} have been installed successfully!`
              )
          }
        } else {
          switch (packageManager) {
            case 'Yarn':
              customCMD.get(
                `yarn add ${packages.join(' ')} `,
                'install',
                `Package(s): ${packages.join(
                  ' '
                )} have been installed successfully!`
              )
              break

            case 'NPM':
              customCMD.get(
                `npm install --save ${packages.join(' ')}`,
                'install',
                `Package(s): ${packages.join(
                  ' '
                )} have been installed successfully!`
              )
          }
        }
      })
    })
  }
}

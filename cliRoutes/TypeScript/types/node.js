const inquirer = require('inquirer')

const customCMD = require('../../../customNodeCMD')
const errorLogging = require('../../../customNodeCMD/customError')

// CLI Model
const cliModel = require('../../../cliModel/index')
const installOption = cliModel.installOption

// Cli Install Commands
const { TypeScriptReactObj } = require('../../../cliModel/install-commands')
const { typesNode } = TypeScriptReactObj

const {
  TypeScriptReactObjYarn
} = require('../../../cliModel/install-commands-yarn')
const { typesNodeYarn } = TypeScriptReactObjYarn

const prompt = inquirer.createPromptModule()

/*

  Installs @types/nodes

*/

module.exports = class TypesNodes {
  installOrUninstall (packageManager) {
    prompt(installOption).then(({ decision }) => {
      if (decision === 'Install') {
        this.install(packageManager)
      } else if (decision === 'Uninstall') {
        this.uninstall(packageManager)
      }
    })
  }

  install (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${typesNode.install}`
          : `${typesNodeYarn.install}`
      }`,
      'install',
      `Package(s): @types/node has been installed successfully!`
    )
  }

  uninstall (packageManager) {
    customCMD.get(
      `${
        packageManager === 'NPM'
          ? `${typesNode.uninstall}`
          : `${typesNodeYarn.uninstall}`
      }`,
      'uninstall',
      `Package(s): @types/node has been uninstalled successfully!`
    )
  }
}

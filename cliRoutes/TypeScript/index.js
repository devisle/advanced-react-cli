const inquirer = require('inquirer')

// CLI Model
const cliModel = require('../../cliModel')

// const addPackage = cliModel.addPackage
const TypeScriptPackages = cliModel.typescriptPackages
const YarnOrNpm = cliModel.YarnOrNpm

// TypeScript & @types imports
const CustomInstall = require('./customInstall')
const TypeScriptInstall = require('./installTypeScript')
const TypesNode = require('./types/node')
const TypesReact = require('./types/react')
const TypesReactRouter = require('./types/reactRouter')
const TypesReactRedux = require('./types/reactRedux')
const TypesJest = require('./types/jest')

const prompt = inquirer.createPromptModule()

/*

  Installs/Uninstalls TypeScript & @types packages

*/

module.exports = class TypeScript {
  prompt () {
    prompt(YarnOrNpm).then(({ packageManager }) => {
      prompt(TypeScriptPackages).then(({ typescriptPackage }) => {
        switch (typescriptPackage) {
          case 'CustomInstall':
            new CustomInstall().prompt(packageManager)
            break

          case 'TypeScript':
            new TypeScriptInstall().installOrUninstall(packageManager)
            break

          case '@types/node':
            new TypesNode().installOrUninstall(packageManager)
            break

          case '@types/react @types/react-dom':
            new TypesReact().installOrUninstall(packageManager)
            break

          case '@types/react-router @types/react-router-dom':
            new TypesReactRouter().installOrUninstall(packageManager)
            break

          case '@types/react-redux':
            new TypesReactRedux().installOrUninstall(packageManager)
            break

          case '@types/jest':
            new TypesJest().installOrUninstall(packageManager)
            break
        }
      })
    })
  }
}

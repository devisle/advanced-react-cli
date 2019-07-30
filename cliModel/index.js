module.exports.cliCommand = [
  {
    type: 'list',
    name: 'installation',
    message: 'What would you like to install?',
    choices: [
      'CustomPackageInstall',
      'CreateReactApp',
      'ReactComponent',
      'ReactRouter',
      'StylingPackages',
      'PropTypes',
      'StateManagement',
      'TypeScript'
    ]
  }
]

module.exports.multiplePackageInstall = [
  {
    type: 'checkbox',
    name: 'packages',
    message:
      'Select packages for your new React Project: (Use Up/Down arrows to navigage, press spacebar to select") ',
    default: ['CreateReactApp'],
    choices: [
      'ReactRouter',
      'Redux',
      'ReduxThunk',
      'Prop-types',
      'NodeSass',
      'StyledComponents',
      'Unstated',
      'Unstated-Next',
      'TypeScript',
      '@types/node',
      '@types/react @types/react-dom',
      '@types/react-router @types/react-router-dom',
      '@types/jest'
    ]
  }
]

module.exports.installOption = [
  {
    type: 'list',
    name: 'decision',
    message: 'Would you like to Install or Uninstall?',
    choices: ['Install', 'Uninstall']
  }
]

// Add new package Yes/No

module.exports.addPackage = [
  {
    type: 'input',
    name: 'packageAdd',
    message: `Would you like to add a package? (Y/N)`
  }
]

// Input name for Install Folder

module.exports.installFolder = [
  {
    type: 'input',
    name: 'folderName',
    message:
      'Please input the name of the folder you would like to create for your project? (Enter a . if for current directory)'
  }
]

// Input name when creating new components for React project

module.exports.componentName = [
  {
    type: 'input',
    name: 'componentName',
    message:
      'Please enter the file name of the component you would like to create: '
  }
]

// React Components selection: Functional/Class

module.exports.reactComponents = [
  {
    type: 'list',
    name: 'component',
    message: 'Function or Class Component?',
    choices: ['function', 'class']
  }
]

// Styling Packages
module.exports.stylingPackages = [
  {
    type: 'list',
    name: 'stylingTool',
    message: 'Please select the Styling Package to add to your project: ',
    choices: ['StyledComponents', 'NodeSass']
  }
]

// React State Management tools: More options soon! ('Unstated', Easy-Peasy')
module.exports.stateManagement = [
  {
    type: 'list',
    name: 'state',
    message:
      'Please select the tool to add to your project for state management: ',
    choices: ['Redux', 'Unstated', 'Redux-Thunk']
  }
]

// Unstated options
module.exports.unstatedOptions = [
  {
    type: 'list',
    name: 'state',
    message:
      'Please select the which version of Unstated you would like to add to your project: ',
    choices: ['Unstated', 'Unstated-next']
  }
]

// TypeScript and Packages
module.exports.typescriptPackages = [
  {
    type: 'list',
    name: 'typescriptPackage',
    message: 'Please select the TypeScript module to add to your project: ',
    choices: [
      'CustomInstall',
      'TypeScript',
      '@types/node',
      '@types/react @types/react-dom',
      '@types/react-router @types/react-router-dom',
      '@types/react-redux',
      '@types/jest'
    ]
  }
]

// Package Manager Options
module.exports.YarnOrNpm = [
  {
    type: 'list',
    name: 'packageManager',
    message: 'Would you like to install using Yarn or NPM?',
    choices: ['Yarn', 'NPM']
  }
]

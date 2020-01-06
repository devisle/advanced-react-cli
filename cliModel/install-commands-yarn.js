/*
  Yarn Install commands
*/

module.exports = {
  createReactAppYarn: 'yarn create react-app',
  TypeScriptReactObjYarn: {
    TypeScriptYarn: {
      install: 'yarn add typescript',
      uninstall: 'yarn remove typescript'
    },
    typesNodeYarn: {
      install: 'yarn add @types/node',
      uninstall: 'yarn remove @types/node'
    },
    typesReactYarn: {
      install: 'yarn add @types/react @types/react-dom',
      uninstall: 'yarn remove @types/react @types/react-dom'
    },
    typesReactRouterYarn: {
      install: 'yarn add @types/react-router @types/react-router-dom',
      uninstall: 'yarn remove @types/react-router @types/react-router-dom'
    },
    typesReactReduxYarn: {
      install: 'yarn add @types/react-redux',
      uninstall: 'yarn remove @types/react-redux'
    },
    typesJestYarn: {
      install: 'yarn add @types/jest',
      uninstall: 'yarn remove @types/jest'
    }
  },
  propTypesObjYarn: {
    install: 'yarn add prop-types',
    uninstall: 'yarn remove prop-types'
  },
  reactRouterObjYarn: {
    install: 'yarn add react-router react-router-dom',
    uninstall: 'yarn remove react-router react-router-dom'
  },
  nodeSassObjYarn: {
    install: 'yarn add node-sass',
    uninstall: 'yarn remove node-sass'
  },
  styledComponentsObjYarn: {
    install: 'yarn add styled-components',
    uninstall: 'yarn remove styled-components'
  },
  reduxObjYarn: {
    install: 'yarn add redux react-redux',
    uninstall: 'yarn remove redux react-redux'
  },
  reduxThunkObjYarn: {
    install: 'yarn add redux-thunk',
    uninstall: 'yarn remove redux-thunk'
  },
  reacta11yObjYarn: {
    install: 'yarn add react-a11y',
    uninstall: 'yarn remove react-a11y'
  },
  reactaxeObjYarn: {
    install: 'yarn add react-axe --dev',
    uninstall: 'yarn remove react-axe'
  },
  unstatedObjYarn: {
    unstatedYarn: {
      install: 'yarn add unstated',
      uninstall: 'yarn remove unstated'
    },
    unstatedNextYarn: {
      install: 'yarn add unstated-next',
      uninstall: 'yarn remove unstated-next'
    }
  }
}

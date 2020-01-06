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
    },
    typesAsyncYarn: {
      install: 'yarn add @types/async',
      uninstall: 'yarn remove @types/async'
    },
    typesCorsYarn: {
      install: 'yarn add @types/cors',
      uninstall: 'yarn remove @types/cors'
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

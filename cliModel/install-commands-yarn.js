/*
  Yarn Install commands
*/

module.exports = {
  createReactAppYarn: "yarn create react-app",
  TypeScriptReactObjYarn: {
    TypeScript: {
      install: "yarn add typescript",
      uninstall: "yarn remove typescript"
    },
    typesNodes: {
      install: "yarn add @types/nodes",
      uninstall: "yarn remove @types/nodes"
    },
    typesReact: {
      install: "yarn add @types/react @types/react-dom",
      uninstall: "yarn remove @types/react @types/react-dom"
    },
    typesReactRouter: {
      install: "yarn add @types/react-router @types/react-router-dom",
      uninstall: "yarn remove @types/react-router @types/react-router-dom"
    },
    typesJest: {
      install: "yarn add @types/jest",
      uninstall: "yarn remove @types/jest"
    }
  },
  propTypesObjYarn: {
    install: "yarn add prop-types",
    uninstall: "yarn remove prop-types"
  },
  reactRouterObjYarn: {
    install: "yarn add react-router react-router-dom",
    uninstall: "yarn remove react-router react-router-dom"
  },
  nodeSassObjYarn: {
    install: "yarn add node-sass",
    uninstall: "yarn remove node-sass"
  },
  styledComponentsObjYarn: {
    install: "yarn add styled-components",
    uninstall: "yarn remove styled-components"
  },
  reduxObjYarn: {
    install: "yarn add redux react-redux",
    uninstall: "yarn remove redux react-redux"
  },
  reduxThunkObjYarn: {
    install: "yarn add redux-thunk",
    uninstall: "yarn remove redux-thunk"
  },
  unstatedObjYarn: {
    unstatedYarn: {
      install: "yarn add unstated",
      uninstall: "yarn remove unstated"
    },
    unstatedNextYarn: {
      install: "yarn add unstated-next",
      uninstall: "yarn remove unstated-next"
    }
  }
};

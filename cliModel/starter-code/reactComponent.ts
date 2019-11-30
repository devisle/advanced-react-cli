const propTypesObject: (
  fileName: string
) => { import: string; declare: string } = fileName => {
  return {
    import: `import PropTypes from 'prop-types'`,
    declare: `${fileName}.PropTypes = {
  ///
  }`
  };
};

const reactRouterObj: () => { import: string; declare: string } = () => {
  return {
    import: `import {BrowserRouter as Route, Router, NavLink} from "react-router-dom"`,
    declare: `Hello World`
  };
};

const reduxObj: () => {
  import: string;
  mapStateToProps: string;
  mapDispatchToProps: string;
  connect: string;
} = () => {
  return {
    import: `import {connect} from 'redux'`,
    mapStateToProps: `const mapStateToProps = state => {
  return {
    // Your code here
  }
}`,
    mapDispatchToProps: `const mapDispatchToProps = dispatch => {
  return {
    // Your code here
  }
} `,
    connect: `connect(mapStateToProps, mapDispatchToProps)`
  };
};

const ComponentGenerator: (
  componentType: string,
  fileName: string,
  propTypes: boolean,
  reactRouter: boolean,
  Redux: boolean
) => string = (componentType, fileName, propTypes, reactRouter, Redux) => {
  //Function Component
  let propTyping, reactRouting, reactRedux;
  propTypes === true ? (propTyping = propTypesObject(fileName)) : null;
  reactRouter === true ? (reactRouting = reactRouterObj()) : null;
  Redux === true ? (reactRedux = reduxObj()) : null;
  if (componentType === "function") {
    return `import React from "react";
    ${propTyping ? propTyping.import : ""}
    ${reactRouting ? reactRouting.import : ""}
    ${reactRedux ? reactRedux.import : ""}

    const ${fileName} = (props) => {
      return (
        <div>
        Hello World
        </div>
        );
      };

      ${propTyping ? propTyping.declare : ""}
      ${reactRedux ? reactRedux.mapStateToProps : ""}
      ${reactRedux ? reactRedux.mapDispatchToProps : ""}

      export default ${reactRedux ? reactRedux.connect : ""}(${fileName});`;
  }

  // Class Component
  else if (componentType === "class") {
    let propTyping, reactRouting, reactRedux;
    propTypes === true ? (propTyping = propTypesObject(fileName)) : null;
    reactRouter === true ? (reactRouting = reactRouterObj()) : null;
    Redux === true ? (reactRedux = reduxObj()) : null;
    return `import React, { Component } from 'react'
      ${propTyping ? propTyping.import : ""}
      ${reactRouting ? reactRouting.import : ""}
      ${reactRedux ? reactRedux.import : ""}

      class ${fileName} extends Component {
        constructor(props) {
          super(props);
        }

        state = {
          // Declare your component state here
  }

  render() {
    return (
      <div>
      <h2>Class Component</h2>
      </div>
      )
    }
  }

  ${propTyping ? propTyping.declare : ""}
  ${reactRedux ? reactRedux.mapStateToProps : ""}
  ${reactRedux ? reactRedux.mapDispatchToProps : ""}

  export default ${reactRedux ? reactRedux.connect : ""}(${fileName});`;
  }
};

module.exports = ComponentGenerator;

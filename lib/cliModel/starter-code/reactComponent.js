'use strict'

var propTypesObject = function propTypesObject (fileName) {
  return {
    import: "import PropTypes from 'prop-types'",
    declare: ''.concat(fileName, '.PropTypes = {\n  ///\n  }')
  }
}

var reactRouterObj = function reactRouterObj () {
  return {
    import:
      'import {BrowserRouter as Route, Router, NavLink} from "react-router-dom"',
    declare: 'Hello World'
  }
}

var reduxObj = function reduxObj () {
  return {
    import: "import {connect} from 'redux'",
    mapStateToProps:
      'const mapStateToProps = state => {\n  return {\n    // Your code here\n  }\n}',
    mapDispatchToProps:
      'const mapDispatchToProps = dispatch => {\n  return {\n    // Your code here\n  }\n} ',
    connect: 'connect(mapStateToProps, mapDispatchToProps)'
  }
}

module.exports = function (
  componentType,
  fileName,
  propTypes,
  reactRouter,
  Redux
) {
  //Function Component
  var propTyping, reactRouting, reactRedux
  propTypes === true ? (propTyping = propTypesObject(fileName)) : null
  reactRouter === true ? (reactRouting = reactRouterObj()) : null
  Redux === true ? (reactRedux = reduxObj()) : null

  if (componentType === 'function') {
    return 'import React from "react";\n'
      .concat(propTyping ? propTyping['import'] : '', '\n')
      .concat(reactRouting ? reactRouting['import'] : '', '\n')
      .concat(reactRedux ? reactRedux['import'] : '', '\n\nconst ')
      .concat(
        fileName,
        ' = (props) => {\n  return (\n    <div>\n      Hello World\n    </div>\n  );\n};\n\n'
      )
      .concat(propTyping ? propTyping.declare : '', '\n')
      .concat(reactRedux ? reactRedux.mapStateToProps : '', '\n')
      .concat(
        reactRedux ? reactRedux.mapDispatchToProps : '',
        '\n\nexport default '
      )
      .concat(reactRedux ? reactRedux.connect : '', '(')
      .concat(fileName, ');')
  } // Class Component
  else if (componentType === 'class') {
    var _propTyping, _reactRouting, _reactRedux

    propTypes === true ? (_propTyping = propTypesObject(fileName)) : null
    reactRouter === true ? (_reactRouting = reactRouterObj()) : null
    Redux === true ? (_reactRedux = reduxObj()) : null
    return "import React, { Component } from 'react'\n"
      .concat(_propTyping ? _propTyping['import'] : '', '\n')
      .concat(_reactRouting ? _reactRouting['import'] : '', '\n')
      .concat(_reactRedux ? _reactRedux['import'] : '', '\n\nclass ')
      .concat(
        fileName,
        ' extends Component {\n  constructor(props) {\n    super(props);\n  }\n\n  state = {\n    // Declare your component state here\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>Class Component</h2>\n      </div>\n    )\n  }\n}\n\n'
      )
      .concat(_propTyping ? _propTyping.declare : '', '\n')
      .concat(_reactRedux ? _reactRedux.mapStateToProps : '', '\n')
      .concat(
        _reactRedux ? _reactRedux.mapDispatchToProps : '',
        '\n\nexport default '
      )
      .concat(_reactRedux ? _reactRedux.connect : '', '(')
      .concat(fileName, ');')
  }
}

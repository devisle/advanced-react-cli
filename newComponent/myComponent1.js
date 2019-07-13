import React from "react";
import PropTypes from 'prop-types'
import {BrowserRouter as Route, Router, NavLink} from "react-router-dom
import {connect} from 'redux'

const myComponent1 = () => {
  return (
    <div>
      Hello World
    </div>
  );
};

myComponent1.PropTypes = {
  ///
  }
const mapStateToProps = state => {
  return {
    // Your code here
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // Your code here
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(myComponent1);
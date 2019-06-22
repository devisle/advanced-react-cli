import { createStore } from "redux";

const initialState = {
  // Declare your state here
};

// Your reducer
const reducer = (state = initialState, action) => {
  //Use Switch statements
  switch(action.type){
    case '':
    //You usually perform a state change and return it
    default:
      return state;
  }
}

// Add the below code within these comment blocks,
//to your respective files where you would like to have redux

const mapStateToProps = state => {
  return {
    //Write your code here which connects the state of this component,
    //to the Redux Store you have passed as props.
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //Write your code here which dispatches information to your reducer
  };
};
// End

// Create the store
const store = createStore(reducer);

//Exporting the Store
export default store;

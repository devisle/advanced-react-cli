const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");

// Cli Install Commands
const installCommands = require("../cli model/install-commands");
const stateOption = cliModel.stateManagement;

const prompt = inquirer.createPromptModule();

const stateManagement = () => {
  prompt(stateOption).then(({ state }) => {
    if (state === "Redux") {
      fs.mkdir("./store", err => {
        if (err) throw err;
      });
      cmd.get(`cd store && touch store.js`);
      const writeStream = fs.createWriteStream("./store/store.js");
      writeStream.write(`import { createStore } from "redux";

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
`);
      console.log("Redux Store has been created successfully!");
    }
  });
};

module.exports = stateManagement;

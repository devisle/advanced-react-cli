const inquirer = require("inquirer");
const cmd = require("node-cmd");
const fs = require("fs");

// Cli Model
const cliModel = require("../cli model/cli-model");
const addPackage = cliModel.addPackage;
const installFolder = cliModel.installFolder;

// Cli Install Commands
const {
  createReactApp,
  reactRouterObj,
  reduxObj
} = require("../cli model/install-commands");

const prompt = inquirer.createPromptModule();

const Reduxing = `import { createStore } from "redux";

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
 `;

const cra = () => {
  prompt({
    ...installFolder[0],
    message:
      "Please input the name of the folder you would like to create for your project? (Enter a folder name, e.g. 'my-app')"
  }).then(({ folderName }) => {
    if (folderName.length > 1) {
      // Prompts to install React Router
      prompt({
        ...addPackage[0],
        message: "Would you like to add React-Router?"
      }).then(({ packageAdd }) => {
        if (packageAdd === "y" || packageAdd === "Y" || packageAdd === "yes" || packageAdd === "Yes") {
          // Prompts to install Redux
          prompt({
            ...addPackage[0],
            message: "Would you like to add Redux?"
          }).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y" || packageAdd === "yes" || packageAdd === "Yes") {
              // Installs CRA , React Router and Redux + Redux Store
              fs.appendFile("store.js", Reduxing, err => {
                if (err) throw err;
              });
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reactRouterObj.install
                } && ${
                  reduxObj.install
                } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N" || packageAdd === "No" || packageAdd === "no") {
              // Installs CRA and React Router
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reactRouterObj.install
                }`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
          // If 'n' for React Router, prompts to install Redux
        } else if (packageAdd === "n" || packageAdd === "N" || packageAdd === "No" || packageAdd === "no") {
          // Prompts to Install Redux
          prompt({
            ...addPackage[0],
            message: "Would you like to add Redux?"
          }).then(({ packageAdd }) => {
            if (packageAdd === "y" || packageAdd === "Y" || packageAdd === "yes" || packageAdd === "Yes") {
              fs.appendFile("store.js", Reduxing, err => {
                if (err) throw err;
              });
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} . && ${
                  reduxObj.install
                } && mkdir store && cd store && touch store.js && cat < ../../store.js > store.js && cd .. && cd .. && rm store.js `,
                (err, data, stderr) => console.log(data)
              );
            } else if (packageAdd === "n" || packageAdd === "N" || packageAdd === "No" || packageAdd === "no") {
              // If 'no' for Redux and React Router, it installs just CRA.
              cmd.get(
                ` mkdir ${folderName} && cd ${folderName} && ${createReactApp} .`,
                (err, data, stderr) => console.log(data)
              );
            }
          });
        }
      });
    } else {
      console.log(
        "You must specify the installation directory! (Enter a folder name, e.g. 'my-app', Or Enter '.' to install in current directory) "
      );
    }
  });
};

module.exports = cra;

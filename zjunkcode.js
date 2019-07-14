// The code below will be under review. Fix is necessary

// else if (folderName === ".") {
//   // Prompts to install React Router
//   prompt({
//     ...addPackage[0],
//     message: "Would you like to add React-Router?"
//   }).then(({ packageAdd }) => {
//     if (packageAdd === "y" || packageAdd === "Y") {
//       // Prompts to install Redux
//       prompt({
//         ...addPackage[0],
//         message: "Would you like to add Redux?"
//       }).then(({ packageAdd }) => {
//         if (packageAdd === "y" || packageAdd === "Y") {
//           cmd.get(
//             ` ${createReactApp} . && ${reactRouterObj.install} && ${
//               reduxObj.install
//             }`,
//             (err, data, stderr) => console.log(data)
//           );
//         } else if (packageAdd === "n" || packageAdd === "N") {
//           // If 'no' for Redux, It installs only CRA and React Router
//           cmd.get(
//             ` ${createReactApp} . && ${reactRouterObj.install}`,
//             (err, data, stderr) => console.log(data)
//           );
//         }
//       });
//     } else if (packageAdd === "n" || packageAdd === "N") {
//       // If No for React Router, it prompts to install Redux

//       prompt({
//         ...addPackage[0],
//         message: "Would you like to add Redux?"
//       }).then(({ packageAdd }) => {
//         if (packageAdd === "y" || packageAdd === "Y") {
//           cmd.get(
//             ` ${createReactApp} . && ${reduxObj.install}`,
//             (err, data, stderr) => console.log(data)
//           );
//         } else if (packageAdd === "n" || packageAdd === "N") {
//           // If 'n' for React Router and Redux, it installs only CRA
//           cmd.get(` ${createReactApp} .`, (err, data, stderr) =>
//             console.log(data)
//           );
//         }
//       });
//     }
//   });
// }

/* module.exports.cliCommand = [
  {
    type: "expand",
    name: "installation",
    message: "What would you like to install?",
    key: "a",
    choices: [
      { key: "a", name: "create-react-app", value: "create-react-app" },
      { key: "b", name: "react-component", value: "react-component" },
      { key: "c", name: "react-router", value: "react-router" },
      { key: "d", name: "node-sass", value: "node-sass" },
      { key: "e", name: "prop-types", value: "prop-types" },
      { key: "f", name: "state-management", value: "state-management" }
    ]
  }
];

*/

// ReactRouter.js junk files

/* const reactRouter = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${reactRouterObj.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been installed successfully!"
      );
    } else if (decision === "Uninstall") {
      cmd.get(`${reactRouterObj.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been uninstalled successfully!"
      );
    }
  });
};

module.exports = reactRouter;

const reactRouter = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${reactRouterObj.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been installed successfully!"
      );
    } else if (decision === "Uninstall") {
      cmd.get(`${reactRouterObj.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been uninstalled successfully!"
      );
    }
  });
};
*/

// Node Sass

/*
const nodeSass = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${nodeSassObj.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log("Package: node-sass has been installed successfully!");
    } else if (decision === "Uninstall") {
      cmd.get(`${nodeSassObj.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log("Package: node-sass has been uninstalled successfully!");
    }
  });
};
*/

// PropTypes
/*
const propTypes = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${propTypesObj.install}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      fs.mkdir("./propTypes", err => {
        if (err) throw err;
      });
      cmd.get(`cd propTypes && touch propTypes.js`);
      const writeStream = fs.createWriteStream("./propTypes/propTypes.js");
      writeStream.write(`${propTypeBoilerPlate}`);
      console.log("Package: prop-types has been installed successfully!");
      console.log("PropTypes Folder has been created!");
    } else if (decision === "Uninstall") {
      cmd.get(`${propTypesObj.uninstall}`, (err, data, stderr) => {
        err ? console.log(err) : console.log(stderr, data);
      });
      console.log("Package: prop-types has been uninstalled successfully!");
    }
  });
};

module.exports = propTypes;
*/

/* StateManagement

// const stateManagement = () => {
//   prompt(stateOption).then(({ state }) => {
//     // Redux
//     if (state === "Redux") {
//       prompt(installOption).then(({ decision }) => {
//         if (decision === "Install") {
//           cmd.get(`${reduxObj.install}`, (err, data, stderr) => {
//             err ? console.log(err) : console.log(stderr, data);
//           });
//           fs.mkdir("./store", err => {
//             if (err) throw err;
//           });
//           cmd.get(`cd store && touch store.js`);
//           const writeStream = fs.createWriteStream("./store/store.js");
//           writeStream.write(`${ReduxBoilerPlate}`);
//           console.log(
//             "Packages: redux & react-redux has been installed successfully!"
//           );
//           console.log("Redux Store has been created successfully!");
//         } else if (decision === "Uninstall") {
//           cmd.get(`${reduxObj.uninstall}`, (err, data, stderr) => {
//             err ? console.log(err) : console.log(stderr, data);
//           });
//           console.log(
//             "Packages: redux & react-redux has been uninstalled successfully!"
//           );
//         }
//       });
//     }
//     // Unstated
//     else if (state === "Unstated") {
//       prompt(unstatedOption).then(({ state }) => {
//         if (state === "Unstated") {
//           prompt(installOption).then(({ decision }) => {
//             if (decision === "Install") {
//               cmd.get(`${unstated.install}`, (err, data, stderr) => {
//                 err ? console.log(err) : console.log(stderr, data);
//               });
//               console.log(
//                 "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
//               );
//               console.log("Package: Unstated has been installed!");
//             } else {
//               cmd.get(`${unstated.uninstall}`, (err, data, stderr) => {
//                 err ? console.log(err) : console.log(stderr, data);
//               });
//               console.log("Package: Unstated has been uninstalled!");
//             }
//           });
//         } else if (state === "Unstated-next") {
//           prompt(installOption).then(({ decision }) => {
//             if (decision === "Install") {
//               cmd.get(`${unstatedNext.install}`, (err, data, stderr) => {
//                 err ? console.log(err) : console.log(stderr, data);
//               });
//               console.log(
//                 "Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next "
//               );
//               console.log("Package: Unstated-next has been installed!");
//             } else {
//               cmd.get(`${unstatedNext.uninstall}`, (err, data, stderr) => {
//                 err ? console.log(err) : console.log(stderr, data);
//               });
//               console.log("Package: Unstated-next has been uninstalled!");
//             }
//           });
//         }
//       });
//     }
//     // Redux-Think
//     else if (state === "Redux-Thunk") {
//       prompt(installOption).then(({ decision }) => {
//         if (decision === "Install") {
//           cmd.get(`${reduxThunkObj.install}`, (err, data, stderr) => {
//             err ? console.log(err) : console.log(stderr, data);
//           });
//           console.log("Package: Redux-Thunk has been installed!");
//           console.log(
//             "Check out more on how to get started with Redux-Thunk on the following links https://github.com/reduxjs/redux-thunk "
//           );
//         } else {
//           cmd.get(`${reduxThunkObj.uninstall}`, (err, data, stderr) => {
//             err ? console.log(err) : console.log(stderr, data);
//           });
//           console.log("Package: Redux-Thunk has been uninstalled!");
//         }
//       });
//     }
//   });
// };

// module.exports = stateManagement;

*/

/* reactComponent

// const reactComponent = () => {
//   prompt(reactComponents).then(({ component }) => {
//     prompt(componentName).then(({ componentName }) => {
//       prompt(installFolder).then(({ folderName }) => {
//         prompt({
//           ...addPackage[0],
//           message: "Would you like to add PropTypes? : (Y/N)"
//         }).then(({ packageAdd }) => {
//           let propTypingBool;
//           propTypingBool = ["yes", "y", ""].includes(packageAdd.toLowerCase())
//             ? true
//             : false;
//           prompt({
//             ...addPackage[0],
//             message: "Would you like to add react-router? : (Y/N)"
//           }).then(({ packageAdd }) => {
//             let reactRouterBool;
//             reactRouterBool = ["yes", "y", ""].includes(
//               packageAdd.toLowerCase()
//             )
//               ? true
//               : false;
//             prompt({
//               ...addPackage[0],
//               message: "Would you like to add Redux? : (Y/N)"
//             }).then(({ packageAdd }) => {
//               let reduxBool;
//               reduxBool = ["yes", "y", ""].includes(packageAdd.toLowerCase())
//                 ? true
//                 : false;
//               //Function Component
//               if (component === "function") {
//                 if ([".", ""].includes(folderName)) {
//                   const writeStream = fs.createWriteStream(
//                     `./${componentName}.js`
//                   );
//                   const fileData = componentCode(
//                     `${component}`,
//                     `${componentName}`,
//                     propTypingBool,
//                     reactRouterBool,
//                     reduxBool
//                   );
//                   writeStream.write(fileData);
//                   console.log(
//                     `File Creation: Function component ${componentName} has been created successfully!`
//                   );
//                 } else {
//                   fs.mkdir(`./${folderName}`, { recursive: false }, err => {
//                     if (err) throw err;
//                   });
//                   const writeStream = fs.createWriteStream(
//                     `./${folderName}/${componentName}.js`
//                   );
//                   const fileData = componentCode(
//                     `${component}`,
//                     `${componentName}`,
//                     propTypingBool,
//                     reactRouterBool,
//                     reduxBool
//                   );
//                   writeStream.write(fileData);
//                   console.log(
//                     `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
//                   );
//                 }
//               }

//               //Class Component
//               else if (component === "class") {
//                 if ([".", ""].includes(folderName)) {
//                   const writeStream = fs.createWriteStream(
//                     `./${componentName}.js`
//                   );
//                   const fileData = componentCode(
//                     `${component}`,
//                     `${componentName}`,
//                     propTypingBool,
//                     reactRouterBool,
//                     reduxBool
//                   );
//                   writeStream.write(fileData);
//                   console.log(
//                     `File Creation: Class component ${component} has been created successfully!`
//                   );
//                 } else {
//                   fs.mkdir(`./${folderName}`, { recursive: false }, err => {
//                     if (err) throw err;
//                   });
//                   const writeStream = fs.createWriteStream(
//                     `./${folderName}/${componentName}.js`
//                   );
//                   const fileData = componentCode(
//                     `${component}`,
//                     `${componentName}`,
//                     propTypingBool,
//                     reactRouterBool,
//                     reduxBool
//                   );
//                   writeStream.write(fileData);
//                   console.log(
//                     `File Creation: Function component ${component} in the folder ${folderName} has been created successfully!`
//                   );
//                 }
//               }
//             });
//           });
//         });
//       });
//     });
//   });
// };

// module.exports = reactComponent;

*/

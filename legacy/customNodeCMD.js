// exec(
//   //Why exec and code below is greyed out?
//   command,
//   (function() {
//     switch (installOrUninstall) {
//       case "install":
//         // install.start()

//         // console.log(install.start())
//         return function(err, data, stderr) {
//           if (!callback) {
//             return;
//           }
//           setTimeout(() => {
//             install.color = "green";
//           }, 3000);
//           process.stdout.write("\n");
//           callback(err, { data }, { stderr });
//           // console.log('\x1b[33m%s\x1b[0m', data);  //yellow

//           process.exit();
//           install.succeed();
//         };
//         break;

//       case "uninstall":
//         uninstall.start();
//         return function(err, data, stderr) {
//           if (!callback) {
//             return;
//           }
//           setTimeout(() => {
//             uninstall.color = "green";
//           }, 3000);
//           // callback(err, { data }, { stderr });
//           process.stdout.write("\n");
//           callback(err, { data }, { stderr });
//           process.exit();
//           uninstall.succeed();
//         };
//     }
//   })(callback)
// );

module.exports = class Unstated {
  installOrUninstall() {
    if (state === "Unstated") {
      prompt(installOption).then(({ decision }) => {
        if (decision === "Install") {
          this.install();
        } else {
          this.uninstall();
        }
      });
    }
  }

  install() {
    cmd.get(`${unstated.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
    );
    console.log("Package: Unstated has been installed!");
  }

  uninstall() {
    cmd.get(`${unstated.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Unstated has been uninstalled!");
  }
};

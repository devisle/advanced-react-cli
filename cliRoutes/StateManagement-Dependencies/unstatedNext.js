module.exports = class UnstatedNext {
  installOrUninstall() {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install();
      } else {
        this.uninstall();
      }
    });
  }

  install() {
    cmd.get(`${unstatedNext.install}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log(
      "Check out more on how to get started with unstated-next on the following link https://github.com/jamiebuilds/unstated-next "
    );
    console.log("Package: Unstated-next has been installed!");
  }

  uninstall() {
    cmd.get(`${unstatedNext.uninstall}`, (err, data, stderr) => {
      err ? console.log(err) : console.log(stderr, data);
    });
    console.log("Package: Unstated-next has been uninstalled!");
  }
};

# Advanced React CLI (under development)

[![package-version](https://img.shields.io/npm/v/advanced-react-cli.svg?color=blue)](https://www.npmjs.com/package/advanced-react-cli)
[![downloads](https://img.shields.io/npm/dw/advanced-react-cli.svg)](https://www.npmjs.com/package/advanced-react-cli)

This is an npm package which aims to provide a better way to install a React starter application and third-party packages for your application through an intuitive CLI.

## Project's Purpose

We at DevIsle, felt that the community has been longing for a good, functional and intuitive CLI rather than always writing on the terminal command line.

**Note**: We do not discourage or refrain the community from using terminal commands instructions. In fact, we highly recommend our users to read and understand the docs so that you will know what to expect. This CLI is merely an alternative!

## Credits

This CLI uses some of the best GitHub repos' terminal commands under the hood, to execute it's functionality. We would like to credit the following GitHub repos making this CLI possible:

- [Facebook - Create React App](https://github.com/facebook/create-react-app)
- [Facebook - Prop Types](https://github.com/facebook/prop-types)
- [Redux - Redux, React-Redux and Redux-Thunk](https://github.com/reduxjs)
- [SASS - Node-Sass](https://github.com/sass/node-sass)
- [ReactTraining - React-Router](https://github.com/ReactTraining/react-router)
- [Jamie Kyle - Unstated](https://github.com/jamiebuilds/unstated)
- [Jamie Kyle - Unstated-next](https://github.com/jamiebuilds/unstated-next)
- [Brandon Nozaki Miller - Node-CMD](https://github.com/RIAEvangelist/node-cmd)
- [Simon Boudrias - Inquirer JS](https://github.com/SBoudrias/Inquirer.js/)
- [Nathan Peck - CLUI](https://www.npmjs.com/package/clui)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Dave Eddy - Clear](https://github.com/bahamas10/node-clear)
- [Patorjk - Figlet](https://github.com/patorjk/figlet.js)

**Be sure to check the above repos out if you're facing any issues! We are of course, always open to improvements.**

## Try out the Advanced-React-CLI

**The Yarn functionality is still being tested. To be on safer side, install the package using NPM.**

Just type in the following command in your terminal and run it! (Please check FAQ for more on testing and contributions)

- NPM/NPX -> `npx advanced-react-cli`

## Installing the CLI globally

- NPM
  `npm i -g advanced-react-cli`

- Yarn
  `yarn global add advanced-react-cli`

- To invoke the CLI [Both NPM & Yarn]
  `arc`

## What does this do?

It is still under development. But, as of this current beta version, we have enabled a few options like:

- Installing React using `create-react-app`, with optional packages React Router and Redux as a single bundle.
- Installing Individual packages such as Node-Sass, React-Router, Prop Types, and State Management.
- Redux, Unstated, Unstated-Next and Redux-Thunk have been added in the State Management.
- Installing Redux automatically generates a store folder containing boiler-plate Redux code with instructions to get you started!
- Installing Prop Types automatically generates a file containing a sample code to get started!

# FAQs

1.  How can I test this out?

- Currently we are Beta testing the CLI. If you'd like to try it out , Run the following command `npx advanced-react-cli` in your terminal.
- We are still continuing to work on our [Development Checklist](https://github.com/devisle/advanced-react-cli/blob/master/docs/README.md).

- Ensure you have git version control, and package manager - either npm (node package manager) or Yarn Installed. You may check if your system has them installed by running the following commands `git --version` and depending on your package manager of choice, run `npm --version` or `yarn --version`. If you don't have it installed, please visit

  - [Git](https://git-scm.com/downloads) to download/install git.
  - [NodeJS](https://nodejs.org/en/download/) to download/install Node.Js (NPM gets installed with Node.Js).
  - [Yarn](https://yarnpkg.com/en/docs/getting-started) to download/install Yarn Package Manager

- Alternatively, if you would like to contribute and test it locally, you may fork the repo, and/or clone it to your local desktop. Once you've done that, open the terminal in that local folder and run the command [NPM Users] `npm install` or [Yarn Users]`yarn install` to install the required dependencies.
- After that, you may open the folder in your editor of choice. Once again, in the terminal you may simply run [NPM Users]`npm run react-cli` or [Yarn Users] `yarn run react-cli` to get it working. And voila!

2.  Can I report any issues or bugs with the CLI? How do I report it?

- We appreciate all the reports on bugs or issues from the community!
- You may report an issue by going to this [Link - Issues](https://github.com/devisle/advanced-react-cli/issues) and clicking on the "New Issue" button highlighted in green.
- If you wish to get in touch with us quicker, you may join our Discord server! The link is under the "Dev Isle Community" section

## License

The source code is released under the [GPL-3.0 License](https://github.com/devisle/advanced-react-cli/blob/master/LICENSE).

## Dev Isle Community

Are interested in hanging out, contributing to our open-source repos and be a part of a good community? We would love for you to join us on our [Discord](http://discord.gg/MSTQKRE).

### More info coming soon

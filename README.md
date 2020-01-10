<h1 align="center">
  <img src="https://user-images.githubusercontent.com/39559256/71696217-1275cb80-2dbd-11ea-8847-228f0e615c3d.PNG" alt="Advanced-React-CLI">
</h1>

[![version](https://img.shields.io/npm/v/advanced-react-cli.svg?color=blue)](https://www.npmjs.com/package/advanced-react-cli) [![downloads](https://img.shields.io/npm/dw/advanced-react-cli.svg)](https://www.npmjs.com/package/advanced-react-cli) [![build](https://img.shields.io/travis/devisle/advanced-react-cli)](https://travis-ci.org/devisle/advanced-react-cli)

## Table of Contents

- [About](#about)
- [Project's purpose](#projects-purpose)
- [Credits](#credits)
- [Run the CLI](#run-the-cli)
- [Installing the CLI globally](#installing-the-cli-globally)
- [Packages](#packages)
- [Running tests](#running-tests)
- [Contributing](CONTRIBUTING.md)
- [Development Checklist](https://github.com/devisle/advanced-react-cli/tree/master/docs)
- [What does this do?](#what-does-this-do)
- [FAQs](#faqs)
- [Dev Isle community](#dev-isle-community)
- [License](https://github.com/devisle/advanced-react-cli/blob/master/LICENSE)

## About

This is an npm package which aims to provide a better way to install a React starter application and third-party packages for your application through an intuitive CLI.

## Project's Purpose

We at Dev Isle, felt that the community has been longing for a good, functional and intuitive CLI rather than always writing on the terminal command line.

**Note**: We do not discourage or refrain the community from using terminal commands instructions. In fact, we highly recommend our users to read and understand the docs so that you will know what to expect. This CLI is merely an alternative!

## Credits

This CLI uses some of the best repos' terminal commands under the hood, to execute it's functionality. We would like to credit the following GitHub repos by making this CLI possible:

- [Brandon Nozaki Miller - Node-CMD](https://github.com/RIAEvangelist/node-cmd)
- [Simon Boudrias - Inquirer JS](https://github.com/SBoudrias/Inquirer.js/)
- [Nathan Peck - CLUI](https://www.npmjs.com/package/clui)
- [Dave Eddy - Clear](https://github.com/bahamas10/node-clear)
- [Patorjk - Figlet](https://github.com/patorjk/figlet.js)
- [Sindre Sorhus - Ora](https://github.com/sindresorhus/ora)
- [Chalk](https://www.npmjs.com/package/chalk)

**Be sure to check the above repos out if you're facing any issues! We are of course, always open to improvements.**

## Run the CLI

Just type in the following command in your terminal and run it! (Please check FAQ for more on testing and contributions)

- NPX: `npx advanced-react-cli`

## Installing the CLI globally

- NPM:
  `npm i -g advanced-react-cli`

- Yarn:
  `yarn global add advanced-react-cli`

- To invoke the CLI (Both **NPM** & **Yarn**)
  `arc`

## Packages

This CLI currently has these packages available for download:

- [Create-React-App](https://github.com/facebook/create-react-app)
- [React-Router & React-Router-Dom](https://github.com/ReactTraining/react-router)
- [Redux](https://github.com/reduxjs/redux) & [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [Prop-Types](https://github.com/facebook/prop-types)
- [Node-Sass](https://github.com/sass/node-sass)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Unstated](https://github.com/jamiebuilds/unstated)
- [Unstated-Next](https://github.com/jamiebuilds/unstated-next)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [React-A11y](https://github.com/reactjs/react-a11y)
- [React-Axe](https://github.com/dequelabs/react-axe)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/react-redux](https://www.npmjs.com/package/@types/react-redux)
- [@types/react](https://www.npmjs.com/package/@types/react) & - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@types/react-router](https://www.npmjs.com/package/@types/react-router) & - [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom)
- [@types/jest](https://www.npmjs.com/package/@types/jest)

## Running tests

Test:

 ```sh
 npm run test or yarn test
 ```

Test coverage:

```sh
npm run test:coverage or yarn test:coverage
```

## What does this do?

We are continuously working on improving the CLI. But, as of this current stable version, we have enabled a few options such as:

- Yarn/NPM option for installation packages
- Installing React using `create-react-app`, with optional packages React-Router and Redux as a single bundle.
- React Component generator lets you make a class/function component with optional package imports such as prop-types, react-router and redux!
- Installing Individual packages such as Node-Sass, Styled-Components, React-Router, Prop-Types, and State Management.
- Redux, Unstated, Unstated-Next and Redux-Thunk have been added in the State Management.
- Installing Redux automatically generates a store folder containing boilerplate Redux code with instructions to get you started!
- Installing Prop-Types automatically generates a file containing a sample code to get started!
- Node-Sass and Styled-Components feature under StyledPackages section of the CLI
- Installing packages used for accesibility such as React-A11y and React-Axe.
- TypeScript and `@types` definitions for Node, React, React-Router, React-Redux and Jest

# FAQs

1. How can I test this out?

- If you'd like to try it out , Run the following command `npx advanced-react-cli` in your terminal.
- We are still continuing to work on our [Development Checklist](https://github.com/devisle/advanced-react-cli/tree/master/docs).

- Ensure you have git version control, and package manager - either npm (node package manager) or Yarn Installed. You may check if your system has them installed by running the following commands `git --version` and depending on your package manager of choice, run `npm --version` or `yarn --version`. If you don't have it installed, please visit:

  - [Git](https://git-scm.com/downloads) to download/install git.
  - [NodeJS](https://nodejs.org/en/download/) to download/install Node.Js (NPM gets installed with Node.Js).
  - [Yarn](https://yarnpkg.com/en/docs/getting-started) to download/install Yarn Package Manager

- Alternatively, if you would like to contribute and test it locally, you may fork the repo, and/or clone it to your local desktop. Once you've done that, open the terminal in that local folder and run the command `npm install` for **NPM users** or `yarn install` for **Yarn users** to install the required dependencies.
- After that, you may open the folder in your editor of choice. Once again, in the terminal you may simply run `npm run react-cli` or `yarn run react-cli` to get it working. And voila!

2. Can I report any issues or bugs with the CLI? How do I report it?

- We appreciate all the reports on bugs or issues from the community!
- You may report an issue by going to this [Here](https://github.com/devisle/advanced-react-cli/issues/new/choose) and next to the "Bug Report", click the button "Get Started"!
- If you wish to get in touch with us quicker, you may join our Discord server! The link is under the "Dev Isle Community" section

3. I would like to make a feature request. Where do I do it?

- We are open to your suggestions for the CLI!
- If you'd like to make a new feature request, just head over [here](https://github.com/devisle/advanced-react-cli/issues/new/choose) and next to the "Feature Request", click the button "Get Started"!

4. I would like to make a pull request. How can I do it?

- We are open to pull requests for the CLI!
- Before making a pull request, be sure to read the [contribution guidelines](https://github.com/devisle/advanced-react-cli/blob/master/CONTRIBUTING.md) that also have the pull request guide.

## Dev Isle Community

Are you interested in hanging out, contributing to our open-source repos and be a part of a good community? We would love for you to join us on our [Discord](http://discord.gg/MSTQKRE).

## License

The source code is released under the [GPL-3.0 License](https://github.com/devisle/advanced-react-cli/blob/master/LICENSE).

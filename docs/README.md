## About

This is an npm package which aims to provide a better way to install a React starter application and third-party packages for your application through an intuitive CLI.

### Project's Purpose

We at Dev Isle, felt that the community has been longing for a good, functional and intuitive CLI rather than always writing on the terminal command line.

**Note**: We do not discourage or refrain the community from using terminal commands instructions. In fact, we highly recommend our users to read and understand the docs so that you will know what to expect. This CLI is merely an alternative!

### What does this do?

We are continuously working on improving the CLI. But, as of this current stable version, we have enabled a few options such as:

- Yarn/NPM option for installation packages.
- Installing React using `create-react-app`, with optional packages React-Router and Redux as a single bundle.
- React Component generator lets you make a class/function component with optional package imports such as prop-types, react-router and redux!
- Installing Individual packages such as Node-Sass, Styled-Components, React-Router, Prop-Types, and State Management.
- Redux, Unstated, Unstated-Next and Redux-Thunk have been added in the State Management.
- Installing Redux automatically generates a store folder containing boilerplate Redux code with instructions to get you started!
- Installing Prop-Types automatically generates a file containing a sample code to get started!
- Node-Sass and Styled-Components feature under StyledPackages section of the CLI.
- Installing packages used for accessibility such as React-A11y and React-Axe.
- TypeScript and `@types` definitions for Node, React, React-Router, React-Redux and Jest.

#### Packages available for installation

The CLI currently has these packages available for installation:

- [Create-React-App](https://www.npmjs.com/package/create-react-app)
- [React-Router](https://www.npmjs.com/package/react-router) & [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [Redux](https://www.npmjs.com/package/redux) & [React-Redux](https://www.npmjs.com/package/react-redux)
- [Redux-Thunk](https://www.npmjs.com/package/redux-thunk)
- [Prop-Types](https://www.npmjs.com/package/prop-types)
- [Node-Sass](https://www.npmjs.com/package/node-sass)
- [Styled-Components](https://www.npmjs.com/package/styled-components)
- [Unstated](https://www.npmjs.com/package/unstated)
- [Unstated-Next](https://www.npmjs.com/package/unstated-next)
- [TypeScript](https://www.npmjs.com/package/typescript)
- [React-A11y](https://www.npmjs.com/package/react-a11y)
- [React-Axe](https://www.npmjs.com/package/react-axe)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/react-redux](https://www.npmjs.com/package/@types/react-redux)
- [@types/react](https://www.npmjs.com/package/@types/react) & [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@types/react-router](https://www.npmjs.com/package/@types/react-router) & [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom)
- [@types/jest](https://www.npmjs.com/package/@types/jest)

## Getting started

### What do you need?

Ensure you have git version control, and package manager - either npm (node package manager) or Yarn Installed. You may check if your system has them installed by running the following commands `git --version` and depending on your package manager of choice, run `npm --version` or `yarn --version`. If you don't have it installed, please visit:

- [Git](https://git-scm.com/downloads) to download/install git.
- [NodeJS](https://nodejs.org/en/download/) to download/install Node.Js (NPM gets installed with Node.Js).
- [Yarn](https://yarnpkg.com/en/docs/getting-started) to download/install Yarn Package Manager

### Run the CLI

Run the following command:

```sh
npx advanced-react-cli
```

### Installing the CLI globally

#### NPM

```sh
npm i -g advanced-react-cli
```

#### Yarn

```sh
yarn global add advanced-react-cli
```

#### Invoke the CLI (Both NPM & Yarn)

```sh
arc
```

## FAQs

### Can I report any issues or bugs with the CLI?

- We appreciate all the reports on bugs or issues from the community!
- You may report an issue by going to this [Here](https://github.com/devisle/advanced-react-cli/issues/new/choose) and next to the "Bug Report", click the button "Get Started"!
- If you wish to get in touch with us quicker, you may join our Discord server! The link is under the "Dev Isle Community" section

### Where do I create a feature request?

- We are open to your suggestions for the CLI!
- If you'd like to make a new feature request, just head over [here](https://github.com/devisle/advanced-react-cli/issues/new/choose) and next to the "Feature Request", click the button "Get Started"!

### Where can I make a pull request?

- If you would like to contribute and test it locally, you may fork the repo, and/or clone it to your local desktop. Once you've done that, open the terminal in that local folder and run the command `npm install` for **NPM users** or `yarn install` for **Yarn users** to install the required dependencies.
- After that, you may open the folder in your editor of choice. Once again, in the terminal you may simply run `npm run react-cli` or `yarn run react-cli` to get it working. And voila!
- Before making a pull request, be sure to read the [contribution guidelines](https://github.com/devisle/advanced-react-cli/blob/master/CONTRIBUTING.md) that also have the pull request guide.

### How can I run the documentation site?

- The documentation site is built using [docsify](https://docsify.js.org/#/).
- Install `docsify` if you haven't done that already `npm i docsify-cli -g`.
- Run the site `docsify serve docs`.

## Credits

### Used packages

This CLI uses some of the best repos' terminal commands under the hood, to execute it's functionality. We would like to credit the following GitHub repos by making this CLI possible:

- [Brandon Nozaki Miller - Node-CMD](https://github.com/RIAEvangelist/node-cmd)
- [Simon Boudrias - Inquirer JS](https://github.com/SBoudrias/Inquirer.js/)
- [Nathan Peck - CLUI](https://www.npmjs.com/package/clui)
- [Dave Eddy - Clear](https://github.com/bahamas10/node-clear)
- [Patorjk - Figlet](https://github.com/patorjk/figlet.js)
- [Chalk](https://www.npmjs.com/package/chalk)

**Be sure to check the above repos out if you're facing any issues! We are of course, always open to improvements.**

### Authors

#### Maintainers
- [@shreyas1307](https://github.com/shreyas1307) - Creator
- [@endormi](https://github.com/endormi)

#### Contributors
- [@munsterberg](https://github.com/Munsterberg)
- [@natedeploys](https://github.com/Natedeploys)
- [@kruzus](https://github.com/kruzus)
- [@jgiamanco](https://github.com/jgiamanco)
- [@rakeshshubhu](https://github.com/rakeshshubhu)

## Dev Isle Community

Are you interested in hanging out, contributing to our open source repositories and be a part of a good community?

We would love for you to join us on our [Discord](http://discord.gg/MSTQKRE).

## License

The source code is released under the [GPL-3.0 License](https://github.com/devisle/advanced-react-cli/blob/master/LICENSE).

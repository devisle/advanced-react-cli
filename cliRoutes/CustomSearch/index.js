const axios = require('axios')
const inquirer = require('inquirer')
const cliModel = require('../../cliModel')
const customCMD = require('../../customNodeCMD')
const { SearchTerm, YarnOrNpm, ConfirmSelection } = cliModel
const prompt = inquirer.createPromptModule()

module.exports = class SearchOnline {
  constructor () {
    this.packagesSelected = []
  }

  search () {
    prompt(SearchTerm[0]).then(({ searchTerm }) => {
      if (searchTerm.length > 0) {
        let data = []
        axios
          .get(`https://www.npmjs.com/search/suggestions?q=${searchTerm}`)
          .then(response => {
            if (response.data && response.data.length > 0) {
              response.data.forEach(x => {
                // let dataObject = {};
                // dataObject.name = x.name;
                // dataObject.version = x.version;
                // dataObject.description = x.description;
                // x.links && Object.keys(x.links).map(y => {
                //   dataObject[y] = x.links(y)
                // })
                data.push(x.name)
              })
              prompt({
                type: 'checkbox',
                name: 'Options',
                choices: data
              }).then(({ Options }) => {
                Options.forEach(opt => this.packagesSelected.push(opt))
                if (this.packagesSelected.length === 0) return this.search
                console.log(
                  "You've selected these Package(s): ",
                  this.packagesSelected.join(', ')
                )
                return prompt(ConfirmSelection).then(({ confirmation }) => {
                  switch (confirmation) {
                    case 'Yes':
                      prompt(YarnOrNpm).then(({ packageManager }) => {
                        switch (packageManager) {
                          case 'Yarn':
                            customCMD.get(
                              `yarn add ${this.packagesSelected.join(' ')} -g`,
                              'install',
                              `Package(s): ${this.packagesSelected.join(
                                ' '
                              )} have been installed successfully!`
                            )
                            break

                          case 'NPM':
                            customCMD.get(
                              `npm install ${this.packagesSelected.join(
                                ' '
                              )} -g`,
                              'install',
                              `Package(s): ${this.packagesSelected.join(
                                ' '
                              )} have been installed successfully!`
                            )
                            break
                        }
                      })
                      break
                    case 'No':
                      return this.search()
                  }
                })
              })
            } else {
              // console.log("No packages found");
              return this.search()
            }
          })
      }
    })
  }
}

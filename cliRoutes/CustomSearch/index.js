const axios = require('axios')
const inquirer = require('inquirer')
const cliModel = require('../../cliModel')
const customCMD = require('../../customNodeCMD')
const { SearchTerm, YarnOrNpm, ConfirmSelection, GlobalOrNot } = cliModel
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
                        prompt(GlobalOrNot).then(({ confirm }) => {
                          customCMD.get(
                            `${
                              packageManager === 'NPM'
                                ? 'npm install'
                                : `yarn ${
                                    confirm === 'Yes' ? 'global' : ''
                                  } add`
                            } ${
                              confirm === 'Yes' && packageManager === 'NPM'
                                ? '-g'
                                : ''
                            } ${this.packagesSelected.join(' ')}`,
                            'install',
                            `Package(s): ${this.packagesSelected.join(
                              ' '
                            )} have been installed successfully!`
                          )
                        })
                      })
                      break

                    case 'No':
                      return this.search()
                  }
                })
              })
            } else {
              return this.search()
            }
          })
      }
    })
  }
}

const axios = require('axios')
const inquirer = require('inquirer')
const cliModel = require('../../cliModel')
const { SearchTerm } = cliModel
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
              console.table(data)
              prompt({
                type: 'checkbox',
                name: 'Options',
                choices: data
              }).then(({ Options }) => {
                Options.forEach(opt => this.packagesSelected.push(opt))
                console.log(
                  "You've selected these Package(s): ",
                  this.packagesSelected.join(', ')
                )
              })
              return this.search()
            } else {
              // console.log("No packages found");
              return this.search()
            }
          })
      }
    })
  }
}

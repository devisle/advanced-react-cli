const fs = require('fs')

const fileName = 'README.md'
const filePath = `docs/${fileName}`

// If in scripts folder
// cd ..
if (!fs.existsSync('package.json')) {
  process.chdir('..')
}

// Find file
if (!fs.existsSync(fileName)) {
  console.error('File not found!')
}

fs.copyFile(fileName, filePath, err => {
  if (err) throw err
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err
    let re1 = /\<div[^>]*\>([^]*)\<\/div>/m
    let re2 = /^(\s*\r\n){2,}/

    let removeDiv = data.replace(re1, '').replace(re2, '')

    fs.writeFileSync(filePath, removeDiv, 'utf8', err => {
      if (err) throw err
    })
  })
})

const fs = require('fs')

const fileName = 'README.md'

// If in scripts folder
// it will cd ..
if (!fs.existsSync('package.json')) process.chdir('..')

// Find file
if (!fs.existsSync(fileName)) console.error('File not found!')

fs.copyFile(fileName, 'docs/' + fileName, err => {
  if (err) throw err
})

fs.readFile('docs/' + fileName, (err, data) => {
  if (err) throw err
  console.log(data.toString())
})

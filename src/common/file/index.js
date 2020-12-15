const fs = require('fs')

const write = (fileName, content) => fs.writeFileSync(fileName, content)
module.exports.write = write

const read = (fileName) => fs.readFileSync(fileName, 'utf8')
module.exports.read = read

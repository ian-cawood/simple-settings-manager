const fs = require('fs')

const write = (fileName, content) => fs.writeFileSync(fileName, content)

module.exports.write = write

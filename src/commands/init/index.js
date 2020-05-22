const handler = require('./init.handler')

// this serves as the default command as well
exports.command = ['init', '$0']

exports.describe = 'initialize settings'

exports.handler = handler
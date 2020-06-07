const handler = require('./encrypt.handler')

// this serves as the default command as well
exports.command = ['encrypt']

exports.describe = 'encrypt settings'

exports.handler = handler
const openpgp = require('openpgp')

const generateECCKeys = (userIds, passphrase = '') => openpgp.generateKey({
  userIds,
  curve: 'ed25519',
  passphrase
})

module.exports.generateECCKeys = generateECCKeys

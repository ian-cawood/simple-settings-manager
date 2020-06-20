const openpgp = require('openpgp')

const generateECCKeys = (userIds, passphrase = '') => openpgp.generateKey({
  userIds,
  curve: 'ed25519',
  passphrase
})

module.exports.generateECCKeys = generateECCKeys

const encryptString = async (publicKeyArmored, message) => {
  const publicKeys = (await openpgp.key.readArmored(publicKeyArmored)).keys

  const { data: encrypted } = await openpgp.encrypt({
    message: openpgp.message.fromText(message), 
    publicKeys,
  })

  return encrypted
}

module.exports.encryptString = encryptString

const decryptString = async (privateKeyArmored, cipherText) => {
  const privateKey = (await openpgp.key.readArmored([privateKeyArmored])).keys[0]

  const { data: decrypted } = await openpgp.decrypt({
    message: await openpgp.message.readArmored(cipherText),
    privateKeys: [privateKey]
  })

  return decrypted
}

module.exports.decryptString = decryptString

const assert = require('chai').assert
const openpgp = require('openpgp')

const SUT = require('./index')

describe('common/crypto', function () {
  describe('generateECCKeys', function () {
    it('should be a function', function () {
      assert.isFunction(SUT.generateECCKeys, 'should be a function')
    })

    it('should successfully create a private and public key with no password defined', async function () {
      const result = await SUT.generateECCKeys([{ email: 'example@test.com' }])

      assert.hasAllKeys(result, ['key', 'privateKeyArmored', 'publicKeyArmored', 'revocationCertificate'])
    })

    it('should successfully create a private and public key with password defined', async function () {
      const result = await SUT.generateECCKeys([{ email: 'example@test.com' }], 'super secure passphrase')

      assert.hasAllKeys(result, ['key', 'privateKeyArmored', 'publicKeyArmored', 'revocationCertificate'])
    })
  })

  describe('encryptString', function () {
    it('should be a function', function () {
      assert.isFunction(SUT.encryptString, 'should be a function')
    })

    it('should encrypt a string with given public key', async function () {
      const { publicKeyArmored } = await openpgp.generateKey({
        userIds: [{ email: 'example@test.com' }],
        curve: 'ed25519',
      })
   
      const encryptedString = await SUT.encryptString(publicKeyArmored, 'hello')

      assert.isString(encryptedString, 'the data should still be a string')
    })
  })

  describe('decryptString', function () {
    it('should be a function', function () {
      assert.isFunction(SUT.decryptString, 'should be a function')
    })

    it('should decrypt a string with given private key', async function () {
      const { publicKeyArmored, privateKeyArmored } = await openpgp.generateKey({
        userIds: [{ email: 'example@test.com' }],
        curve: 'ed25519',
      })
   
      const publicKeys = (await openpgp.key.readArmored(publicKeyArmored)).keys

      const { data: encrypted } = await openpgp.encrypt({
        message: openpgp.message.fromText('hello'),
        publicKeys,
      })

      const decryptedString = await SUT.decryptString(privateKeyArmored, encrypted)

      assert.isString(decryptedString, 'the data should still be a string')
      assert.strictEqual(decryptedString, 'hello')
    })
  })
})

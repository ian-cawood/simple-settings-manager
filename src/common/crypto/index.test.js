const assert = require('chai').assert

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
})

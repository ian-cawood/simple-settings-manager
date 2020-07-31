const assert = require('chai').assert

const SUT = require('./array')

describe('common/validate/array', function () {
  describe('lengthGreaterThan', function () {
    it('should be a function', function () {
      assert.isFunction(SUT.lengthGreaterThan, 'should be a function')
    })

    it('should return true if length of array is greater than number provided', function() {
      const result = SUT.lengthGreaterThan(2, 'VALIDATION MESSAGE', ['ONE', 'TWO', 'THREE'])

      assert.isTrue(result)
    })

    it('should return validation message if length of array is less than number provided', function() {
      const result = SUT.lengthGreaterThan(2, 'VALIDATION MESSAGE', ['ONE'])

      assert.equal(result, 'VALIDATION MESSAGE')
    })

    it('should return true if length of array is equal to number provided', function() {
      const result = SUT.lengthGreaterThan(2, 'VALIDATION MESSAGE',['ONE', 'TWO'])

      assert.isTrue(result)
    })
  })
})

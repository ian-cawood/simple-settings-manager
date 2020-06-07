const assert = require('chai').assert

const SUT = require('./encrypt.handler')

describe('commands/encrypt.handler', function () {
  it('should be a function', function () {
    assert.isFunction(SUT, 'handler should be a function')
  })
})
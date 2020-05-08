const assert = require('chai').assert

const SUT = require('./init.handler')

describe('commands/init.handler', function () {
  it('should be a function', function () {
    assert.isFunction(SUT, 'handler should be a function')
  })
})
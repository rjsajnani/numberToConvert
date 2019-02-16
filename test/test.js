let numberToConvert = require('../index.js')
var assert = require('assert');

describe('number to words', function() {
  it('should convert 1', function() {
    assert.equal('one  ', numberToConvert.convertNumber(1));
  });
  it('should convert 11', function() {
    assert.equal('eleven  ', numberToConvert.convertNumber(11));
  });
  it('should convert 100', function() {
    assert.equal('one hunderd ', numberToConvert.convertNumber(100));
  });
  it('check if the entered value has characters or not', function() {
    assert.equal('Enter only numerical characters', numberToConvert.convertNumber('ssss'));
  });
  it('remove any characters and convert to int', function() {
    assert.equal('one thousand ', numberToConvert.convertNumber('s1000ssd'));
  });
});
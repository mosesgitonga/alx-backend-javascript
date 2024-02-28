const chai = require('chai');
const assert = chai.assert;
const calculateNumber = require('./1-calcul')

describe('combining description', function() {
    it('type SUM', function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('type SUBTRACT', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });
    it('type DIVIDE', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('type DIVIDE', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
})
const assert = require('assert')
const calculateNumber = require('./0-calcul')


describe("calc", function() {
    it("should return the sum of two rounded nums", function() {
        assert.equal(calculateNumber(5.5, 2.3), 8);
    })
})
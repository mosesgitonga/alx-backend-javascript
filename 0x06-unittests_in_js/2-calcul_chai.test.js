const expect = require('chai').expect;
const calculateNumber = require('./1-calcul')

describe('combining description', function() {
    it('type SUM', function() {
        expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('type SUBTRACT', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    });
    it('type DIVIDE', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('type DIVIDE', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
})
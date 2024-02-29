
const Payment = require('./3-payment');
const sinon = require('sinon')
const assert = require('assert')
const Utils = require('./utils')

describe('payment util', function() {
    it('should return equal results of 2 different functions', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const paymentSpy = sinon.spy(Payment, 'sendPaymentRequestToApi');

        const res1 = Utils.calculateNumber('SUM', 1.4, 4.5);

        calculateNumberSpy.restore();

        

        const res2 = Payment.sendPaymentRequestToApi(1.4, 4.5);

        paymentSpy.restore();

        assert.equal(res1, res2);
    })
})
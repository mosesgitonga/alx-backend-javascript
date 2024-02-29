
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon')
const assert = require('assert')
const Utils = require('./utils')

describe('payment util', function() {
    it('should return equal results of 2 different functions', function() {
        const calculateNumber = Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')
        const sendPaymentRequestToApiSpy = sinon.spy(sendPaymentRequestToApi)

        const calculateNumberRes = calculateNumber('SUM', 200, 100)
        const sendPaymentRequestToApiRes = sendPaymentRequestToApiSpy(200, 100)

        assert.strictEqual(calculateNumberRes, sendPaymentRequestToApiRes)

        calculateNumberSpy.restore()
    })
})

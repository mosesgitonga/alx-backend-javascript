
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon')
const assert = require('assert')
const Utils = require('./utils')

describe('payment util', function() {
    it('should always return 10', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10)

        //const sendPaymentRequestToApiSpy = sinon.spy(sendPaymentRequestToApi)
        const consoleLogSpy = sinon.spy(console, 'log')

        sendPaymentRequestToApi(100, 20);

        const res = Utils.calculateNumber('SUM', 100, 20)

        sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20)

        //const calculateNumberRes = calculateNumber('SUM', 100, 20)
        //onst sendPaymentRequestToApiRes = sendPaymentRequestToApiSpy(100, 20)

        

        sinon.assert.calledWith(consoleLogSpy, 'The total is: 10')


        calculateNumberStub.restore()
        consoleLogSpy.restore()
    })
})

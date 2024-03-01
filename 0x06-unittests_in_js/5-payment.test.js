const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./5-payment')

describe('hooks', function() {
    
    let consoleLogSpy;

    beforeEach(function() {
        consoleLogSpy = sinon.spy(console, 'log')
    })

    afterEach(function() {
        consoleLogSpy.restore();
    })
    it('should log "The total is: 120" when called with 100 and 20', function() {
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledOnce(consoleLogSpy)
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 120')
    });

    it ('should log "The total is: 20" when called with 10 and 10', function() {
        sendPaymentRequestToApi(10, 10)
        sinon.assert.calledOnce(consoleLogSpy)
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 20')
    })
    
})

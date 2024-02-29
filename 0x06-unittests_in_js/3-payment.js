const Utils = require('./utils')


function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const sumRes = Utils.calculateNumber(SUM, totalAmount, totalShipping)
    console.log(`The total is: ${sumRes}`)
}

module.exports = sendPaymentRequestToApi

const getPaymentTokenFromAPI = require('./6-payment_token')
const assert = require('assert')

describe('get payment from api', function(){
    it('tests asyncronous code', function(done) {
        getPaymentTokenFromAPI(true)
            .then(result => {
                assert.deepStrictEqual(result, {data: 'Successful response from the API' });
                done();
            })
            .catch(error => {
                done(error)
            })
    })
})
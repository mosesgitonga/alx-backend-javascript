const request = require('request')
//const app = require('./api')
const { expect } = require('chai');

describe('index page', () => {
    const  api_url = 'http://localhost:7865'
    it('should return status code 200', (done) => {
        request.get(`${api_url}/`,(_err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal('Welcome to the payment system');
            done()
        });
    });
})
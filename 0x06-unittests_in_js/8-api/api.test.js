const request = require('request')
const app = require('./api')
const { expect } = require('chai');

describe('index page', () => {
    const  api_url = 'http://localhost:3000'
    it('should return status code 200', async() => {
        request.get(`${api_url}`,(_err, resp, body) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal('Welcome to the payment system');
            done();
        });
    });
})
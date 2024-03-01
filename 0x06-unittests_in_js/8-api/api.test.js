const request = require('supertest')
const app = require('./api')
const { expect } = require('chai');

describe('index page', () => {
    it('should return status code 200', async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).to.equal(200)
    });

    it('should return current result', async() => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Welcome to the payment system')
    })
})
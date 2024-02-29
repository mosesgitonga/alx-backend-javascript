const request = require('supertest')
const app = require('./app')

describe('index page', () => {
    it('should return status code 200', async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    });

    it('should return current result', async() => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Welcome to the payment system')
    })
})
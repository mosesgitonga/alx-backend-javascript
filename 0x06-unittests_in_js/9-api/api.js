const express = require('express')
const app = express()
const request = require('request')

app.get('/', (_, res) => {
    res.send('Welcome to the payment system')
})

const validateId = (req, res, next) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
        return res.status(404).send('Invalid id. Must be a number');
    }
    next();
};


app.get('/cart/:id', validateId ,(req, res) => {

    const { id }= req.params
 
    res.send('Payment methods for cart :id')
 
}) 

const PORT = 7865
app.listen(PORT, () => {
    console.log('API available on localhost port 7865')
})

module.exports = app

const express = require('express')
app = express()

app.get('/', (_, res) => {
    res.send('Welcome to the payment system')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('API available on localhost port 7865')
})

module.exports = app

function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success === true) {
            const data = {data: 'Successful response from the API' }
            resolve(data)
        }
    })
}

x = getPaymentTokenFromAPI(true)
console.log(x)

module.exports = getPaymentTokenFromAPI
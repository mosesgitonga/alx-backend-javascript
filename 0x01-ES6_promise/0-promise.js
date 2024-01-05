function getResponseFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000)
    })
}

export default getResponseFromAPI;

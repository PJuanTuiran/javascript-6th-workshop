function handleAsync(callback, aPromise) {
    aPromise
        .then(() => {
            callback("The promise was fulfilled!")
        })
        .catch(() => {
            callback("The promise was rejected!")
        })
}

const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve()
        } else {
            reject()
        }
    }, 2000)
})

handleAsync(console.log, testPromise)
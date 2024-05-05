function promiseMsg(callback, delay) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random()

            if (rand <= 0.5) {
                resolve()
            } else {
                reject()
            }
        }, delay)
    })
        .then(() => {
            callback("The message promise was resolved succesfully!")
        })
        .catch(() => {
            callback("The message promise was rejected!")
        })
}

function promptNum(msg) {
    while (true) {
        let input = Number(prompt(msg))

        if (isNaN(input)) {
            alert("The inserted value wasn't a number")
        } else {
            return input
        }
    }
}

let userDelay = promptNum("Insert the time you want to delay the promise in seconds:") * 1000

promiseMsg(alert, userDelay)


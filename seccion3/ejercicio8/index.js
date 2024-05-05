function main() {
    let accum = 0

    const increaseAccumulator = (value) => {
        return accum += value
    }

    while (true) {
        let theValue = promptNum(`Insert the value to increase accum: (Current Value: ${accum})`)
        alert(`New Value of Accumulator: ${increaseAccumulator(theValue)}`)

        let finish = confirm("Click 'Ok' if you wanna add another number to cont, or click 'Cancel' otherwise.")

        if (!finish) {
            break
        }
    }

    return accum

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
}

let result = main()

alert(`The final value of the accumulator is: ${result}`)
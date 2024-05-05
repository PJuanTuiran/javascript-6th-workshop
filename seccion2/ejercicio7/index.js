function printCode() {
    const code = ['', '1️ console.log("Inicio del script");', '', '2️    setTimeout(() => {',
        '    console.log("Primer setTimeout");', '    }, 0);', '', '3️    setTimeout(() => {',
        '    console.log("Segundo setTimeout");', '    }, 0);', '',
        '4️   Promise.resolve("Promesa resuelta").then(console.log);', '',
        '5️  console.log("Fin del script");', '    '
    ]

    return code.join('\n')
}

function getAnswer() {
    while (true) {
        let theAnswer = prompt(`Insert the order of execution of these console.log() separated by coma ',':\n\n${printCode()}`)
        let returnAnswer = theAnswer.split(",").map((value) => { return value = Number(value) })

        if (returnAnswer.includes(NaN)) {
            alert(`One of the inserted values wasn't a number!`)
        } else {
            return returnAnswer.join(',')
        }
    }
}

alert(`${'\t'.repeat(5)}CONSIDERING THIS CODE:\n\n${printCode()}\n\n Answer the next Question.`)

let answer = getAnswer()
console.log(answer)

const explanation = "This is because Javascript first executes synchronic code, so it prints the 1st and 5th console.log() " +
    "then it goes for microtasks, it finds a promise (which is a microtask) and executes it, and after finishing all microtasks " +
    "it goes for the macro ones; in this case the setTimeout() logs"

if (answer == `1,5,4,2,3`) {
    alert(` YOU ARE CORRECT\n\n${explanation}`)
} else {
    alert(` YOU ARE WRONG\n\n${explanation}`)
}


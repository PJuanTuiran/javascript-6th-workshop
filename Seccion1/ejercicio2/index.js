alert(`${'\t'.repeat(5)}HOISTING IN PRACTICE\n\nPredict the behaviour in this code:\n\n ${printCode()}`)
willExecute(2, "It does execute because variables declared with 'var' become hoisted and initialized at the very start of the js code", false)
willExecute(3, "It doesn't execute because variables declared with 'let' or 'const' aren't initialized until their respective line", true)
willExecute(4, "It doesn't execute because variables declared with 'let' or 'const' aren't initialized until their respective line", true)
willExecute(7, "It does execute because declared functions become hoisted and available to call at the very beginning of your code", false)
willExecute(8, "It doesn't execute because expressed functions do not become hoisted, and are only accessible after their initialization", true)



function printCode(selectLine) {
    let code = [
        '', '    // vars call', '    alert("Valor de a:", a);', '    alert("Valor de b:", b);', '    alert("Valor de c:", c);',
        '    ', '    // functions call', '    alert("Resultado de funcionDeclarada:", funcionDeclarada());', '    alert("Resultado de funcionExpresada:", funcionExpresada());',
        '    ', '    // vars declaration', '    var a = 1;', '    let b = 2;', '    const c = 3;', '    ', '    // functions declarations', '    function funcionDeclarada() {',
        '        return "Función declarada ha sido llamada.";', '    }', '    ', '    const funcionExpresada = function () {', '        return "Función expresada ha sido llamada.";', '    };'
    ]

    code[selectLine] = `${code[selectLine]}`

    return code.join('\n')
}

function willExecute(line, msg, ops) {
    let answer = confirm(`Will it execute  ?\n\n${printCode(line)}`)
    if (ops) {
        answer = !answer
    }
    if (answer) {
        alert(` CORRECT\n\n${msg}`)
    } else {
        alert(`WRONG\n\n${msg}`)
    }
}
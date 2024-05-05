alert(`${'\t'.repeat(5)}SCOPE QUIZ\n\nThis is your code:\n\n${printCode()}`)
let explanation

// Global Scope
var globalVariable = "Soy una variable global.";
var answer;

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    answer = confirm(`Click 'Ok' if you think we can access the variable 'globalVariable' from here 🔸 or Click 'Cancel' otherwise:\n\n ${printCode(8, "alert(globalVariable)")}`)
    explanation = "You can access global variables from anywhere in the code; accessing these variables from a function it's called function closure"
    if (answer) {
        alert(`CORRECT\n\n${explanation}`)
    } else {
        alert(`WRONG\n\n${explanation}`)
    }
    alert(globalVariable)


    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
    }

    answer = confirm(`Click 'Ok' if you think we can access the variable 'blockVariable' from here 🔸 or Click 'Cancel' otherwise:\n\n ${printCode(11, "alert(blockVariable)")}`)
    explanation = "You can only access block variables inside the section delimited by their context brackets"
    if (answer) {
        alert(`WRONG\n\n${explanation}`)
    } else {
        alert(`CORRECT\n\n${explanation}`)
    }
    alert("Uncaught ReferenceError: blockVariable is not defined")
}

testScope();

answer = confirm(`Click 'Ok' if you think we can access the variable 'functionVariable' from here 🔸 or Click 'Cancel' otherwise:\n\n ${printCode(16, "alert(functionVariable)")}`)
explanation = "You can only access local variables inside the function where they were declared"
if (answer) {
    alert(` WRONG\n\n${explanation}`)
} else {
    alert(` CORRECT\n\n${explanation}`)
}
alert("Uncaught ReferenceError: functionVariable is not defined")




function printCode(addLine, addTxt) {
    let code = [`// Global Scope`, `var globalVariable = "Soy una variable global.";`, ``, `function testScope() {`, `\t// Function Scope`,
        `\tvar functionVariable = "Soy una variable local.";`, ``, `\tif (true) {`, `\t\t// Block Scope`,
        `\t\tlet blockVariable = "Soy una variable de bloque.";`, `\t}`, ``, `}`, ``, `testScope();`]

    if (4 <= addLine && addLine < 7 || 10 < addLine && addLine <= code.length) {
        addTxt = `\t${addTxt}`
    } else if (7 <= addLine && addLine <= 10) {
        addTxt = `\t\t ${addTxt}`
    } else {
        addTxt = `${addTxt}`
    }

    if (addLine != null) {
        code.splice(addLine, 0, addTxt)
    }

    return code.join('\n')
}
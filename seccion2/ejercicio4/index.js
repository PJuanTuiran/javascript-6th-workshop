console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/* ¿Qué pasó cuando intentaste llamar las funciones antes de su declaración?:

Se ejecutó la función declarada, pero no la expresada. */


/* ¿En qué se diferencian los resultados de la función declarada y la expresada?:

Mientras que la función declarada fue izada, permitiendo ser llamada desde el mismo
comienzo del código, no se permite llamar al expresado antes del código
alcanza su inicialización. */


/* ¿Qué nos dice esto acerca de cómo Javascript maneja estas dos declaraciones de funciones diferentes?

En pocas palabras, que las funciones declaradas se levante permitiendo su uso desde el
primera línea de nuestro código, mientras que las funciones expresadas no pueden. */
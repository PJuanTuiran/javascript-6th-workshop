function createAggregator(firstNum) {
    return function finishAddition(secNum) {
        return firstNum += secNum;
    }
}

let addFive = createAggregator(5)
console.log(addFive(3))
console.log(addFive(2))


/* ¿Cómo mantienen las funciones el acceso a las variables externas incluso después de que la función externa haya finalizado su ejecución?:

Esto se debe a que las funciones contienen una referencia de su entorno léxico (cierre de función) cuando fueron creadas.
permitiéndoles seguir teniendo acceso a él incluso después de que la función externa finalice con su ejecución. */


/* ¿Cuáles son las implicaciones para la memoria del uso de estos cierres, especialmente cuando hay muchas instancias de funciones con cierre?:

Teniendo en cuenta que las funciones mantienen una referencia de su entorno léxico, podemos esperar un mayor uso de la memoria si
usar múltiples instancias de funciones con cierres, incluso pérdidas de memoria de objetos que ya no necesitamos después de cierto punto
pero eso aún existe debido a su referencia guardada en un cierre. Todo esto no sólo afecta el uso de la memoria, sino también
el rendimiento de nuestras aplicaciones. */
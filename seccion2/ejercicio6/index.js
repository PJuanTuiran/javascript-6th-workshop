console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

/* Conclusiones:
Javascript ejecuta primero las funciones sincrónicas, es por eso que 'Mensaje 1' se ejecuta antes
cualquier otro console.log (además de que es la primera línea de código), luego procede a imprimir
'Mensaje 2' que se ejecuta después de que setTimeout() termine de esperar. Aunque su setTimeout() es
establecido en 0, todavía tiene que esperar a que se realicen todos los servicios sincrónicos para permitir que la cola luego
procesa las microtareas como promesas, y luego pasa a las macrotareas como las de setTimeout()
y concluye la ejecución del código*/
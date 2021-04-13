//Se denomina hoisting a la posibilidad de llamar a la función antes de que sea declarada, osea, se llama en cualquier lado, abajo o arriba 
//de la declaración. Con las funciones flecha esto no está permitido porque la metemos dentro de una variable let o const

console.log(saludar())

function saludar() {
return "Hola"
}
/**
 * const miFuncionFlecha = () => {
    console.log('saludos desde mi función flecha');
}
 * 
 */

const miFuncionFlecha = () => console.log('Saludos desde mi función flecha');
miFuncionFlecha();

//para que no se confunda con el cuerpo de la función se encierra el objeto entre paréntesis
const regresaObjeto = () =>({nombre: 'Mariano', apellido:'Avico'})
console.log(regresaObjeto())

const funcionConParametros = (num1,num2) => console.log(num1 + num2);
funcionConParametros(5,7);


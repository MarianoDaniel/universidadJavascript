//Manejo de errores, continúa el programa gracias al try catch
//vamos a trabajar con el modo estricto: tenemos que definir las variables
'use strict'
try{
    x = 2;
    
}
catch(error){
    console.log(error);
}
//este bloque es opcional
finally {
    console.log('Termina la revisión de errores');
}

console.log("Continua el programa....");

let resultado = "Hola";
try {
   // x = 10;
if (isNaN(resultado)) throw "No es un número"
else if (resultado === '') throw "Es una cadena vacía"
else if (resultado > 0) throw "Es un número positivo"
else if (resultado < 0) throw "Es un número negrativo"
}catch (error){
console.log(error);
console.log(error.name);
console.log(error.message);
}finally {
    console.log("Termina la revisión de errores");
}
//dentro de una función llamamos a otra función
//función tipo callback: son ideales para trabajar en procesos asíncronos ya que la función callback puede establecer un nuevo
//fluho de trabajo dentro de la función y la función seguir haciendo sus tareas.

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (a,b,callback){
    let resultado = a+b;
    //se ejecuta esta función que hacer algo y mientras la función sumar puede seguir trabajando (asincronamente, este no es el caso)
    callback(resultado);
}

sumar(2,5,imprimir);

/**
 * llamadas asíncronas con uso de setTimeout
 */
function miFuncionCallBack(){
    console.log("Saludo asíncrono después de 1");
}

setTimeout(miFuncionCallBack,3000)
setTimeout(function(){console.log("Saludo ascíncrono 2")},4000)
setTimeout(()=>console.log('Saludo ascíncrono 3'),5000)
/**
 * llamadas asíncronas con uso de setInterval
 */
let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000);

let miPromesa = new Promise((resolve, rejected) => {
    let expresion = true;
    if (expresion) {
        resolve('Resolvió correctamente');
    } else {
        rejected('No resolvió');
    }
});

//miPromesa.then(value => console.log(value), 
//          error => console.log(error));

//miPromesa
//.then(valor => console.log(valor))
//.catch(error => console.log(error))

//Práctica con Promise y setTimeout

let promesa = new Promise((resolver) => {
    console.log('yo soy código  sincrono')
    setTimeout(() =>
        resolver('Saludos con promesa y timeout, soy asincrono'), 3000);
    console.log('yo estoy después de el setTimeout pero como soy sincrono, me ejecuto primero');
});

promesa.then(value => console.log(value));
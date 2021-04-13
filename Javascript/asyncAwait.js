async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

//await espera el resultado de nuestra promesa sin utilizar el .then se simplifica

async function funcionConPromesaYAwait(){
    let miPromesa=new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}


//Promesas await async y setTimeout

async function funcionConPromesaAwaitYTimeout (){
    let miPromesa = new Promise(resolve => {
        setTimeout(() => resolve('Promesa con await y timeout'), 3000);
    })
    console.log(await miPromesa);
}
funcionConPromesaAwaitYTimeout();
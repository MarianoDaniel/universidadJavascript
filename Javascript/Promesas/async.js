//Anteponiendo async antes de un método significa que este está obligado a devolver una promesa.

let promesa = new Promise((resolver) => {
    setTimeout(() =>
        resolver('Saludos con promesa y timeout, soy asincrono'), 3000);
});

async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}
//Básicamente se resume la necesidad de tener que crear la promesa ya que agregandole el async
//obligamos a que la función retorne una.
miFuncionConPromesa().then(valor => console.log(valor));
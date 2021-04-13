const miPromesa = new Promise((resolve,reject) =>{
    setInterval(()=>{
        let numero = 0;
        if(numero>1){
            console.log('Cacaroto');
            resolve('Salió todo bien'); 
        }else{
            reject('Todo mal perreque');
        }
        
    },500)
})

miPromesa.then((mensaje,error) =>{
    try {
        console.log(mensaje)
    }catch{
        console.log(error);
    }
})
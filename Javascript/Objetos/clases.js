class Persona {    
    constructor (nombre, apellido){
        //con el this se crea y se inicializa autimáticamente el atributo 
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //Métodos get y set
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
}

let persona1 = new Persona ('Jorge', 'Patata');
console.log(persona1)
//llama al método, no le agrego () porque ya lo identifiqué 
//como get en la clase
console.log(persona1.getNombre)
persona1.setNombre ='Garmendia';
console.log(persona1)


//Hosting y clases en javascript
//no se puede utilizar hosting con las clases ya que no se pueden
//llamar o utilizar sin definirlas previamente. En el caso de las funciones o
//las variable si se puede hacer esto ya que se pueden llamar primero (variables tipo var)
//y definirlas después.

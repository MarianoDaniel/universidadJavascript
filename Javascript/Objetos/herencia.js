class Persona {
    //Variables estáticas pertenece a la clase pero a ningún objeto
    //VAMOS A CREAR UN ID
    static contadorPersona= 0; 
    static get maxObject (){
        return 5
    }  
    constructor (nombre, apellido){
        //con el this se crea y se inicializa autimáticamente el atributo 
        this.nombre = nombre;
        this.apellido = apellido;
        //voy a ir incrementando la variable estática para sabér cuantas 
        //veces se crearon Personas
        //Cómo el static no apunta a un objeto no se lo puede llamar con this
        //CREAMOS UN ID
        //le agregamos una validación que indique que no le asignará más id si supera la cantidad máxima
        if (Persona.contadorPersona < Persona.maxObject){
            this.idPersona = Persona.contadorPersona++
        }else{
            console.log('Superaste la cantidad máxima de objetos')
        }
        
        
        //console.log("Se incrementa contador en" + " " +Persona.contadorObjetosPersona);
    }
    //Métodos get y set
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
    get getApellido(){
        return this.apellido
    }
    set setApellido(apellido){
        this.apellido = apellido;
    }
    //dentro de una clase no es necesaria la palabra function, solamente
    //la firma
    nombreCompleto(){
        return `${this.nombre} ${this.apellido} id: ${this.idPersona}`
    }
    toString(){
        return this.nombreCompleto();
    }
//STATIC
//Se usa para utilizar por ej, métodos que se asocian a la clase
//se va a asociar con esta clase y no con los objetos que se creen de esta
    static saludar(){
        console.log('saludos desde el método static')
    }
//A un método estatico le podemos pasar como argumento un objeto
static saludar2 (persona){
    console.log(persona.nombre +' '+ persona.apellido)
}
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this.departamento = departamento;
    }
    get getDepartamento(){
        return this.departamento;
    }
    set setDepartamento(departamento){
        this.departamento = departamento;
    }
    //Sobreescritura del metodo de persona para agregar al empleado
    nombreCompleto(){
        return ` ${super.nombreCompleto()} ${this.departamento}`
    }
}

let persona1 = new Persona("pablo", 'Marmol');
console.log(persona1)

let empleado1 = new Empleado('Kakaroto', 'Gustavson', 'Sistemas');
console.log(empleado1)
//También se heredan los métodos
console.log(empleado1.getApellido)
console.log(empleado1.nombreCompleto())

//Clase Object en Javascript: es la clase Padre de todas las clases. Todas las clases 
//heredan de esta. 
//contiene varios metodos:

//toString(): imprime los valores actuales de c/u de los atributos del objeto
//Por ejemplo el toString() (Object.prototype que me permitía agregar una propiedad
//o método) se puede "sobreescribir" porque de base me da un object Object
//También lo siguiente es un ejemplo de "Polimorfismo" ya que el mismo método
//imprime lo de persona con persona y lo de empleado con empleado a pesar de que
//la definición del método esté en persona empleado la hereda
console.log(persona1.toString())
console.log(empleado1.toString())

//persona1.saludar(); no es posible llamar un método static desde un objeto 
Persona.saludar();
Persona.saludar2(persona1);

//el método estático también se hereda
Empleado.saludar2(persona1);

//Utilizando la variable static, me dice la cantidad de veces que se instanció
//un objeto de su clase
console.log(Persona.contadorPersona);
console.log(empleado1.toString())
empleado2 = new Empleado('yayirobe', 'sulivan','mundo 5');
console.log(empleado2.toString())
persona2=new Persona('Jacinto', 'peperoni');
console.log(persona2.toString());
persona3=new Persona('agata', 'sanscrito');
persona4=new Persona('eugenia', 'montesori');
persona5=new Persona('Ruperta', 'Arida');
console.log(persona3.toString());
console.log(persona4.toString());
console.log(persona5.toString());
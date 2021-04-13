class Persona {
    static contadorPersonas = 0;
    constructor (nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersonas
    }
    get getIdPersona (){
        return this. idPersona;
    }
    get getNombre (){
        return this.nombre;
    }
    set setNombre (nombre){
        this.nombre = nombre;
    }
    get getApellido (){
        return this.apellido;
    }
    set setApellido (apellido){
        this.apellido = apellido
    }
    get getEdad (){
        return this.edad;
    }
    set setEdad (edad){
        this.edad = edad;
    }
     toString() {
    return `${this.getNombre} ${this.getApellido} edad: ${this.getEdad} años ID: ${this.getIdPersona}`    
    }
}

class Empleado extends Persona {
    static guardaIdEmpleados = 0;
    constructor (nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.guardaIdEmpleados;
    }
    get getSueldo (){
        return this.sueldo;
    }
    set setSueldo (sueldo){
        this.sueldo = sueldo;
    }
    get getIdEmpleado (){
        return this.idEmpleado;
    }
    toString () {
      return `${super.toString()} sueldo: ${this.getSueldo} ID: ${this.getIdEmpleado}` ;
    }
}

class Cliente extends Persona {
    static guardaIdCliente = 0;
    constructor (nombre, apellido, edad){
        super(nombre, apellido, edad);
        this.idCliente = ++Cliente.guardaIdCliente;
        this.fechaRegistro = new Date();
    }
    get getIdCliente (){
        return this.idCliente;
    }
    get getFechaRegistro (){
        return this.fechaRegistro;
    }
    set setFechaRegistro (fecha){
        this.fechaRegistro = fecha;
    }

    toString (){
        return `${super.toString()} ID: ${this.getIdCliente} ${this.getFechaRegistro}`
    }
}





empleado1 = new Empleado ('enrique', 'paradox', 33, 10000);
empleado1.seta
console.log(empleado1.toString())

cliente1 = new Cliente('jacobo', 'sopilote', 28);
cliente1.setEdad = 55;
cliente1.setNombre = 'cacarulo'
cliente1.setApellido = 'nimrod'
console.log(cliente1.toString())
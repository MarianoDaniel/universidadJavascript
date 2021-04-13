//Un tipo primitivo no contiene propiedades ni objetos ej: let x = 10;

let persona = {
    nombre: 'Mariano',
    apellido: 'Avico',
    edad: 33,
    idioma: 'ES',
    get getIdioma (){
        return this.idioma.toUpperCase()
    },
    set setIdioma(idioma){
        this.idioma = idioma.toUpperCase();
    },
   get nombreCompleto(){
       return `${this.nombre} ${this.apellido}` 
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona)
console.log(persona.nombreCompleto)

//Vamos a utilizar la palabra reservada "new" para reservar un espacio en memoria para el objeto

miPersona = new Object();
miPersona.nombre = 'Daniel';
miPersona.direccion = 'Av infinita ';


//Otra forma de acceder a las propiedades de los Objetos en JavaScript: Está buena esta forma para recorrer el objeto con un ciclo for

console.log(miPersona['nombre'])
console.log(miPersona['direccion'])

//ciclo for in para recorer el objeto

for (propiedad in persona){
    //en esta primera linea accedemos a todos los nombres de las propiedades del objeto
    console.log(propiedad)
    //en esta segunda linea accedemos a los valores de dichas propiedades utilizando sus nombres
    console.log(persona[propiedad])
}

// agregar propiedades a un objeto
persona.tel= 5555555;

console.log(persona)

//borrar propiedades de un objeto
delete persona.tel
console.log(persona)

//Distintas Formas de Imprimir un Object en JavaScript

//Este método te devuelve el objeto como un array y es importante utilizarlo con el navegador, porque de lo contrario este te devuelve
//object Object y no muestra las propiedades del objeto

let personaArray = Object.values(persona);
console.log(personaArray)

//Método get en Objetos de JavaScript: arriba en la declaración del objeto le borré el function y le escribí get al princiop, de esta manera
// puedo escribír persona.nombreCompleto sin agregarle ()
console.log(persona.nombreCompleto);

// Método set en Objetos de JavaScript

   console.log(persona.idioma)
   persona.setIdioma='ua';
   console.log(persona.idioma)
   persona.setIdioma='es';
   console.log(persona.idioma)


   //Método Constructor Objetos en JavaScript: Vamos a utilizar este método porque te permite reutilizar los atributos y métodos de un objeto
   //de de la manera en la que lo vimos inicialmente no podíamos. Vamos a poder construir varios objetos del mismo tipo

   //función constructor de tipo persona

   function Persona (nombre, apellido, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.nombreCompleto = function (){
            return `${this.nombre} ${this.apellido}`
        }
   }

   let padre = new Persona('Adrian', 'Galperín', 'agalperin@gmail.com');

   console.log(padre)

   //Agregar Métodos a un Método Constructor de Objetos
   console.log(padre.nombreCompleto())


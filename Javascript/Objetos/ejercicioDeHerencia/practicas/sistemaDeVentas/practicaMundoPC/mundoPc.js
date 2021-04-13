class DispositivoEntrada {
    constructor (tipoEntrada,marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }
    get getTipoEntrada (){
        return this.tipoEntrada;
    }
    get getMarca(){
        return this.marca;
    }
    set setMarca (marca){
        this.marca = marca;
    }
    toString(){
        return `Entrada: ${this.getTipoEntrada} Marca: ${this.getMarca}`
    }
}

class Raton extends DispositivoEntrada {
static contadorRatones = 0;
constructor (tipoEntrada, marca){
    super(tipoEntrada,marca);
    this.idRaton = ++ Raton.contadorRatones;
    }
    toString(){
        return super.toString() + `ID: ${this.idRaton}`
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor (tipoEntrada, marca){
        super(tipoEntrada,marca);
        this.idTeclado = ++ Teclado.contadorTeclados;
        }
        toString(){
            return super.toString() + `ID: ${this.idTeclado}`
        }
}

class Monitor {
    static contadorMonitores=0;
    constructor (marca, tamanio){
        this.marca=marca;
        this.tamanio=tamanio;
        this.idMonitor = ++Monitor.contadorMonitores;
    }
    get getMarca(){
        return this.marca;
    }
    set setMarca(marca){
        this.marca = marca;
    }
    get getTamanio(){
        return this.tamanio;
    }
    set setTamanio(tamanio){
        this.tamanio =tamanio;
    }
    get getIdMonitor(){
        return this.idMonitor;
    }

    toString(){
      return  `Marca: ${this.getMarca} tamaño: ${this.getTamanio} Pulgadas ID: ${this.getIdMonitor}`
    }
}

class Computadora {
    static contadorComputadoras=0;
    constructor (nombre, monitor, teclado, raton){
        this.nombre =nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.IdComputadora = ++Computadora.contadorComputadoras;
    }
    get getIdComputadora(){
        return this.IdComputadora;
    }
    get getNombre(){
        return this.nombre;
    }
    get getMonitor(){
        return this.monitor;
    }
    get getTeclado(){
        return this.teclado;
    }
    get getRaton(){
        return this.raton;
    }
    toString(){
        return `Nombre computadora: ${this.getNombre.toString()}\n 
        Monitor: ${this.getMonitor.toString()} \n
        Teclado: ${this.getTeclado.toString()}\n
        Ratón ${this.getRaton.toString()}\n 
        ID: ${this.getIdComputadora}`
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor (){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras= [];
    }
    agregarComputadora (computadora){
        this.computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasInfo = ''
        for (let computadora of this.computadoras){
            computadorasInfo+= '\n' +computadora.toString()
        }
        return ` ID: ${this.idOrden}, Cantidad de computadoras: ${this.computadoras.length}, Información de las computadoras: 
        ${computadorasInfo}`
    }
    
}

let raton = new Raton('usb','Genius');
let teclado = new Teclado('usb','Genius');
let monitor = new Monitor('ViewSonic','42');

let computadora1 = new Computadora('miCompu',monitor,teclado, raton);
let computadora2 = new Computadora('sandinga',monitor,teclado, raton);
let computadora3 = new Computadora('eureka',monitor,teclado, raton);
let computadora4 = new Computadora('anaksonamun',monitor,teclado, raton);
let computadora5 = new Computadora('rictucempra',monitor,teclado, raton);
let computadora6 = new Computadora('ofcorse',monitor,teclado, raton);

let orden = new Orden();
orden.agregarComputadora(computadora1)
orden.agregarComputadora(computadora2)
orden.agregarComputadora(computadora3)
orden.agregarComputadora(computadora4)
orden.agregarComputadora(computadora5)
orden.agregarComputadora(computadora6)

console.log(orden.mostrarOrden())

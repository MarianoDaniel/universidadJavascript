class Orden {
    static contadorDeOrdenes = 0;
    static MAX_PRODUCTOS (){
        return 5;
    }
    constructor(){
        this.idOrden = ++Orden.contadorDeOrdenes;
        this.productos = [];
        this.contadorProductos = 0;
    }
    agregarProducto(producto){
        if(this.productos.length <Orden.MAX_PRODUCTOS()){            
            this.productos.push(producto);
            //también se puede hacer así:
            //this.productos[this.contadorProductos++]=producto;
            this.contadorProductos++
        }else {
            console.log("no se pueden agregar más productos");
        }        
    }
    mostrarOrden(){
        let productosOrden= '';
        for (let producto of this.productos){
            productosOrden+= '\n ' + producto.toString();
        }
        return console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()} Productos: ${productosOrden}` )
    }
    calcularTotal(){
        let total = 0;
       for (let producto of this.productos){
           total+= producto.precio;
       }
       return total;
    }
}

class Producto {
    static contadorProductos = 0;
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = ++ Producto.contadorProductos;
    }
     get getIdproducto (){
        return this.idProducto;
    }
    get getNombre(){
        return this.nombre;
    }
    get getPrecio (){
        return this.precio;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setPrecio(precio){
        this.precio = precio;
    }
    toString(){
        return `Nombre: ${this.getNombre} Precio: ${this.getPrecio} idProducto: ${this.getIdproducto}`
    }

}

let producto1 = new Producto('pantalon',200);
let producto2= new Producto('Camisa',100);
let producto3 = new Producto('medias',50);
let producto4 = new Producto('jean',60);
let producto5 = new Producto('gorra',25);
let producto6 = new Producto('bicera',27);
console.log(producto1.toString())
console.log(producto2.toString())

let orden1 = new Orden()
orden1.agregarProducto(producto1);
console.log(orden1.mostrarOrden())
orden1.agregarProducto(producto2);
console.log(orden1.mostrarOrden())
orden1.agregarProducto(producto3);
console.log(orden1.mostrarOrden())
orden1.agregarProducto(producto3);
console.log(orden1.mostrarOrden())
orden1.agregarProducto(producto4);
console.log(orden1.mostrarOrden())
orden1.agregarProducto(producto5);
console.log(orden1.mostrarOrden())
console.log(orden1.calcularTotal())
console.log(orden1.mostrarOrden())
let suma = 2+2;
suma

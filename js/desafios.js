alert("Simulador de productos")

class carritoDeCompras {
    constructor () {
        this.productos = [] //lista de productos vacia
        this.name = '' //nombre del usuario del carrito
        this.total= 0 //El precio de mi carrito
    }
    //usuario del carrito
    setName(value) {
        this.name=value
    }
    //Me permite agregar en el carrito items en el ultimo lugar de mi lista
    addProduct (product) {
        this.productos.push(product)
    }
    // Me permite eliminar el ultimo elemento agregado de mi lista
    removeLastProduct (){
        this.productos.pop()
    }
    // Me permite eliminar el primer elemento de mi lista
    removeFirstProduct(){
        this.productos.shift()
    }
    //Calculo el valor de mi carrito
    getTotal (){
        //Asume cada posicion de los valores (This productos es mi array osea lista)
        for(const producto of this.productos){
            console.log(producto)
            this.total = this.total + producto.price // El precio esta en 0 y le suma el precio del producto
        }
        console.log('otra forma de for')
        // Para que producto puede asumir un valor, tengo que decirle que posicion es.
        for (let index = 0; index < this.productos.length; index++) {
        const producto = this.productos[index];
        console.log(producto)
        this.total = producto.price + this.total
        }

        console.log("El total del carrito es: $ "+this.total)
    }
}
// Aca construyo un producto
class product {
    constructor(name,price){
        this.name =name
        this.price=price
    }
}

const cliente = new carritoDeCompras () //Inicializo mi carrito
cliente.setName (prompt ("Para comenzar a comprar introduzca su nombre: "))
cliente.addProduct (prompt("Hola! " + cliente.name + "\nPorfavor ingresa el nombre del producto que deseas:" ))
cliente.total (prompt ("Seleccionaste el producto :" + cliente.productos + "\n Porfavor ingresa un precio"))


//productos
const p1 = new product ('bujia',3)
const p2 = new product ('cable',10)
const p3 = new product ('bobina',8)
const p4 = new product ('bateria',5)
const p5 = new product ('lampara',7)
//
cliente.addProduct (p1)
cliente.addProduct (p2)
cliente.addProduct (p3)
cliente.addProduct (p4)
cliente.addProduct (p5)
cliente.getTotal ()

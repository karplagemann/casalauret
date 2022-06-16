
  //CREO OBJETO CLASE DETALLE PEDIDO
  class detallePedido {
    constructor(producto, cantidad) {
      // El constructor es una palabra reservada, todas las clases deben tener su constructor que es una funcion un metodo que se va a llamar cuando la clase se crea y su objetivo es inicializar todas los atributos de la clase.
      this.producto = producto;
      this.cantidad = cantidad;
    }
    calcularSubtotal() { //ESTO ES UN METODO
      //METODO RETORNO NUMBER
      let subtotal = this.producto.precio * this.cantidad; //Aca llamo a mi producto y a mi cantidad
      return subtotal; //Retorno mi subtotal
    }  //Aca deberia acceder a sus productos y mostrar ese producto
    mostrarDetalle() {
      // return '--' + this.cantidad + 'x' + this.producto.mostrarProducto();
    } // METODO
  }

  // USO EL OBJETO
  const detallePedido1 = new detallePedido(producto1, 2);
  const detallePedido2 = new detallePedido(producto2, 1);
  const detallePedido3 = new detallePedido(producto3, 1);
  const detallePedido4 = new detallePedido(producto4, 1);


//Check x consola
console.log("Detalle Pedido ----------------------------------------------------");
// console.log(detallePedido1, detallePedido1.calcularSubtotal());
console.log(detallePedido1);
console.log(detallePedido2);
console.log(detallePedido3);
console.log(detallePedido4);
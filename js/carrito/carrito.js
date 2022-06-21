// CREACION DE PRODUCTOS --------------------------------

//CREO OBJETO
class producto {
  constructor(sku, nombre, precio, descripcioncorta, imagen) {
    this.sku = sku;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcioncorta = descripcioncorta;
    this.imagen = imagen;
  }
  //FUNCION - METODO
  mostrarProducto() {
    // SU RETORNO
    return this.nombre;
  }
}

// USO EL OBJETO
const producto1 = new producto(
  "CL001",
  "Optica",
  5000,
  "VW gol trend 2008",
  (src = "images/ofertas/opticas.PNG")
);
const producto2 = new producto(
  "CL002",
  "Bobina",
  1800,
  "Vw voyage 2011",
  (src = "images/ofertas/opticas.PNG")
);
const producto3 = new producto(
  "CL003",
  "Disco de freno",
  500,
  "Fiat palio 2013",
  (src = "images/ofertas/opticas.PNG")
);
const producto4 = new producto(
  "CL004",
  "Lámpara",
  300,
  "H4 standard",
  (src = "images/ofertas/opticas.PNG")
);

//Check x consola
console.log("Productos ----------------------------------------------------");
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

// FIN DE CREACION DE PRODUCTOS --------------------------------

// CREACION DE DETALLE DE PEDIDOS --------------------------------

//CREO OBJETO
class detallePedido {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
  //FUNCION - METODO
  calcularSubtotal() {
    let subtotal = this.producto.precio * this.cantidad;
    // SU RETORNO
    return subtotal;
  }
  //FUNCION - METODO
  mostrarDetalle() {
    let detalle = this.producto.mostrarProducto() + " x " + this.cantidad;
    // SU RETORNO
    return detalle;
  }
  //FUNCION - METODO
  agregarCantidad(cantidad) {
    return this.cantidad += cantidad;
  }
  }



// USO EL OBJETO
const detallePedido1 = new detallePedido(producto1, 2);
const detallePedido2 = new detallePedido(producto2, 1);
const detallePedido3 = new detallePedido(producto3, 1);
const detallePedido4 = new detallePedido(producto4, 1);

//Check x consola
console.log(
  "Detalle Pedido ----------------------------------------------------"
);
console.log(detallePedido1);
console.log(detallePedido2);
console.log(detallePedido3);
console.log(detallePedido4);
console.log(
  "Pedido 1: ",
  detallePedido1.mostrarDetalle(),
  " Total: $",
  detallePedido1.calcularSubtotal()
);
console.log(
  "Pedido 2: ",
  detallePedido2.mostrarDetalle(),
  " Total: $",
  detallePedido2.calcularSubtotal()
);
console.log(
  "Pedido 3: ",
  detallePedido3.mostrarDetalle(),
  " Total: $",
  detallePedido3.calcularSubtotal()
);
console.log(
  "Pedido 4: ",
  detallePedido4.mostrarDetalle(),
  " Total: $",
  detallePedido4.calcularSubtotal()
);

// FIN CREACION DE DETALLE DE PEDIDOS --------------------------------

// CREACION DE DE PEDIDOS --------------------------------

//CREO OBJETO
class pedido {
  constructor(fecha, detalles) {
    this.fecha = fecha;
    this.detalles = detalles;
  }
  //FUNCION - METODO
  calcularTotal() {
    let total = 0;
    for (const detalleP of this.detalles) {
      total += detalleP.calcularSubtotal();
    }
    // SU RETORNO
    return total;
  }
  //FUNCION - METODO
  mostrarPedido() {
    let texto = "";
    for (const detalleP of this.detalles) {
      texto = texto + detalleP.mostrarDetalle() + "\n";
    }
    // SU RETORNO
    texto += this.mostrarPedido();
    return texto;
  }
}

//CREO MI ARRAY
const arrayPedidos = [];
arrayPedidos.push(detallePedido1);
arrayPedidos.push(detallePedido2);
arrayPedidos.push(detallePedido3);
arrayPedidos.push(detallePedido4);

// USO EL OBJETO
const pedido1 = new pedido(new Date(), arrayPedidos);

//Check x consola
console.log("Pedido ----------------------------------------------------");
console.log(pedido1);
console.log(pedido1.calcularTotal());

// FIN CREACION DE DE PEDIDOS --------------------------------


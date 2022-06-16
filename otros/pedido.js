//Titulo
console.log("Pedido ----------------------------------------------------");

//CREO OBJETO CLASE PEDIDO (Moldes que sirven para todos los pedidos)
class pedido {
  constructor(fecha, detalles) {
    this.fecha = fecha; // El this lo que hace es traer el parametro de mi constructor
    this.detalles = detalles;
  }
  calcularTotal() {
    //FUNCION
    let total = 0;
    //Aca tengo un FOR con una variable que referencia al objeto
    for (const dp of this.detalles) {
      console.log(dp.cantidad);
      // Aca puse dp como "detalle pedido abreviado, pero podemos poner cualquier variable lo aconsejable es poner algo que se entienda" podria llamarse tambien "detalle" Tiene que recorrer los detalles
      total = total + calcularSubtotal(); //llamo al metodo del objeto, Mi pedido no tiene que saber calcular el subtotal, es por eso que directamente lo llamo a mi subtotal que sabe como calcularlo...
    } //ACA TIENE QUE IR UN RETORNO DE MI FUNCION, SI NO SALE "undefined", y lo que yo necesito ver es mi total, entonces que me retorne el valor "total"
    return total
    //OTRA OPCION DE FOR >Que tiene una variable que referencia al indice
    // for (let i = 0; i < this.detalles.length; i++) {
    //   console.log(this.detalle[i].cantidad);
    // }
  }
  //Aca deberia recorrer la lista de detalles y llamar a su metodo llamar detalle
  mostrarPedido() {
    // let texto= '';
    // for (const dp of this.detalles) {
    //   texto = texto + dp.mostrarDetalle() + '\n';

     //ESTO ES IGUAL  texto += dp.mostrarDetalle() + '\n';
  }
  // texto += this.mostrarPedido()
  // return texto;
}
// Los objetos estan para escribir metodos que hagan funcionalidades chiquitas y que el dia que tenga que hacer un calculo no tenga un funcion con 200 lineas de codigo que toque 24 varialbes, la idea es hacer objetos y la funcionalidad estan encapsuladas en objetos, y los objetos hagan uso de los atributos y los otros objetos que conocen.
//CREO MI ARRAY
const array = [];
//Agrego mis objetos al array con PUSH
array.push(detallePedido1);
array.push(detallePedido2);
array.push(detallePedido3);
//Check x consola
console.log(array);

// USO EL OBJETO
const pedido1 = new pedido(new Date(), array); //Aca para poner fecha uso new Date (); Es un objeto tipo framework
//Check x consola
console.log(pedido1);
console.log(pedido1.calcularTotal());

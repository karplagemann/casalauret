// DESAFIO N2 - SIMULADOR INTERACTIVO

alert("Desafio entregable n3 de Karen Plagemann")
alert("Simulador de precios - Efectivo o tarjeta")

//Funcion para solicitar valor a simular

function solicitarValor() {
    precio = prompt("Ingrese el valor a simular")
    // Lo correcto seria intentar convertirlo a numero, ya que si el usuario ingresa letras el programa falla!
    while (precio === "") {
        alert("Usted no ingreso ningun valor");
        precio = prompt("Por favor ingrese un valor");
    }
    return precio;
}
solicitarValor();
alert("El valor ingresado es $ " + precio)


//Funcion de modo de pago
function solicitarModoDePago() {
    modoDePago = parseInt(prompt("Seleccione modo de pago\n 1) Escriba 1 por pago en Efectivo \n 2) Escriba 2 por pago en Tarjeta"));
    while (isNaN(modoDePago) || modoDePago > 2) {
        alert("Usted ingreso un valor invalido");
        modoDePago = parseInt(prompt("Seleccione modo de pago\n 1) Escriba 1 por pago en Efectivo \n 2) Escriba 2 por pago en Tarjeta"));
    }
    return modoDePago;
}

solicitarModoDePago();

// Las variables efectivo y tarjeta no se estan utilizando.
// Es mejor declararlas como constantes, ya que no se van a modificar en ningun momento (si se modifican podrian generarse errores!)
// las podrias utilizar en los if(modoDePago) para no tener que comparar contra un valor fijo (fijate la modificacion que hice)
const efectivo = 1
const tarjeta = 2

// Lo mejor es que la funcion calcularPrecio() tenga las operaciones matematicas que involucran el calculo del precio
// y hacer otra funcion que se llame mostrarPrecio() que haga uso de los alerts()
function calcularPrecio() {
    let dto1 = 0.80;
    let dto2 = 0.94;
    let recargo1 = 1.60;
    let precioFinal = 0;

    if (modoDePago == efectivo) {
        precioFinal = Number(precio * dto1 * dto2).toFixed(2);
    } else if (modoDePago == tarjeta) {
        precioFinal = Number(precio * recargo1).toFixed(2);
    }
    
    return precioFinal;
}

function mostrarPrecio() {
    let modoDePagoText = ''
    if(modoDePago == efectivo) modoDePagoText = 'Efectivo';
    if(modoDePago == tarjeta) modoDePagoText = 'Tarjeta';

    let precioF = calcularPrecio();
    alert("El modo de pago es " + modoDePagoText + "\nEl precio cargado es $ " + precio + "\nSu precio final es $ " + precioF);
}

mostrarPrecio();




// OPERACIONES MATEMATICAS

let numeroA = 100;
let numeroB = 200;
let resultado1= numeroA + numeroB;

console.log (resultado1);

// DESAFIO N1

alert ("Desafio entregable n1 de Karen Plagemann");
alert ("Para poder visualizar este sitio debe ingresar con los siguientes datos: \nUsuario:tutor \nClave:coder")


let usuario = prompt("Ingrese Usuario:");
while( usuario != "tutor" ){
    alert("Usted ingreso usuario: " + usuario + ", ese usuario es incorrecto :(" + "\nPor favor intente nuevamente");
    usuario= prompt("Por favor ingrese el siguiente usuario:tutor");
};

let password = prompt("Ingrese clave:");
while( password != "coder" ){
    alert("Usted ingreso clave: " + password + ", esa clave es incorrecta :(" + "\nPor favor intente nuevamente");
    password= prompt("Porfavor ingrese la siguiente clave:coder");
};

alert ("Dejame chequear si eres humano")
let valor1 =prompt("Ingresa un valor mayor a 2")
if (valor1>2) {
    alert("El valor que ingresaste es: " + valor1 + " y es correcto!");
}else {
    alert("Debias ingresar un valor mayor a 2 :( ")
}


// DESAFIO N2 - SIMULADOR INTERACTIVO

alert("Desafio entregable n3 de Karen Plagemann")
alert("Simulador de precios - Efectivo o tarjeta")

//Funcion para solicitar valor a simular

const solicitarValor = () => {
  precio = Number(prompt("Ingrese el valor a simular"));
  while (isNaN(precio) || "" == precio || precio <=0) {
    precio = Number(prompt("Por favor ingrese un valor valido"));
  }
  return precio;
};
solicitarValor();
console.log(`El número ingresado es: ${precio}`);


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


const efectivo = 1
const tarjeta = 2


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

class Tienda{
    constructor(nombre, pais){
        this.nombre = nombre;
        this.pais = pais;
    }
}

const tienda1 = new Tienda("KAREN","ARGENTINA");



//APLICANDO EL ARRAY


alert  ("Ahora carguemos productos")
let entrada = prompt("Ingresa un producto");
const producto = [];
while (entrada != 'FIN') {
    producto.push(entrada);
    entrada = prompt("Sigue cargando productos, cuando quieras finalizar escribe la palabra FIN");
}
for (let index = 0; index < producto.length; index++) {
    alert("Tu producto N°" + index + ": " + producto[index]);
}




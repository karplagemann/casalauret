
// OPERACIONES MATEMATICAS

// let numeroA = 100;
// let numeroB = 200;
// let resultado1= numeroA + numeroB;

// console.log (resultado1);

// DESAFIO N1

// alert ("Desafio entregable n1 de Karen Plagemann");
// alert ("Para poder visualizar este sitio debe ingresar con los siguientes datos: \nUsuario:tutor \nClave:coder")


// let usuario = prompt("Ingrese Usuario:");
// while( usuario != "tutor" ){
//     alert("Usted ingreso usuario: " + usuario + ", ese usuario es incorrecto :(" + "\nPor favor intente nuevamente");
//     usuario= prompt("Por favor ingrese el siguiente usuario:tutor");
// };

// let password = prompt("Ingrese clave:");
// while( password != "coder" ){
//     alert("Usted ingreso clave: " + password + ", esa clave es incorrecta :(" + "\nPor favor intente nuevamente");
//     password= prompt("Porfavor ingrese la siguiente clave:coder");
// };

// alert ("Dejame chequear si eres humano")
// let valor1 =prompt("Ingresa un valor mayor a 2")
// if (valor1>2) {
//     alert("El valor que ingresaste es: " + valor1 + " y es correcto!");
// }else {
//     alert("Debias ingresar un valor mayor a 2 :( ")
// }


// DESAFIO N2 - SIMULADOR INTERACTIVO

alert ("Desafio entregable n2 de Karen Plagemann")
alert ("Simulador de precios - Efectivo o tarjeta")

//Funcion para solicitar valor a simular
function solicitarValor() {
    precio = prompt ("Ingrese el valor a simular")
    while (precio === "") {
        alert ("Usted no ingreso ningun valor");
        precio = prompt ("Por favor ingrese un valor");
    }
    return precio;
}
solicitarValor ();
alert ("El valor ingresado es $ "+ precio)


//Funcion de modo de pago
function solicitarModoDePago(){
    modoDePago = parseInt(prompt("Seleccione modo de pago\n 1)Escriba 1 por pago en Efectivo \n 2) Escriba 2 por pago en Tarjeta"));
    while (isNaN(modoDePago) || modoDePago > 2) {
        alert("Usted ingreso un valor invalido");
        modoDePago = parseInt(prompt("Seleccione modo de pago\n 1)Escriba 1 por pago en Efectivo \n 2) Escriba 2 por pago en Tarjeta"));
    }
    return modoDePago;
}

solicitarModoDePago ();

//Calcular precio
let efectivo =1
let tarjeta=2
let dto1=0.80
let dto2=0.94
let recargo1=1.60
let precioNeto = precio*dto1*dto2
let precioTarjeta =precio*recargo1

function calcularPrecio(){
    if (modoDePago ==1) {
        alert("El modo de pago es Efectivo\nEl precio cargado es $ " + precio + "\nSu precio final es $ " + precioNeto);
    }
    if (modoDePago ==2) {
        alert("El modo de pago es Efectivo\nEl precio cargado es $ " + precio + "\nSu precio final es $ " + precioTarjeta);
    }
}

calcularPrecio ();




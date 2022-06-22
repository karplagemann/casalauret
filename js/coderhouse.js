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


// // DESAFIO N2 - SIMULADOR INTERACTIVO

// alert("Desafio entregable n3 de Karen Plagemann")
// alert("Simulador de precios - Efectivo o tarjeta")

// //Funcion para solicitar valor a simular

// const solicitarValor = () => {
//   precio = Number(prompt("Ingrese el valor a simular"));
//   while (isNaN(precio) || "" == precio || precio <=0) {
//     precio = Number(prompt("Por favor ingrese un valor valido"));
//   }
//   return precio;
// };
// solicitarValor();
// console.log(`El número ingresado es: ${precio}`);


// //Funcion de modo de pago
// function solicitarModoDePago() {
//     modoDePago = parseInt(prompt("Seleccione modo de pago\n 1) Escriba 1 por pago en Efectivo \n 2) Escriba 2 por pago en Tarjeta"));
//     while (isNaN(modoDePago) || modoDePago > 2) {
//         alert("Usted ingreso un valor invalido");
//         modoDePago = parseInt(prompt("Seleccione modo de pago\n 1) Escriba 1 por pago en Efectivo \n 2) Escriba 2 por pago en Tarjeta"));
//     }
//     return modoDePago;
// }

// solicitarModoDePago();


// const efectivo = 1
// const tarjeta = 2


// function calcularPrecio() {
//     let dto1 = 0.80;
//     let dto2 = 0.94;
//     let recargo1 = 1.60;
//     let precioFinal = 0;

//     if (modoDePago == efectivo) {
//         precioFinal = Number(precio * dto1 * dto2).toFixed(2);
//     } else if (modoDePago == tarjeta) {
//         precioFinal = Number(precio * recargo1).toFixed(2);
//     }
//     return precioFinal;
// }

// function mostrarPrecio() {
//     let modoDePagoText = ''
//     if(modoDePago == efectivo) modoDePagoText = 'Efectivo';
//     if(modoDePago == tarjeta) modoDePagoText = 'Tarjeta';

//     let precioF = calcularPrecio();
//     alert("El modo de pago es " + modoDePagoText + "\nEl precio cargado es $ " + precio + "\nSu precio final es $ " + precioF);
// }

// mostrarPrecio();






//--------------------------------------------------------------------------------------------


// DOM
// SALUDO A MI USUARIO

let nombre = prompt("cual es tu nombre?");
while (nombre == "") {
    nombre = prompt("cual es tu nombre, no dejes vacio!?");
}
const saludar = (nombre) => {
  alert(`Hola ${nombre}! Como estas?`);
};
saludar(nombre);


// // APLICANDO EL ARRAY


// alert  ("Ahora carguemos productos")
// let entrada = prompt ("carga tu producto")

// const producto = [];
// while (entrada != 'FIN' || entrada =="") { //Le agrego la validacion de que no este vacio para que no cargue producto sin nombre.
//     producto.push(entrada);
//     entrada = prompt("Sigue cargando productos, cuando quieras finalizar escribe la palabra FIN");
// }
// for (let index = 0; index < producto.length; index++) {
//     alert("Tu producto N°" + index + ": " + producto[index]);
// }
// const resultado = producto +" ,";
// alert("Estos son los productos de tu lista de compras: "+resultado)
// const resultadoMayor = producto.filter (palabra=>palabra.length >=6);
// alert("Estos productos tienen mas de 6 caracteres: "+resultadoMayor)


const arrayProductosPrueba = [
    {
        nombre: "BOBINA",
        imagen: "images/ofertas/opticas.PNG",
        descripcion:"Optica gol trend",
        textAlt: "optica arteb",
        precioWeb: 4000,
        precioLista: 5000
    },
    {
        nombre: "CABLE DE ENCENDIDO",
        imagen: "https://www.motoryracing.com/images/noticias/23000/23525/7.jpg",
        descripcion:"cable de  gol trend 2013 en adelante",
        textAlt: "cable bosch",
        precioWeb: 8000,
        precioLista: 51000
        
    },
    {
        nombre: "BUJIA DE ENCENDIDO",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_957283-MLA50043409172_052022-O.webp",
        descripcion:"esto es una descripcion de bujia",
        textAlt: "bujia alemana",
        precioWeb: 400,
        precioLista: 3000
    },
    {
        nombre: "SONDA LAMBDA",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_666362-MLA48885126593_012022-O.webp",
        descripcion:"sonda para bmw",
        textAlt: "sonda bosch alemana",
        precioWeb: 410,
        precioLista: 7000
    }
]


// BUSCO EL CONTENEDOR PRINCIPAL
const mainCont = document.querySelector(".containerDom");

// Prueba InnerHTML
for(let p of arrayProductosPrueba){
    mainCont.innerHTML += `
        <div class="row">
            <article id="producto1" class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div class="card">
                    <div class="border-bottom d-flex justify-content-center align-content-center">
                        <img class="card-img-top  w-50 pt-2 pb-2"   src="${p.imagen}" alt="${p.textAlt}">
                    </div>
                <div class="card-body">
                    <div class="badge bg-primary text-wrap fw-normal text-uppercase mb-2">
                        OFERTA DEL MES
                    </div>
                    <div class="text-decoration-line-through small">$ ${p.precioLista}</div>
                    <div class="fw-bold mb-2">$ ${p.precioWeb} <span class="text-success small fst-italic fw-normal" >50% OFF</span></div>
                    <h5 class="card-title h6 fw-bold text-black opacity-75">${p.nombre}</h5>
                    <div class="card-text">
                    ${p.descripcion}</div>
                </div>
                <button type="button" class="btn btn-dark btn-sm">Agregar al Carrito</button>
                </div>
            </article>
    </setion>
    `
}

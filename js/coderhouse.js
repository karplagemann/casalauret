
// OPERACIONES MATEMATICAS

// let numeroA = 100;
// let numeroB = 200;
// let resultado1= numeroA + numeroB;

// console.log (resultado1);

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

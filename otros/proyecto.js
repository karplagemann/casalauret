let mensaje1= "Este es la primer entrega del proyecto final de javascript de KAREN PLAGEMANN"
console.log(mensaje1)

const dolar =212
const porcentaje50= 0.50
const porcentaje30 = 0.30
const porcentaje20= 0.20

// Mi presupuesto
const presupuesto [];

// Coloque sus ingresos mensuales = 100%

const solicitarValor = () => {
    ingreso = parseFloat(prompt("Ingrese su ingreso"));
    while (isNaN(ingreso) || "" == ingreso || ingreso <=0)
    {
        ingreso = parseFloat(prompt("Por favor ingrese un valor valido o mayor a 1"));
    }
    return ingreso;
};
solicitarValor();

// Calculamos su ahorro = 20%
let ahorro = alert("Su ahorro es $"+ ingreso * porcentaje20)
let ahorroDolares = alert("Su ahorro en dolares es U$S:"+ahorro/dolar)

// Gastos fijos = 50%
let gastosFijo = alert("Su monto para gastos fijos es $"+ingreso * porcentaje50)

// Gastos variables = 30%
let gastosVaribles = alert("Su monto para gastos variables es $"+ingreso * porcentaje20)


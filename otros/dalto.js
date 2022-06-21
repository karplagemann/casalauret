let nombre = prompt("cual es tu nombre?");
const saludar = (nombre) => {
  alert(`Hola ${nombre}! Como estas?`);
};
saludar(nombre);

let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

// i se va a ejectuar mientras i sea menor que cantidad. Osea el for se va a ejectuar de acuerdo a la cantidad de alumnos que se carguen 
for (i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarLista = (nombre,posicionLista) => {
    let presencia = prompt (nombre);
    if (presencia == "presente" || presencia =="PRESENTE" || presencia =="Presente") {
        alumnosTotales [posicionLista][1]++;
    }
}

for (i = 0 ; i<30; i++){
    for (alumno in alumnosTotales){
        tomarLista(alumnosTotales[alumno][0], alumno);
    }
}

const year = 360
const semestre = year /2
const porcentajeAsistencias = semestre *0.1
const month = 30

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales [alumno][0]}: <br>
    --- Presentes: <b>${alumnosTotales [alumno][1]}</b><br>
    --- Ausentes: <b>${month-alumnosTotales[alumno][1]}</b>`;
    if (month-alumnosTotales [alumno][1] > porcentajeAsistencias) {
        resultado+= ` Reprobado por inasistencias <br>`
    } else {
        resultado+= `<br>`
    } document.write (resultado)
}
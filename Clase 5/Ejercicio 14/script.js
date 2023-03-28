// 14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
// desordenada a medida que se agregan.

let nombre = document.getElementById("txtNombre");
let enviar = document.getElementById("btnEnviar");
let nombres = [];
function nuevoNombre() {
    nombres.push(nombre.value);
    nombres.sort(() => Math.random() - 0.5);
    let tabla = document.getElementById("tabla-datos");
    tabla.innerHTML="Nombres";
    for (let i = 0; i < nombres.length; i++) {
        let nuevaFila = tabla.insertRow(tabla.length);
        let celdaNombre= nuevaFila.insertCell(0);
        celdaNombre.innerHTML = nombres[i];;
    }
}
enviar.addEventListener("click",nuevoNombre);
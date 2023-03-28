// 13. A través de un formulario, el usuario debe introducir un número secreto que estará
// entre 0 y 5.
// El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
// juego.
// Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde
let numeroRandom = reiniciarNumero();
const intentos = document.getElementById("intentos");
const ultimoResultado = document.getElementById("ultimoResultado");
const numero = document.getElementById("txtNumero");
const empezar = document.getElementById("btnEnviar");
let cantidadIntentos = 1;
let reiniciar = document.getElementById("btnReiniciar");

function checkIntento() {
  if(isNaN(parseInt(numero.value)) || numero.value<0 || numero.value>5)
  {
    alert("Debe ingresar un numero del 0 al 5");
    numero.value="";
  }
  else
  {
    let numeroUsuario = numero.value;
    if(cantidadIntentos == 1)
    intentos.textContent="Cantidad de intentos ";
    intentos.textContent += numeroUsuario + " ";
    if(numeroUsuario==numeroRandom)
    {
      ultimoResultado.textContent="Felicidades, adivinó el número!!!";
      ultimoResultado.style.backgroundColor="green";
      juegoFinalizado();
    }
    else
    {
      if(cantidadIntentos===3)
      {
        ultimoResultado.textContent="Fin del juego!!";
        ultimoResultado.backgroundColor="red";
        juegoFinalizado();
      }
      else
      {
        ultimoResultado.textContent="Incorrecto!";
        ultimoResultado.style.backgroundColor="red";
      }
    }
    cantidadIntentos++;
  }
}
function juegoFinalizado() {
  empezar.disabled=true;
  numero.disabled=true;
  numero.value="";
  reiniciar.disabled=false;
}
function reiniciarJuego() {
  cantidadIntentos=1;
  numeroRandom=reiniciarNumero();
  empezar.disabled=false;
  numero.disabled=false;
  numero.value="";
  intentos.textContent="";
  ultimoResultado.textContent="";
  reiniciar.disabled=true;
  ultimoResultado.style.background="white";
}
function reiniciarNumero() {
  return Math.floor(Math.random()*6);
}
empezar.addEventListener("click", checkIntento);
reiniciar.addEventListener("click", reiniciarJuego);

// Para este ejercicio necesite mucha ayuda. Me guie por este link --> https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/A_first_splash
// Lo rehice un par de veces para llegar a entenderle la logica.
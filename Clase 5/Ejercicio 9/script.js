// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
// convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
// Mostrar el resultado elemento de html.
function Convertir() {
    let dolar = document.getElementById("dolar").value;
    if(isNaN(dolar*300) || dolar=="")
    alert("Debe ingresar un numero")
    else
    document.getElementById("pesos").value = (dolar*300).toString();
}
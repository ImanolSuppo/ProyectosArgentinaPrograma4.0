// 10. Generar la inversa del ejercicio anterior (de pesos a dólares).
function Convertir() {
    let pesos = document.getElementById("pesos").value;
    if(isNaN(pesos/300)|| pesos=="")
    alert("Debe ingresar un numero")
    else
    document.getElementById("dolar").value = (pesos/300).toString();
}
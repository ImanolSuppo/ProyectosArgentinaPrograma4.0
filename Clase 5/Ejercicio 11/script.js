// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
// ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
// son 86 grados fahrenheit.
function Convertir() {
    let centigrados = document.getElementById("centigrados").value;
    if(isNaN(centigrados/300) || centigrados=="")
    alert("Debe ingresar un numero")
    else
    document.getElementById("fahrenheit").value = ((centigrados * 9/5) + 32).toString();
}
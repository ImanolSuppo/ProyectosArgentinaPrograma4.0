// 12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
// podremos especificar las características de la caja. 

let botonEnviar = document.getElementById("btnEnviar");
botonEnviar.addEventListener("click",function() {
    let nombreCliente = document.getElementById("nombreCliente").value;
    let materialCaja = document.getElementById("cboMaterialCaja").value;
    let dimensiones = document.getElementById("rdbDimensiones").value;
    let comentarios = document.getElementById("comentarios").value;
    if(nombreCliente == "" || comentarios=="")
    alert("Debe completar todos los campos")
    else
    {
        let texto = nombreCliente + " ha pedido una caja de " + materialCaja + " con unas dimensiones " + dimensiones + ". " + comentarios;
        console.log(texto);
    }
})
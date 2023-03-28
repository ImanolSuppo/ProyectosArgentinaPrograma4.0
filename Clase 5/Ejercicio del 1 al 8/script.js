// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
const arrayColores = ["rojo","azul","amarillo","naranja","verde"];

// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
const variableColor = arrayColores[3];

// 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
// ejercicio 1.
console.log(arrayColores[0].charAt(0));

// 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
// función Math.random().
console.log(Math.floor(Math.random() * 99) + 1);

// 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
const arrayNumeros=[];
for (let i = 1; i <= 10; i++) {
    arrayNumeros.push(i);
}
console.log(arrayNumeros);

// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
let arrayNumerosRandoms=[];
for (let i = 1; i <= 10; i++) {
    arrayNumerosRandoms.push(Math.floor(Math.random() * 100));
}
console.log(arrayNumerosRandoms);

// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
// consola.
let arrayCopia = arrayNumerosRandoms;
console.log(arrayCopia);

// 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
// luego recorriendolo para mostrar el resultado deseado del ejercicio.
let cadenas ="";
let cadena = prompt("Ingrese una cadena");
while (cadena.toLowerCase()!="cancelar") {
    if (cadenas=="")
    cadenas = cadena;
    else
    cadenas += " - " + cadena;
    cadena = prompt("Ingrese una cadena");
}
 console.log(cadenas);
 let arrayCadenas = cadenas.split("-");
 console.log(arrayCadenas);

//  //OTRA OPCION:
// const arrayCadenas=[];
// let cadena = prompt("Ingrese una cadena");
// while (cadena!="cancelar") {
//     arrayCadenas.push(cadena);
//     cadena = prompt("Ingrese una cadena");
// }
// console.log(arrayCadenas.join("-"));
// console.log(arrayCadenas);

//Nose si entendí bien el ejercicio, pero se me ocurrieron esas dos opciones.
// JavaScript source code

//1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
//usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
//que es. *
function mostrarTipoDato(dato)
{
    console.log(typeof (dato));
}
mostrarTipoDato(true);

//    2. Dado dos números ingresados por el usuario, se pide realizar una función que
//devuelve la resta de ambos números.Mostrar el resultado por la consola.
let num1, num2;
function restoDosNumeros(num1, num2)
{
    return num1 - num2;
}
num1 = parseInt(prompt('Escribe el primer numero'));
num2 = parseInt(prompt('Escribe el segundo numero'));
console.log('La resta de ', num1, ' y ', num2, ' es: ', restoDosNumeros(num1, num2));

//3. Generar una función que le ingresen por parámetro dos valores distintos en dos
//variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
//    Pasarlo a a y mostrarlos.
function intercambioVariables(a, b)
{
    let aux = a;
    a = b;
    b = aux;
    console.log('a = ', a);
    console.log('b = ', b);
    console.log('Se intercambiaron los valores');
}
intercambioVariables(19232, 'holaaaa');

//4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
//calcular su perímetro, su superficie, e informar los mismos en consola.
function calcularCuadrado(lado)
{
    let perimetro = lado + lado + lado + lado;
    let superficie = lado * lado;
    console.log('perimetro = ', perimetro);
    console.log('superficie = ', superficie);
}
calcularCuadrado(5);

//5. Generar una función que dada una temperatura en grados fahrenheit los convierta a
//grados celsius.
function convertirCelsius(temperaturaFahrenheit)
{
    return (temperaturaFahrenheit - 32) * 5 / 9
}
let temperaturaFahrenheit = parseFloat(prompt('Ingrese una temperatura en Fahrenheit :'));
console.log('Convertido en celsius queda ', Math.round(convertirCelsius(temperaturaFahrenheit)), ' grados');

//6. Realizar una función que calcule el factorial de un número ingresado por el usuario(el
//número no puede ser mayor de 10, realizar la validación).Mostrar el resultado por la
//consola.
function factorial()
{
    let n1, n2, factorial;
    do {
        n1 = parseInt(prompt('Ingrese un numero(no mayor a 10)'));
    } while (n1 > 10);
    factorial = n1;
    n2 = 1;
    while (n1 > 1) {
        n2 = n1 * n2;
        n1--;
    }
    console.log('El factorial de ', factorial, ' es = ', n2);
}
factorial();

//7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
//indique si ese texto es un palíndromo.Ejemplo de palíndromo: “Somos o no somos”.
let cadenaPalindromo = prompt('Ingrese una cadena de texto: ');
function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");

    return strReversed === str ? "es palindromo" : "no es palindromo";
}
console.log(cadenaPalindromo, palindromeChecker(cadenaPalindromo.toLowerCase().replace(/ /g,"")));

//8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
//lo muestre en mayúsculas y luego en minúsculas.Investigue el manejo de string en
//Javascript.
let cadena = prompt('Ingrese una cadena de texto:');
console.log('En mayusculas: ', cadena.toUpperCase());
console.log('En minuscula: ', cadena.toLowerCase());

//9. Se pide que un usuario ingrese una nota numérica de un alumno.Muestra la
//calificación resultante según la nota ingresada:
//0 - 3: Muy deficiente
//3 - 5: Insuficiente
//5 - 6: Suficiente
//6 - 7: Bien
//7 - 9: Notable
//9 - 10: Sobresaliente
let nota = prompt('Ingrese una nota: ');
let calificacion;
switch (true) {
    case nota > 0 && nota <= 3:
        calificacion = 'Muy deficiente';
        break;
    case nota > 3 && nota <= 5:
        calificacion = 'Insuficiente';
        break;
    case nota > 5 && nota <= 6:
        calificacion = 'Suficiente';
        break;
    case nota > 6 && nota <= 7:
        calificacion = 'Bien';
        break;
    case nota > 7 && nota <= 9:
        calificacion = 'Notable';
        break;
    case nota > 9 && nota <= 10:
        calificacion = 'Sobresaliente';
        break;
    default:
        calificacion = 'ERROR';
}
if (calificacion == 'ERROR')
    console.log('Usted no ha ingresado una nota. No se puede asignar una calificacion!!');
else
    console.log('Calificacion: ', calificacion);

//10. Se pide realizar un script en el que el usuario introduce el número del mes(1 al 12) y
//devuelve si ese mes tiene 30 o 31 días.
let mes = parseInt(prompt('Ingrese el numero del mes (1 al 12)'))
let dias;
switch (mes) {
    case 1:
        dias = 31;
        break;
    case 2:
        dias = 28;
        break;
    case 3:
        dias = 31;
        break;
    case 4:
        dias = 30;
        break;
    case 5:
        dias = 31;
        break;
    case 6:
        dias = 30;
        break;
    case 7:
        dias = 31;
        break;
    case 8:
        dias = 31;
        break;
    case 9:
        dias = 30;
        break;
    case 10:
        dias = 31;
        break;
    case 11:
        dias = 30;
        break;
    case 12:
        dias = 31;
        break;
    default:
        dias = 0;
}
if (dias == 0)
    console.log('No inserto un numero del mes. Se produjo un error');
else
    console.log('Ese mes tiene ', dias, ' dias');

//11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
//número que ingrese el usuario(no puede ser mayor de 10, realizar la validación):
//1
//12
//123
//1234
//12345
//123456
//……
let piramide = '';
let numero = parseInt(prompt('Ingrese un numero(no mayor a 10)'));
while (numero > 10) {
    numero = parseInt(prompt('Debe ingresar un numero NO MAYOR A 10!!'));
}
for (var i = 1; i <= numero; i++) {
    for (var u = 1; u <= i; u++) {
        piramide += u;
    }
    piramide += '\n';
}
console.log(piramide);

//OTRO METODO PARA PIRAMIDE (SIN CONSOLE)
//let numero = parseInt(prompt('Ingrese un numero(no mayor a 10)'));
//while (numero > 10) {
//    numero = parseInt(prompt('Debe ingresar un numero NO MAYOR A 10!!'));
//}
//for (var i = 1; i <= numero; i++) {
//    for (var u = 1; u <= i; u++) {
//        document.write(u);
//    }
//    document.write('<br>')
//}

//12. Generar una función donde ingresen dos números, el primero corresponde a la
//cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
//colocar en una caja.Calcule cuántas cajas completas se pueden llenar con los bultos
//disponibles y cuantos bultos sueltos quedarían.Mostrar ambos resultados en consola.
function calcularBultos(bultosStock,bultosPorCaja)
{
    let cajas = Math.floor(bultosStock / bultosPorCaja);
    let sobrante = bultosStock % bultosPorCaja;
    console.log('Se llenan ', cajas, ' cajas y sobran ', sobrante, ' bultos');
}
calcularBultos(26, 5);

//13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
//Fiesta(código "fiesta"), el descuento es de un 5 %.Si el coche a la venta es un Ford
//Focus(código "focus"), el descuento es del 10 %.El usuario introduce el artículo a
//través de su código y el script saca el descuento correspondiente por la consola.
let codigo = prompt('Porfavor, ingrese el codigo del vehiculo que desea comprar');
if (codigo == 'fiesta')
    console.log('Su descuento es del 5%');
else if (codigo == 'focus')
    console.log('Su descuento es del 10%');
else
    console.log('No se a encontrado ese vehiculo en el stock');

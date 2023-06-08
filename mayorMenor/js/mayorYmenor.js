/* 
Reto #1 - Número mayor y menor

Escribe un programa que pida al usuario 2 números, mostrando como salida cuál es el número mayor y la diferencia de uno respecto al otro. En caso de que los números sean iguales, mostrarlo también en pantalla.
*/

var num1 = 0;
var num2 = 0;
var jugadas = 0;

while (jugadas < 3) {
  
    num1 = prompt("Ingresa un primer número: ");
    num2 = prompt("Ingresa un segundo número: ");

    if (num1 == num2) {
        alert("El valor de los números es el mismo");
        jugadas = jugadas +1
    } else if (num1 > num2) {
        dif1 = num1 - num2 
        alert("Este fue el número mayor: " + num1 + ". La diferencia con respecto al otro número fue de: " + dif1);
        jugadas = jugadas +1
    } else {
        dif2 = num2 - num1
        alert("Este fue el número mayor: " + num2 + ". La diferencia con respecto al otro número fue de: " + dif2);
        jugadas = jugadas +1
    } 
}



/*
Reto #3 - Rangos cambiantes.
Nuevamente pide a tu usuario que indique 3 números: un límite superior, un límite inferior y uno de comparación. Si el número de comparación se encuentra entre los 2 primeros, comunicarlo en pantalla. En caso estar por debajo del límite inferior o por arriba del límite superior, también mostrarlo en pantalla.
*/


var limInf = 0;
var limSup = 0;
var limCom = 0;
var jugadas = 0;

while (jugadas < 3) {
    
    limInf = prompt("Ingresa un número que servirá como límite inferior: ");
    limSup = prompt("Ingresa un número que servirá como límite superior: ");
    limCom = prompt("Ingresa un número que servirá como comparaciónr: ");

    if (limCom >= limInf && limCom <= limSup) {
        alert("Genial, el número que elegiste está dentro del rango: " + limInf + " y " + limSup);
        jugadas = jugadas +1
    } else if (limCom < limInf) {
        alert("Tu número es muy pequeño, el rango es entre " + limInf + " y " + limSup);
        jugadas = jugadas +1
    } else if (limCom > limSup) {
        alert("Tu número es muy grande, el rango es entre " + limInf + " y " + limSup);
        jugadas = jugadas +1
    } else {
        alert("Aún no ingresas tu número.");
    }

}
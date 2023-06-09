/*
Reto #2 - En el rango, por favor.

Pide al usuario que indique 2 números: uno que servirá como límite y otro para comparar. Si el segundo número es menor al primero, mostrarás un mensaje diciendo “El número ‘x’ se encuentra en el rango, gracias” y en caso contrario dirá “El número ‘x’ excede el límite permitido”.
*/

var numLim = 0;
var numCom = 0;
var jugadas = 0;

while (jugadas < 3) {

    numLim = prompt("Ingresa un número mayor a 0 que servirá como límite superior: ");
    numCom = prompt("Ingresa cualquier número: ");

    if (numCom <= numLim) {
        alert("El número " + numCom + " se encuentra en el rango, gracias.");
        jugadas = jugadas +1
    } else {
        alert("El número " + numCom + " excede el límite permitido.");
        jugadas = jugadas +1
    }
    
}



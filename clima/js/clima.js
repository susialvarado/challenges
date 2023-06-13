/*
Reto #5 - ¿Cómo está el clima?
Crea un programa que pregunte al usuario si está lloviendo, en caso de responder “sí” pregunta si está haciendo mucho viento y si responde “sí” nuevamente muestra un mensaje indicando que hace mucho viento para salir con una sombrilla. En caso contrario, anima al usuario a que lleve una sombrilla. Para el caso de responder “no” en la primer pregunta, entonces solo desea un bonito día.
Considera que las respuestas pueden pasarse a minúsculas para evitar posibles errores.
*/

var lluvia = 0;
var viento = 0;
var pregunta = 0;

while (pregunta < 3) {
    lluvia = prompt("Hola, ¿está lloviendo?");

    if (lluvia.toLowerCase() == "si") {
        viento = prompt("¿Está haciendo mucho viento?");
        pregunta = pregunta +1
        if (viento.toLowerCase() == "si") {
            alert("Hace mucho viento para salir con una sombrilla.");
        } else {
            alert("Te recomiendo salir con sombrilla en mano.");
        }
    } else {
        alert("Excelente, ten un hermoso día.");
        pregunta = pregunta +1
    }
}
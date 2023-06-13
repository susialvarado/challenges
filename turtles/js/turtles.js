/*
Reto #4 - “I like turtles”
Escribe un programa que pida al usuario ingrese su animal favorito, si coloca ‘Tortuga’, ‘tortuga’, ‘TORTUGA’ o cualquier otra variante de la palabra entonces mostrar en pantalla “También me gustan las tortugas”. En caso contrario mostrar el mensaje “Ese animal es genial, pero prefiero las tortugas”.
*/

var animal = 0;
var preguntas = 0;

while (preguntas < 3) {
    
    animal = prompt("¿Cuál es tu animal favorito?");

    if (animal.toLowerCase() == "tortuga") {
        alert("También me gustan las tortugas!");
        preguntas = preguntas +1
    } else {
        alert("Ese animal es genial, pero prefiero las tortugas!");
        preguntas = preguntas +1
    }
}
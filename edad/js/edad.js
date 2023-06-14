/*
Reto #6 - Edad permitida
Pide al usuario que ingrese su edad y mostrarás un mensaje correspondiente si esta coincide con las siguientes condiciones:
Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos?
Entre 29 y 18 años: Es un momento excelente para impulsar tu carrera.
Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.
*/


var pregunta = 0;

while (pregunta < 3) {
    
    edad = prompt("¿Qué edad tienes? Elige 1 para: 30 años o más. Elige 2 para: entre 18 y 29 años. Elige 3 para: 18 años o menos.");

    switch (edad) {
        case '1':
          alert("Nunca es tarde para aprender ¿Qué curso tomaremos?");
          pregunta = pregunta +1
          break;
        case '2':
          alert("Es un momento excelente para impulsar tu carrera.");
          pregunta = pregunta +1
          break;
        case '3':
          alert("¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.");
          pregunta = pregunta +1
          break;
        default:
          alert("¿Ya ingresaste tu edad?");
          pregunta = pregunta +1
      }
}

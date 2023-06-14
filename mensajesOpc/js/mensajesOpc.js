/*
Reto #7 - Mensajes opcionales
Crearás un un script para el que el usuario indicará un número entre 1 y 6. Como respuesta se le brindará un mensaje según el número leido:
1 - “Hoy aprenderemos sobre prorgamación”
2 - “¿Qué tal tomar un curso de marketing digital?
3 - “Hoy es un gran día para comenzar a aprender de diseño”
4 - ¿Y si aprendemos algo de negocios online?
5 - “Veamos un par de clases sobre producción audiovisual”
6 - “Tal vez sea bueno desarrollar una habilidad blanda en Platzi”
En caso indicar un número distinto, pedir al usuario que ingrese uno en el rango válido.
*/

var usuario = 0;
var solicitud = 0;

while (solicitud < 7) {
    
    usuario = prompt("¡Ingresa un número del 1 al 6, y veamos qué tengo para decir!");

    switch (usuario) {
        case '1':
            alert("Hoy aprenderemos sobre prorgamación");
            solicitud = solicitud +1
            break;
        case '2':
            alert("¿Qué tal tomar un curso de marketing digital?");
            solicitud = solicitud +1
            break;
        case '3':
            alert("Hoy es un gran día para comenzar a aprender de diseño");
            solicitud = solicitud +1
            break;
        case '4':
            alert("¿Y si aprendemos algo de negocios online?");
            solicitud = solicitud +1
            break;
        case '5':
            alert("Veamos un par de clases sobre producción audiovisual");
            solicitud = solicitud +1
            break;
        case '6':
            alert("Tal vez sea bueno desarrollar una habilidad blanda en Platzi");
            solicitud = solicitud +1
            break;
        default:
            alert("Ingresa un número dentro del rango válido, por favor");
            solicitud = solicitud +1
            break;
    }
}
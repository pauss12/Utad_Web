
/*Tener un elemento jugadores, para no tener que estar pasandole ese valor a todas las funciones */
let jugadorSelecccionado = 0;

document.addEventListener("DOMContentLoaded", function () {

    //Obtener el elemento
    const dropdown = document.getElementById("dropdown");

    //Obtener todas las opciones disponibles dentro de ese elemento
    const opciones = document.querySelectorAll('.dropdown-item');

    //Recorrer cada una de esas opciones
    opciones.forEach(function (opcion, index) {
        //Agregar un evento click a cada una de las opciones
        opcion.addEventListener('click', function () {
            //Cuando detecta que ese elemento se ha clickeado, se guarda el valor de ese elemento en el dropdown (es decir el numero de jugadores seleccionado)
            jugadorSelecccionado = index;
        });
    });
});

function Seleccionar() {

    if (jugadorSelecccionado == null) {
        console.log("No hay jugadores seleccionados");
    } else {
        if (jugadorSelecccionado == 0) {
            //cambiar el texto del boton
            document.getElementById("botonSeleccionado").innerText = "0 Seres Humanos";
        } else if (jugadorSelecccionado == 1) {
            document.getElementById("botonSeleccionado").innerText = "1 Ser Humano";
        } else if (jugadorSelecccionado == 2) {
            document.getElementById("botonSeleccionado").innerText = "2 Seres Humanos";
        }
    }
    
}

function generarJugada() {

    const opcion = Math.floor(Math.random() * 3) + 1;

    switch (opcion) {
        case 1:
            return "piedra";
        case 2:
            return "papel";
        case 3:
            return "tijera";
    }
}

function determinarGanador(jugada1, jugada2) {

    if (jugador1 == jugador2) {
        return "Empate";
    } else if (jugador1 == "piedra") {
        if (jugador2 == "papel") {
            return "Gana el jugador 2";
        } else {
            return "Gana el jugador 1";
        }
    } else if (jugador1 == "papel") {
        if (jugador2 == "tijera") {
            return "Gana el jugador 2";
        } else {
            return "Gana el jugador 1";
        }
    } else if (jugador1 == "tijera") {
        if (jugador2 == "piedra") {
            return "Gana el jugador 2";
        } else {
            return "Gana el jugador 1";
        }
    }
}

//Crear un event listener para que este atento de si el boton ha sido clickeado o no
const button = document.getElementById("botonJugar");

if (button !== null) {
    button.addEventListener("click", Jugar);
}

function Jugar() {

    //Ya tengo los jugadores seleccionados, ahora tengo que empezar la partida
    if (jugadorSelecccionado == 0)
    { 
        //Significa que va a haber 2 maquinas, 0 seres humanos
        var jugadaMaquina1 = generarJugada();
        var jugadaMaquina2 = generarJugada();

        alert("HOLA 0 jugador");

        //Ver quien ha ganado
        const ganador = determinarGanador(jugadaMaquina1, jugadaMaquina2);

        //Mostrar mensaje
        alert(ganador);

    } else if (jugadorSelecccionado == 1) {
        
        var jugadaMaquina1 = generarJugada();
        var jugada2 = prompt("Elige tu jugada: Piedra, Papel o Tijera");

        alert("El jugador 2 es " + jugada2);
        //Ver quien ha ganado
        const ganador = determinarGanador(jugadaMaquina1, jugada2);

        //Mostrar mensaje
        alert(ganador);

    } else if (jugadorSelecccionado == 2) {
       
        var jugada1 = prompt("Jugador 1, elige tu jugada: Piedra, Papel o Tijera");
        var jugada2 = prompt("Jugador 2, elige tu jugada: Piedra, Papel o Tijera");

        //Ver quien ha ganado
        const ganador = determinarGanador(jugada1, jugada2);

        //Mostrar mensaje
        alert(ganador);
    }
}
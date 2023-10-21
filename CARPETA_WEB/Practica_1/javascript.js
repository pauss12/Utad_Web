
// Variables globales -----------------------------------------------------------------------------------
var jugadorSelecccionado = 0;
var ganador = "";
var jugadaMaquina1 = "";
var jugadaMaquina2 = "";
var jugada1 = "";
var jugada2 = "";

//SELECCIONAR JUGADORES ---------------------------------------------------------------------------------

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

//GENERAR JUGADA ----------------------------------------------------------------------------------------
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

//DETERMINAR EL GANADOR ---------------------------------------------------------------------------------

function determinarGanador(jugada1, jugada2) {

    if (jugada1 === jugada2) {
        return "Empate";
    } else if (jugada1 === "piedra") {
        if (jugada2 === "papel") {
            return "Gana el jugador 2";
        } else {
            return "Gana el jugador 1";
        }
    } else if (jugada1 === "papel") {
        if (jugada2 === "tijera") {
            return "Gana el jugador 2";
        } else {
            return "Gana el jugador 1";
        }
    } else if (jugada1 === "tijera") {
        if (jugada2 === "piedra") {
            return "Gana el jugador 2";
        } else {
            return "Gana el jugador 1";
        }
    }
}

//CODIGO PARA JUGAR EL JUEGO ---------------------------------------------------------------------------
function Jugar() {

    //Ya tengo los jugadores seleccionados, ahora tengo que empezar la partida
    if (jugadorSelecccionado == 0)
    { 
        //Significa que va a haber 2 maquinas, 0 seres humanos
        jugadaMaquina1 = generarJugada();
        jugadaMaquina2 = generarJugada();

        MostrarJugada(jugadaMaquina1, jugadaMaquina2);

        ganador = determinarGanador(jugadaMaquina1, jugadaMaquina2);

        mostrarResultado(ganador);

    } else if (jugadorSelecccionado == 1) {
        
        jugadaMaquina1 = generarJugada();
        
        jugada2 = prompt("Jugador 2 => Elige tu jugada: Piedra, Papel o Tijera");
        jugada2 = jugada2.toLowerCase();

        while (jugada2 !== "piedra" && jugada2 !== "papel" && jugada2 !== "tijera") {
            alert("La jugada no es válida. Por favor, escribe 'piedra', 'papel' o 'tijera'.");
            jugada2 = prompt("Jugador 2 => Elige tu jugada: Piedra, Papel o Tijera");
            jugada2 = jugada2.toLowerCase();
        }

        MostrarJugada(jugadaMaquina1, jugada2);

        ganador = determinarGanador(jugadaMaquina1, jugada2);

        mostrarResultado(ganador);

    } else if (jugadorSelecccionado == 2) {
       
        jugada1 = prompt("Jugador 1 => Elige tu jugada: Piedra, Papel o Tijera");
        jugada1 = jugada1.toLowerCase();

        while (jugada1 !== "piedra" && jugada1 !== "papel" && jugada1 !== "tijera") {
            alert("La jugada no es válida. Por favor, escribe 'piedra', 'papel' o 'tijera'.");
            jugada1 = prompt("Jugador 1 => Elige tu jugada: Piedra, Papel o Tijera");
            jugada1 = jugada1.toLowerCase();
        }

        jugada2 = prompt("Jugador 2 => Elige tu jugada: Piedra, Papel o Tijera");
        jugada2 = jugada2.toLowerCase();

        while (jugada2 !== "piedra" && jugada2 !== "papel" && jugada2 !== "tijera") {
            alert("La jugada no es válida. Por favor, escribe 'piedra', 'papel' o 'tijera'.");
            jugada2 = prompt("Jugador 2 => Elige tu jugada: Piedra, Papel o Tijera");
            jugada2 = jugada2.toLowerCase();
        }

        MostrarJugada(jugada1, jugada2);

        ganador = determinarGanador(jugada1, jugada2);

        mostrarResultado(ganador);
    }
}

// Función para mostrar el resultado -----------------------------------------------------------------------
//Quiero que solo cuando haya determinado el ganador, que aparezca el texto del resultado

function mostrarResultado(ganador) {

    // Establecer la propiedad `hidden` del elemento HTML a `false`
    const elemento = document.getElementById("resultado");
    elemento.hidden = false;

    // Establecer el valor del elemento HTML
    let input = "";
    
    if (ganador == "Gana el jugador 1") {
        input = "¡¡GANA EL JUGADOR 1!!";
    } else if (ganador == "Gana el jugador 2") {
        input = "¡¡GANA EL JUGADOR 2!!";
    }
    else if (ganador == "Empate") {
        input = "¡¡EMPATE!!";
    }

    // Actualizar la interfaz
    document.getElementById("resultado").value = input;
}

// Función para reiniciar el juego -----------------------------------------------------------------------
function Reiniciar() {
    // Resetear las variables
    ganador = "";
    jugadaMaquina1 = "";
    jugadaMaquina2 = "";
    jugada1 = "";
    jugada2 = "";

    // Actualizar la interfaz
    document.getElementById("resultado").hidden = true;
    document.getElementById("jugador1img").src = "./images/carta_sin_revelar.jpg";
    document.getElementById("jugador2img").src = "./images/carta_sin_revelar.jpg";
}

// Función para mostrar las cartas -----------------------------------------------------------------------
function MostrarJugada(jugada1, jugada2) {
    // Obtener la imagen correspondiente a la jugada 1
    const imgJugada1 = document.getElementById("jugador1img");

    // Modificar la imagen
    imgJugada1.src = mostrarJugada1(jugada1);

    // Obtener la imagen correspondiente a la jugada 2
    const imgJugada2 = document.getElementById("jugador2img");

    // Modificar la imagen
    imgJugada2.src = mostrarJugada1(jugada2);
}

function mostrarJugada1(jugada) {
    // Obtener la imagen correspondiente a la jugada
    switch (jugada) {
        case "piedra":
            return "./images/piedra.jpg";
        case "papel":
            return "./images/papel.png";
        case "tijera":
            return "./images/tijera.png";
        default:
            return "";
    }
}
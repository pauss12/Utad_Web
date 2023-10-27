
//Variables Globales
let jugadorHumanos = 0;
let numeroPartidasSeleccionado = 0;
let jugador1 = "";
let jugador2 = "";
let jugador3 = "";


//Seleccionar el numero de jugadores
document.addEventListener("DOMContentLoaded", function () {

    //Obtener el elemento
    const dropdown = document.getElementById("botonSeleccionado");

    //Obtener todas las opciones disponibles dentro de ese elemento
    const opciones = document.querySelectorAll('.dropdown-item');

    //Recorrer cada una de esas opciones
    opciones.forEach(function (opcion, index) {
        //Agregar un evento click a cada una de las opciones
        opcion.addEventListener('click', function () {
            //Cuando detecta que ese elemento se ha clickeado, se guarda el valor de ese elemento en el dropdown (es decir el numero de jugadores seleccionado)
            jugadorHumanos = index;
        });
    });
});


//Seleccionar el numero de partidas
document.addEventListener("DOMContentLoaded", function () {

    //Obtener el elemento
    const dropdown = document.getElementById("botonPartidas");

    //Obtener todas las opciones disponibles dentro de ese elemento
    const opciones = document.querySelectorAll('.dropdown-item');

    //Recorrer cada una de esas opciones
    opciones.forEach(function (opcion, index) {
        //Agregar un evento click a cada una de las opciones
        opcion.addEventListener('click', function () {
            //Cuando detecta que ese elemento se ha clickeado, se guarda el valor de ese elemento en el dropdown (es decir el numero de jugadores seleccionado)
            numeroPartidasSeleccionado = index
        });
    });
});

//Funciones -----------------------------------------------------------------------------------------------------------------------------------------------------------
function SeleccionarHumanos() { 

    //Seleccionar el numero de jugadores 
    if (jugadorHumanos == null) {
        console.log("No hay jugadores seleccionados");
    } else {
        switch (jugadorHumanos) { 
            case 0:
                document.getElementById("botonSeleccionado").innerText = "0 Seres Humanos";
            break;
            
            case 1:
                document.getElementById("botonSeleccionado").innerText = "1 Ser Humano";
            break;
            
            case 2:
                document.getElementById("botonSeleccionado").innerText = "2 Seres Humanos";
            break;
            
            case 3:
                document.getElementById("botonSeleccionado").innerText = "3 Seres Humanos";
            break;
        }
    }
}

function SeleccionarPartidas() {
    //Seleccionar el numero de jugadores 
    if (numeroPartidasSeleccionado == null) {
        console.log("No hay numero de partidas seleccionadass");
    } else {

        switch (numeroPartidasSeleccionado) {
            case 4:
                document.getElementById("botonPartidas").innerText = "1 partida";
                break;

            case 5:
                document.getElementById("botonPartidas").innerText = "2 partidas";
                break;

            case 6:
                document.getElementById("botonPartidas").innerText = "3 partidas";
                break;

            case 7:
                document.getElementById("botonPartidas").innerText = "4 partidas";
                break;

            case 8:
                document.getElementById("botonPartidas").innerText = "5 partidas";
                break;
        }
    }

    if (jugadorHumanos >= 0 && numeroPartidasSeleccionado >= 1) {
        //Mostramos el boton de jugar
        document.getElementById("botonJugar").hidden = false;
        document.getElementById("botonReiniciar").hidden = false;
    } else {
        //Ocultamos el boton de jugar
        document.getElementById("botonJugar").hidden = true;
        document.getElementById("botonReiniciar").hidden = true;
    }
}

function generarJugada() {

    const opcion = Math.floor(Math.random() * 2) + 1;

    switch (opcion) {
        case 1:
            return "uno";
        case 2:
            return "dos";
    }
}

//JUGAR PARTIDA
function Jugar() {

    if (jugadorHumanos == 0) {

        jugador1 = generarJugada();
        jugador2 = generarJugada();
        jugador3 = generarJugada();

        MostrarJugada(jugador1, jugador2, jugador3);


    } else if (jugadorHumanos == 1) {

        jugador1 = prompt("Jugador 1 => Elige tu jugada: uno o dos").toLowerCase();  

        while (jugador1 !== "uno" && jugada1 !== "dos") {
            alert("La jugada no es válida. Por favor, escribe 'uno' o 'dos'.");
            jugada1 = prompt("Jugador 1 => Elige tu jugada: uno o dos").toLowerCase();
        }

        jugador2 = generarJugada();
        jugador3 = generarJugada();   

        MostrarJugada(jugador1, jugador2, jugador3);

    } else if (jugadorHumanos == 2) {

        jugador1 = generarJugada();

        jugador2 = prompt("Jugador 2 => Elige tu jugada: uno o dos").toLowerCase();

        while (jugador2 !== "uno" && jugador2 !== "dos") {
            alert("La jugada no es válida. Por favor, escribe 'uno' o 'dos'.");
            jugador2 = prompt("Jugador 2 => Elige tu jugada: uno o dos").toLowerCase();
        }

        jugador3 = prompt("Jugador 3 => Elige tu jugada: uno o dos").toLowerCase();

        while (jugador3 !== "uno" && jugador3 !== "dos") {
            alert("La jugada no es válida. Por favor, escribe 'uno' o 'dos'.");
            jugador3 = prompt("Jugador 3 => Elige tu jugada: uno o dos").toLowerCase();
        }

        MostrarJugada(jugador1, jugador2, jugador3);


    } else if (jugadorHumanos == 3)
    {
        jugador1 = prompt("Jugador 1 => Elige tu jugada: uno o dos").toLowerCase();

        while (jugador1 !== "uno" && jugador1 !== "dos") {
            alert("La jugada no es válida. Por favor, escribe 'uno' o 'dos'.");
            jugador1 = prompt("Jugador 2 => Elige tu jugada: uno o dos").toLowerCase();
        }

        jugador2 = prompt("Jugador 2 => Elige tu jugada: uno o dos").toLowerCase();

        while (jugador2 !== "uno" && jugador2 !== "dos") {
            alert("La jugada no es válida. Por favor, escribe 'uno' o 'dos'.");
            jugador2 = prompt("Jugador 2 => Elige tu jugada: uno o dos").toLowerCase();
        }

        jugador3 = prompt("Jugador 3 => Elige tu jugada: uno o dos").toLowerCase();

        while (jugador3 !== "uno" && jugador3 !== "dos") {
            alert("La jugada no es válida. Por favor, escribe 'uno' o 'dos'.");
            jugador3 = prompt("Jugador 3 => Elige tu jugada: uno o dos").toLowerCase();
        }

        MostrarJugada(jugador1, jugador2, jugador3);

        determinarGanador(jugador1, jugador2, jugador3);

    }
}

//MOSTRAR JUGADAS
function MostrarJugada(jugador1, jugador2, jugador3) {

    const imgJugada1 = document.getElementById("jugador1img");

    imgJugada1.src = mostrarJugada1(jugador1);

    const imgJugada2 = document.getElementById("jugador2img");

    imgJugada2.src = mostrarJugada1(jugador2);

    const imgJugada3 = document.getElementById("jugador3img");

    imgJugada3.src = mostrarJugada1(jugador3);
}

function mostrarJugada1(jugada) {

    switch (jugada) {
        case "uno":
            return "./imagenes/uno.png";
        case "dos":
            return "./imagenes/dos.png";
        default:
            return "";
    }
}


//REINICIAR
function Reiniciar() {

    ganador = "";
    jugador1 = "";
    jugador2 = "";
    jugador3 = "";

    //Reiniciar los contadores
    document.getElementById("contadorJugador1").value = 0;
    document.getElementById("contadorJugador2").value = 0;
    document.getElementById("contadorJugador3").value = 0;

    // Actualizar la interfaz
    document.getElementById("resultado").hidden = true;
    document.getElementById("botonJugar").hidden = true;
    document.getElementById("botonReiniciar").hidden = true;
    document.getElementById("jugador1img").src = "./imagenes/cero.png";
    document.getElementById("jugador2img").src = "./imagenes/cero.png";
    document.getElementById("jugador3img").src = "./imagenes/cero.png";
}

function hacer() {

    setTimeout(function () {
        Reiniciar();
    }, 10000);
}

function ObtenerSeleccion() {
    // Obtener el valor de la selección del dropdown
    let seleccion = document.querySelector(".dropdown-menu .active").textContent;

    // Convertir la selección a un número
    jugadores = parseInt(seleccion);
}

function CompararJugadas(jugada1, jugada2) {
    if (jugada1 === jugada2) {
        return "Empate";
    } else if ((jugada1 === 1 && jugada2 === 3) ||
        (jugada1 === 2 && jugada2 === 1) ||
        (jugada1 === 3 && jugada2 === 2)) {
        return "Jugador 1 gana";
    } else {
        return "Jugador 2 gana";
    }
}

function ActualizarContadores(resultado) {
    if (resultado === "Jugador 1 gana") {
        jugador1++;
    } else if (resultado === "Jugador 2 gana") {
        jugador2++;
    } else {
        empates++;
    }
}

function MostrarResultados() {
    // Mostrar la jugada de la máquina
    document.querySelector(".resultado-jugador1").innerHTML = `
    <img src="images/piedra.jpg" class="resultado-img" alt="piedra">
    <img src="images/papel.png" class="resultado-img" alt="papel">
    <img src="images/tijera.png" class="resultado-img" alt="tijera">
  `;

    // Mostrar la jugada del jugador
    document.querySelector(".resultado-jugador2").innerHTML = `
    <img src="images/piedra.jpg" class="resultado-img" alt="piedra">
    <img src="images/papel.png" class="resultado-img" alt="papel">
    <img src="images/tijera.png" class="resultado-img" alt="tijera">
  `;

    // Mostrar el resultado
    document.querySelector(".resultado-empate").innerHTML = resultado;
}



const Jugar = () => {
    // Leer la selección del dropdown
    ObtenerSeleccion();

    // Generar las jugadas
    if (jugadores === 0) {
        jugada1 = GenerarJugada();
        jugada2 = GenerarJugada();
    } else if (jugadores === 1) {
        jugada1 = GenerarJugada();
        jugada2 = prompt("Elige tu jugada: 1 (piedra), 2 (papel) o 3 (tijera)");
    } else if (jugadores === 2) {
        jugada1 = prompt("Jugador 1, elige tu jugada: 1 (piedra), 2 (papel) o 3 (tijera)");
        jugada2 = prompt("Jugador 2, elige tu jugada: 1 (piedra), 2 (papel) o 3 (tijera)");
    }

    // Comparar las jugadas
    resultado = CompararJugadas(jugada1, jugada2);

    // Actualizar los contadores
    ActualizarContadores(resultado);

    // Mostrar los resultados
    MostrarResultados();
};

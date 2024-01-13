// Lista de tareas que se guardará en el localStorage
let listaTareas = [];

// Obtener tareas de manera asíncrona
const obtenerTareas = async () => {
    
    if (localStorage.getItem('listaTareas') === null) {
        
        try {

            const url = 'https://jsonplaceholder.typicode.com/todos';
            const respuesta = await fetch(url);
            const tareas = await respuesta.json();
            guardarTareas(tareas);

        } catch (error) {
            console.error('Error al obtener las tareas del API:', error);
           
        }
    } else {

        listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];

    }

    mostrarTareas(listaTareas);
};


// Almacenar tareas en el localStorage -----------------------------------------------
function guardarTareas(tareas) {

    listaTareas = tareas;
    localStorage.setItem('listaTareas', JSON.stringify(tareas));

}

// Eliminar una tarea por su ID ----------------------------------------------------
function eliminarTarea(id) {

    listaTareas = listaTareas.filter(tarea => tarea.id !== id);
    guardarTareas(listaTareas);
    limpiarLista();
    mostrarTareas(listaTareas);

}

// Limpiar la lista en el DOM ------------------------------------------------------
function limpiarLista() {

    const lista = document.getElementById('lista-tareas');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

}

// Mostrar las tareas en el DOM ----------------------------------------------------
function mostrarTareas(tareas) {
    const lista = document.getElementById('lista-tareas');

    const fragmento = document.createDocumentFragment(); 

    if (tareas && tareas.length) {

        for (let i = 0; i < tareas.length; i++) {

            let tarea = tareas[i];

            const contenedorTarea = document.createElement('div');
            contenedorTarea.classList.add('una-tarea');

            const userIdElemento = document.createElement('p');
            userIdElemento.textContent = `USER ID: ${tarea.userId}`;
            userIdElemento.classList.add('user-id');

            const tituloElemento = document.createElement('p');
            tituloElemento.textContent = `Título: ${tarea.title}`;
            tituloElemento.classList.add('titulo-nota');

            const idElemento = document.createElement('p');
            idElemento.textContent = `ID: ${tarea.id}`;
            idElemento.classList.add('id-nota');

            // Crear un botón
            const botonElemento = document.createElement('button');
            botonElemento.textContent = 'Eliminar';
            botonElemento.addEventListener('click', function () {
                eliminarTarea(tarea.id);
            });

            botonElemento.classList.add('boton-eliminar');

            contenedorTarea.appendChild(userIdElemento);
            contenedorTarea.appendChild(tituloElemento);
            contenedorTarea.appendChild(idElemento);
            contenedorTarea.appendChild(botonElemento);

            fragmento.appendChild(contenedorTarea);
        }

    } else {

        const parrafo = document.createElement('p');
        parrafo.textContent = 'No hay tareas que mostrar';
        parrafo.classList.add('lista-vacia');
        fragmento.appendChild(parrafo); 

    }

    lista.innerHTML = '';
    lista.appendChild(fragmento);
}

//Buscador de tareas ---------------------------------------------------------------
function buscarTarea() {

    //SI tengo un texto en el input de búsqueda, filtrar las tareas
    //Si no, mostrar todas las tareas
    const texto = document.getElementById('texto-buscar').value.trim().toLowerCase();

    if (texto) {

        const tareasFiltradas = listaTareas.filter(tarea => tarea.title.includes(texto));
        limpiarLista();
        mostrarTareas(tareasFiltradas);

    } else {

        limpiarLista();
        mostrarTareas(listaTareas);

    }

    

}

document.addEventListener('DOMContentLoaded', function () {
    const textoBuscarElemento = document.getElementById('texto-buscar');
    textoBuscarElemento.addEventListener('input', () => {
        console.log('Evento input disparado');
        buscarTarea();
    });

    // Resto de tu código aquí
    obtenerTareas();
});


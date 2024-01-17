// Lista de tareas que se guardará en el localStorage
let listaAlbumes = [];

const obtenerAlbumes = async () => {

    if (localStorage.getItem('listaAlbumes') === null) {

        try {

            const url = 'https://jsonplaceholder.typicode.com/albums';
            const respuesta = await fetch(url);
            const al = await respuesta.json();
            guardarAlbumes(al);

        } catch (error) {
            console.error('Error al obtener las tareas del API:', error);

        }
    } else {

        listaAlbumes = JSON.parse(localStorage.getItem('listaAlbumes')) || [];

    }

    mostrarAlbumes(listaAlbumes);
};


// Almacenar tareas en el localStorage -----------------------------------------------
function guardarAlbumes(al) {

    listaAlbumes = al;
    localStorage.setItem('listaAlbumes', JSON.stringify(al));

}

// Eliminar una tarea por su ID ----------------------------------------------------
function eliminarAlbum(id) {
    
    listaAlbumes = listaAlbumes.filter(album => album.id !== id);
    guardarAlbumes(listaAlbumes); 
    limpiarLista();
    mostrarAlbumes(listaAlbumes);
}


// Limpiar la lista en el DOM ------------------------------------------------------
function limpiarLista() {

    const album = document.getElementById('lista-albumes');

    while (album.firstChild) {
        album.removeChild(album.firstChild);
    }

}

// Mostrar las tareas en el DOM ----------------------------------------------------
function mostrarAlbumes(albumes) {
    
    const ul = document.getElementById('lista-albumes');

    const fragmento = document.createDocumentFragment();

    if (albumes && albumes.length) {

        for (let i = 0; i < albumes.length; i++) {

            let album = albumes[i];

            const contenedorAlbum = document.createElement('div');
            contenedorAlbum.classList.add('una-tarea');

            const userIdElemento = document.createElement('p');
            userIdElemento.textContent = `USER ID: ${album.userId}`;
            userIdElemento.classList.add('user-id');

            const tituloElemento = document.createElement('p');
            tituloElemento.textContent = `Título: ${album.title}`;
            tituloElemento.classList.add('titulo-nota');

            const idElemento = document.createElement('p');
            idElemento.textContent = `ID: ${album.id}`;
            idElemento.classList.add('id-nota');

            // Crear un botón
            const botonElemento = document.createElement('button');
            botonElemento.textContent = 'Eliminar';
            botonElemento.addEventListener('click', function () {
                eliminarAlbum(album.id);
            });

            botonElemento.classList.add('boton-eliminar');

            contenedorAlbum.appendChild(userIdElemento);
            contenedorAlbum.appendChild(tituloElemento);
            contenedorAlbum.appendChild(idElemento);
            contenedorAlbum.appendChild(botonElemento);

            if (album.userId === 0) {
                contenedorAlbum.style.backgroundColor = 'lightgray'; 
            }

            if (album.filtrado) {
                contenedorAlbum.style.backgroundColor = 'lightgreen'; // Puedes ajustar el color aquí
            }

            fragmento.appendChild(contenedorAlbum);
        }

    } else {

        const parrafo = document.createElement('p');
        parrafo.textContent = 'No hay tareas que mostrar';
        parrafo.classList.add('lista-vacia');
        fragmento.appendChild(parrafo);

    }

    ul.innerHTML = '';
    ul.appendChild(fragmento);
}

//Buscador de tareas ---------------------------------------------------------------
function filtrarAlbumes() {
    const texto = document.getElementById('texto-buscar').value.trim().toLowerCase();

    if (texto) {
        const albumFiltrado = listaAlbumes.filter(album => album.title.includes(texto));
        albumFiltrado.forEach(album => album.filtrado = true);

        limpiarLista();
        mostrarAlbumes(albumFiltrado);
    } else {
        listaAlbumes.forEach(album => delete album.filtrado);

        limpiarLista();
        mostrarAlbumes(listaAlbumes);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const textoBuscarElemento = document.getElementById('texto-buscar');
    textoBuscarElemento.addEventListener('input', () => {
        console.log('Evento input disparado');
        buscarAlbum();
    });

    obtenerAlbumes();
});



var listaAlbumes = JSON.parse(localStorage.getItem('listaAlbumes')) || [];

// Almacenar tareas en el localStorage -----------------------------------------------
function guardarAlbumes(albumes) {

    localStorage.setItem('listaAlbumes', JSON.stringify(albumes));

}

function addAlbum() {

    let inputElement = document.getElementsByName('text')[0];
    let input = inputElement.value;

    if (!input) {
        alert("Por favor, ingresa un título válido.");
        return;
    }

    const album = {
        userId: 0,
        id: listaAlbumes.length + 1,
        title: input
    };

    listaAlbumes.unshift(album);

    guardarLista(listaAlbumes);

    alert("Album añadida con éxito");

    inputElement.value = '';

}

function guardarLista(listaAlbumes) {
    localStorage.setItem('listaAlbumes', JSON.stringify(listaAlbumes));
}

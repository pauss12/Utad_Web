
var listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];

// Almacenar tareas en el localStorage -----------------------------------------------
function guardarTareas(tareas) {

    localStorage.setItem('listaTareas', JSON.stringify(tareas));

}

function addTarea() {

    let inputValue = document.getElementsByName('text')[0].value;

    if (!inputValue) {
        alert("Por favor, ingresa un título válido.");
        return ;
    }

    const tarea = {
        userId: 1,
        id: listaTareas.length + 1,
        title: inputValue
    };

    listaTareas.push(tarea);

    guardarListaTareas(listaTareas);

    alert("Tarea añadida con éxito");

    inputValue = '';
}

function guardarListaTareas(listaTareas) {
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
}

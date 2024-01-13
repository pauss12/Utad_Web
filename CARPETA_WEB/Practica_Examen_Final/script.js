import { addTarea } from "./javascript.js";
import { obtenerTareas } from "./javascript_tareas.js";
(async function() {

    // Utiliza el mismo nombre de clave para localStorage en ambas páginas
    const listaTareas = () => JSON.parse(localStorage.getItem(localStorageKey)) || [];

    const localStorageKey = 'listaTareas';

    const form = document.querySelector(".form-todo")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        addTarea()
    })

    await obtenerTareas()
})()
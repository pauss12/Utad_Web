
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import Other from "./Other";

import '../styles/NoteList.css';

function ListaNotas() {

    //Crear una lista de tareas
    const [tasks, setTasks] = useState([]);

    //Crear 
    const addNote = (note) => {

        console.log(note);
        
        //Añadir la nota a la lista
        const updatedTasks = [note, ...tasks];

        //Actualizar el estado de la lista de notas
        setTasks(updatedTasks);

    };

    //Completar una nota
    const completarNota = (id) => {

        let updatedTasks = tasks.map((task) => {

            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }

            return task;
        });

        setTasks(updatedTasks);
    };
  
    //Eliminar una nota
    const eliminarNota = (id) => {

        const updatedTasks = tasks.filter((task) => task.id !== id);

        setTasks(updatedTasks);
    };

    //RETURN -------
    return (

        <>
            <TextEditor addNota={addNote} />

            <div className="lista-notas">
                {tasks.map((task) => (

                    <Other

                        id={task.id}
                        titulo={task.titulo}
                        contenido={task.contenido}
                        completed={task.completed}
                        completarNota={completarNota}
                        eliminarNota={eliminarNota}

                    />

                ))}
            </div>
        </>
    );

}

export default ListaNotas;
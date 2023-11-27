
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import Buscador from "./Buscador";

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
  
    //Eliminar una nota
    const eliminarNota = (id) => {

        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };


    //RETURN -------
    return (

        <>
            <Buscador tasks={tasks} setTasks={setTasks} />
            Inserta una nota:

            <TextEditor addNota={addNote} />

            <div className="lista-notas">

                {tasks.map((task) => (
                    
                    <div className="una-nota">

                        <Other

                            id={task.id}
                            titulo={task.titulo}
                            contenido={task.contenido}
                            eliminarNota={eliminarNota}

                        />

                    </div>

                ))}
            </div>
        </>
    );

}

export default ListaNotas;
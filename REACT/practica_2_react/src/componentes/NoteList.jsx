
import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor";
import Buscador from "./Buscador";

import Note from "./Note";

import '../styles/NoteList.css';

function ListaNotas() {

    const [tasks, setTasks] = useState([]);

    //Hacer la funcion useEffect para que se ejecute una sola vez
    useEffect(() => {

        const data = localStorage.getItem('tasks');

        if (data) {
            setTasks(JSON.parse(data));
        }

    }, []);

    //Crear 
    const addNote = (note) => {

        const updatedTasks = [note, ...tasks];
        setTasks(updatedTasks);

        //Guardo las notas en el localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    };
  
    //Eliminar una nota
    const eliminarNota = (id) => {

        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);

        //Guardo las notas en el localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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

                        <Note

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
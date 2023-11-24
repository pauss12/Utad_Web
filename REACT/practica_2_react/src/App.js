
import Title from './componentes/Title'
import Logo from './componentes/logo'
import TextEditor from './componentes/TextEditor'
import React, { useState } from 'react';

import './App.css';

function App() {

  //Crear una lista de tareas
  const [tasks, setTasks] = useState([]);

  //Crear 
    const addNote = (note) =>
    {
        const updatedTasks = [note, ...tasks];

        //Actualizar el estado de la lista de notas
        setTasks(updatedTasks);

    };

    //Eliminar una nota
    const eliminarNota = (id) =>
    {
        const updatedTasks = tasks.filter((task) => task.id !== id);

        setTasks(updatedTasks);
    };

    //Completar una nota
    const completarNota = (id) =>
    {
        let updatedTasks = tasks.map((task) =>
        {
            if (task.id === id){
                task.isComplete = !task.isComplete;
            }

            return task;
        });
        setTasks(updatedTasks);
    };

  return (
    
    <div className="App">
        
        <Logo />
        <Title />
        Insertar nota:
        <TextEditor addNota={addNote} />
        
            <div className="notes">
              {tasks.map((task) => (
                  <div className="note" key={task.id}>
                        <h2>{task.titulo}</h2>
                        <p>{task.contenido}</p>
                      
                  </div>
              ))}

            </div>
        
    </div>
  );
}

export default App;

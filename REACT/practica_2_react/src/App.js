
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
        //Añadir la nota a la lista de tareas
        setTasks({ note, ...tasks });   
    };
  
  //Delete



  return (
    
    <div className="App">
        
        <Logo />
        <Title />
        Insertar nota:
        <TextEditor addNota={addNote} />

        <div className="notes">
          
        </div>
    
    </div>
  );
}

export default App;

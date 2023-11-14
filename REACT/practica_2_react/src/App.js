import logo from './logo.svg';
import Title from './componentes/Title'
import TextEditor from './componentes/TextEditor'
import React, { useState } from 'react';
import './App.css';

function App() {

  //Crear una lista de tareas
  const [tasks, setTasks] = useState([]);

  //Crear 
  const addNote = (note) => {
        //Añadir la nota a la lista de tareas
        setTasks({ note, ...tasks });     
  };

  return (
    <div className="App">
        <Title />
          < TextEditor addNota={addNote}/>
    </div>
  );
}

export default App;

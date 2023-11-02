import Logo from './Componentes/logo';
import ListToDo from './Componentes/ToDoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="todo-list">
        <h1>Mis Tareas</h1>
        <ListToDo />
      </div>
    </div>
  );
}

export default App;
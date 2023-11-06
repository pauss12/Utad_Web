import logo from './logo.svg';
import Title from './componentes/Title'
import './App.css';

function App() {

  //Crear una lista de tareas
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
        <Title/>
    </div>
  );
}

export default App;

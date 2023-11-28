
import React, { useState } from 'react';

function Buscador(props) {

    const tasks = props.tasks;
    const setTasks = props.setTasks;

    const [originalTasks, setOriginalTasks] = useState([]);

    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setTasks(originalTasks);
        } else {
            // Save current list of tasks
            setOriginalTasks(tasks);

            const filteredTasks = tasks.filter((task) => {
                return (
                    task.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    task.contenido.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });

            setTasks(filteredTasks);
        }
    };

    return (
        <div className="input-group mb-3">
            
            <span className="input-group-text">Buscador</span>
            <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="nota"
                value={props.searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    );
}

export default Buscador;

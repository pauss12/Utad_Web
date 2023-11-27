
import '../styles/Buscador.css';

import React, { useState } from 'react';

/*
const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setTasks(tasks); // Reset tasks to original list
        } else {
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
*/
function Buscador(props) {

    // Receive tasks and setTasks props from parent component
    const tasks = props.tasks;
    const setTasks = props.setTasks;

    // Local state to store original list of tasks
    const [originalTasks, setOriginalTasks] = useState([]);

    // Implement search functionality
    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            // Reset tasks to original list
            setTasks(originalTasks);
        } else {
            // Save current list of tasks
            setOriginalTasks(tasks);

            // Filter tasks based on search term
            const filteredTasks = tasks.filter((task) => {
                return (
                    task.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    task.contenido.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });

            // Update tasks state with filtered results
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


import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Buscador({lista, setLista}) {

    const [originalTasks, setOriginalTasks] = useState([]);

    const handleSearch = (searchTerm) => {
        
        if (searchTerm === '') {
            
            setLista(originalTasks);

        } else {

            setOriginalTasks(lista);
        
            const filteredTasks = originalTasks.filter((task) => {
                return (
                    task.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    task.contenido.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });

            setLista(filteredTasks);
        }
    };

    return (

        <div className="input-group mb-3">

            <span className="fa-solid fa-magnifying-glass" style={{ marginRight: '7px' }}></span>
            <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                style={{border: 'none'}}
                placeholder="Buscador"
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    );
}

export default Buscador;
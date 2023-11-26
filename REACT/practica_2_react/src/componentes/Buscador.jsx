//Importar el CSS del buscador
import '../styles/Buscador.css';

import React, { useState } from 'react';

function Buscador(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const { tasks } = props;

    // Function to handle input change and filter notes
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        if (searchTerm === '') {
            // No search term, display all notes
            props.setFilteredNotes(tasks);
        } else {
            const filteredNotes = tasks.filter((task) => {
                return (
                    task.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    task.contenido.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });

            // Update filtered notes state
            props.setFilteredNotes(filteredNotes);
        }
    };


    return (
        <div className="input-group mb-3" >
            <span className="input-group-text height-min" >Buscar</span>
            <div className="form-floating">
                <input type="text"
                    className="height-min form-control"
                    placeholder="Buscar:"
                    onChange={handleChange}
                    value={searchTerm}
                />
            </div>
        </div>
    );
}

export default Buscador;

"use client"

import React, { useState } from 'react';

function Buscador(props) {

    const { data, setData, searchTerm } = props;
    const [originalTasks, setOriginalTasks] = useState([]);

    useEffect(() => {
        // Guardar los datos originales cuando el componente se monta
        setOriginalTasks(data);

    }, [data]);

    const handleSearch = (searchTerm) => {
        
        if (searchTerm === '') {
            setData(originalTasks);

        } else {
        
            const filteredTasks = originalTasks.filter((item) => {
                return (
                    item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.contenido.toLowerCase().includes(searchTerm.toLowerCase())
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
                placeholder="Buscador"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    );
}

export default Buscador;
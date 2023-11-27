
import '../styles/Buscador.css';

import React, { useState } from 'react';

function Buscador(props) {

    return (
            <div className="input-group mb-3">
                <span className="input-group-text">Buscador</span>
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputGroup1"
                    placeholder="nota"
                    value={props.searchTerm}
                    onChange={(e) => props.handleSearch(e.target.value)}

            
            />
            

            </div>
    );
}

export default Buscador;

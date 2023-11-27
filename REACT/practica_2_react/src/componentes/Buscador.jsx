
import '../styles/Buscador.css';

import React, { useState } from 'react';

/*
<div className="input-group mb-3">
              <span className="input-group-text">Buscador</span>
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="nota"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
*/ 

function Buscador(props) {



    return (
            <div className="input-group mb-3">
                <span className="input-group-text">Buscador</span>
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputGroup1"
                    placeholder="nota"
                />
            </div>
    );
}

export default Buscador;

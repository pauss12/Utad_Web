import React, { memo } from 'react';

const checkbox = memo(({ DatosUsuario, setDatosUsuario }) => {
    const handleCheckboxChange = (e) => {
        setDatosUsuario({ ...DatosUsuario, permiteOfertas: e.target.checked });
    };

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-5 w-5"
                checked={DatosUsuario.permiteOfertas}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="quieroOfertas" className="ml-2 text-sm leading-5">
                Quiero recibir ofertas
            </label>
        </div>
    );
});

export default checkbox;

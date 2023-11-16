
import React, { useState } from 'react';

function TextEditor(props) {

    //Crearme una variable de estado para guardar el titulo
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    

    //Funcion que se ejecuta cuando el usuario cambia el input
    const handleSubmit = () => {

        //Si hay tanto titulo como nota, las fusiono en un objeto
        if (titulo && contenido) {

            const nota = {
                titulo,
                contenido
            };

            //Llamo a la funcion que me ha pasado el padre
            props.addNota(nota);
        }

        //Reseteo el titulo y la nota
        setTitulo('');
        setContenido('');
    };
    
    //RETURN -------
    return (

        <>
            <div className="input-group">

                <input type="text"
                       placeholder="Titulo:"
                       value = {titulo}
                       onChange={(e) => setTitulo(e.target.value)}
                /> Introduce el nombre y el titulo
                
    
            </div>

            <textarea placeholder="Nota:"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}

            ></textarea>

            <button type="button" onClick={handleSubmit}>
                Añadir nota
            </button>

        </>
    );

}

export default TextEditor;
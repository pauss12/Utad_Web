
import React, { useState } from 'react';

function TextEditor(props) {

    //Crearme una variable de estado para guardar el titulo
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    

    //Funcion que se ejecuta cuando el usuario cambia el input
    const handleChange = () => {

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
        setTitulo("");
        setContenido("");
    };
    
    //RETURN -------
    return (

        <>
            <div className="input-group">

                <input type="text"
                    name="message"
                    placeholder="Hello!"
                /> Introduce el nombre y el titulo
                
                <input type="text" name="message" placeholder="Hello!" />
    
            </div>

            <button type="button" onClick={handleChange()}>
                Añadir nota
            </button>

        </>
    );

}

export default TextEditor;
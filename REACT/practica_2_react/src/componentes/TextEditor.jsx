
import React, { useState } from 'react';
import '../styles/TextEditor.css';
import { v4 as uuidv4 } from 'uuid';

function TextEditor(props) {

    //Crearme una variable de estado para guardar el titulo
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    

    //Funcion que se ejecuta cuando el usuario cambia el input
    const handleSubmit = () => {

        //Si hay tanto titulo como nota, las fusiono en un objeto
        if (titulo && contenido) {

            const nota = {
                id: uuidv4(),
                titulo: titulo,
                contenido: contenido,
                completed: false
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
        <form>
            
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text input-group-text-lg" >Titulo</span>
                <div className="form-floating ">
                    <input type="text" 
                        className="height-min form-control "
                        placeholder="Titulo:"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    
                </div>
            </div>

            <textarea placeholder="Nota:"
                className="text-area-contenedor"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}

            ></textarea>

            <button className='boton-add'
                type="button"
                onClick={handleSubmit}>
                Añadir nota
            </button>

        </form>
    );

}

export default TextEditor;
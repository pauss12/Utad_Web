import Image from 'next/image'

export default function Page() {
    return (
      
    <> 
        <div className="contenedor-formulario"
                
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid white',
                width: '40%',
                height: '70%',
                margin: '0 auto',
            }}>
                
            <div className="form-check form-check-inline">
                    
                <input className="form-check-input" type="radio"  value="option1" /> Administrador
                <input className="form-check-input" type="radio"  value="option2" /> Comercio
                <input className="form-check-input" type="radio" value="option3" /> Usuario REGISTRADO
                <input className="form-check-input" type="radio" value="option4" /> Usuario NO REGISTRADO
                    
            </div>

        </div>
    </>
  )
}
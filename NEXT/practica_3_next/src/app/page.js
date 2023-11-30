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
                    
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> Administrador
                
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> Comercio
                
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> Usuario Registrado
                    
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> Usuario Anonimo
                       
            </div>

        </div>
    </>
  )
}
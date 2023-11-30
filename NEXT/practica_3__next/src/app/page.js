
import Form from './componentes/Form';

export default function HomePage() {

    //Menu principal con formulario para elegir el tipo de "usuario
    return (

        <Form />
    );
}

/*

<div className="form-check">
    <input type="radio"
           className="form-check-input"
            id="userTypeUser"
            name="userType"
            value="user"
            checked={userType === 'user'}
            onChange={(e) => setUserType(e.target.value)}
    />

    <label className="form-check-label" htmlFor="userTypeUser" /> Usuario
</div>

*/
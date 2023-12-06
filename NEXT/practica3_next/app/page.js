import Link from "next/link";

function Page() {

  return (

    <>

      <h1 className="text-danger">WEB PRACTICA</h1>
      
      <Link href="./registro_usuario" className="btn btn-primary">Registro</Link>

      <Link href="./iniciar_sesion" className="btn btn-primary">Iniciar sesion</Link>
    </>

  );
}

export default Page;
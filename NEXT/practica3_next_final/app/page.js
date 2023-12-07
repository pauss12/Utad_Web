import Link from 'next/link'

export default function Home() {

  return (

    <>

      <h1 className="text-danger">WEB PRACTICA</h1>

      <Link href="./registro" className="btn btn-primary">Registro</Link>

      <Link href="./iniciar_sesion" className="btn btn-primary">Iniciar sesion</Link>
    </>

  );
}

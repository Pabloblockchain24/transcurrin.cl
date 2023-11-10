import "./Clientes.css";

function Clientes() {
  return (
    <main className="flex flex-col justify-center items-center	">
    <h1 className='title m-10'>CLIENTES</h1>
    <h2 className="w-1/2 font-bold text-center m-4"> NUESTRO OBJETIVO PRINCIPAL ES OFRECER SOLUCIONES LOGISTICAS A NUESTROS CLIENTES, GARANTIZANDO QUE LAS OPERACIONES ENTRE EL PUERTO Y SUS DEPOSITOS ESTARAN PLENAMENTE CUBIERTAS Y SEGURAS</h2>

      <section class="clientes">
      <article className="clientCard">
                <h2 className='clientName'>CARPAVISION</h2>
                <p className='clientText'> " Llegamos a Transcurrin por recomendacion de un proveedor, nunca hemos tenido ningún problema, nos despreocupamos de los asuntos del puerto "</p>
                <p className='mx-4'> Fabian Sandoval </p>
                <p className='mx-4'> Jefe de operaciones</p>
            </article>

            <article className="clientCard">
                <h2 className='clientName'>CONSTRUMART S.A.</h2>
                <p className='clientText'> "Llevamos operando mas de 30 años con Transcurrin, conocen nuestra operacion al reves y al derecho, son un gran aliado logistico."</p>
                <p className='mx-4'> Yerko Caceres</p>
                <p className='mx-4'> Planner de importaciones</p>
            </article>

            <article className="clientCard">
                <h2 className='clientName'>JDELRIO SPA.</h2>
                <p className='clientText'> "Destaco su compromiso, nunca me han dejado una llamada o un correo sin contestar, el seguimiento a través de la pagina web es un plus"</p>
                <p className='mx-4'> Jorge Del Rio</p>
                <p className='mx-4'> Emprendedor y propietario</p>
            </article>

      </section>
    </main>
  );
}

export default Clientes;

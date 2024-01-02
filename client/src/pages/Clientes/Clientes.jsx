import "./Clientes.css";

function Clientes() {
  return (
    <main className="mainClientes">
      <h1 className='clientTitle'>CLIENTES</h1>
      <h2 className="clientSubTitle"> NUESTRO OBJETIVO PRINCIPAL ES OFRECER SOLUCIONES LOGISTICAS A NUESTROS CLIENTES, GARANTIZANDO QUE LAS OPERACIONES ENTRE EL PUERTO Y SUS DEPOSITOS ESTARAN PLENAMENTE CUBIERTAS Y SEGURAS</h2>

      <section class="clientes">
        <article className="clientCard">
          <h2 className='clientName'>CARPAVISION</h2>
          <p className='clientText'> " Llegamos a Transcurrin por recomendacion de un proveedor, nunca hemos tenido ningún problema, nos despreocupamos de los asuntos del puerto "</p>
          <p className='clientContact'> Fabian Sandoval </p>
          <p className='clientContact2'> Jefe de operaciones</p>
        </article>

        <article className="clientCard">
          <h2 className='clientName'>CONSTRUMART S.A.</h2>
          <p className='clientText'> "Llevamos operando mas de 30 años con Transcurrin, conocen nuestra operacion al reves y al derecho, son un gran aliado logistico."</p>
          <p className='clientContact'> Yerko Caceres</p>
          <p className='clientContact2'> Planner de importaciones</p>
        </article>

        <article className="clientCard">
          <h2 className='clientName'>JDELRIO SPA.</h2>
          <p className='clientText'> "Destaco su compromiso, nunca me han dejado una llamada o un correo sin contestar, el seguimiento a través de la pagina web es un plus"</p>
          <p className='clientContact'> Jorge Del Rio</p>
          <p className='clientContact2'> Emprendedor y propietario</p>
        </article>

      </section>
    </main>
  );
}

export default Clientes;

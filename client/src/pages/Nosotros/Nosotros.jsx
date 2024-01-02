import React from "react";
import "./Nosotros.css";

import entregas from "../../assets/serviciosEntregas.jpeg"
import trabajador from "../../assets/nosotrosTrabajador.jpg"
import ubicacion from "../../assets/nosotrosUbicacion.jpg"

function Nosotros() {
  return (
    <main className="mainNosotros">
    <h1 className='titleNosotros'>NOSOTROS</h1>

      <section class="nosotros">
        <article className="nosotrosArticle">
          <div className="nosotrosItem">
            <h2 class="nosotrosTitle"> QUIENES SOMOS</h2>
            <p className="nosotrosParagraph">
              Transportes Currin es una empresa de logistica y transporte de
              carga por carretera especializada en importaciones y exportaciones
              gracias a su ubicacion estrategica. La empresa nace en 1994 y
              mantiene una base regular de operadores tanto de tractocamiones,
              como operadores de grua, que garantizan la maxima confiabilidad en
              el cuidado y manipulación de las cargas de sus clientes.
            </p>
          </div>
            {
              <img
                src={entregas}
                alt="logo tienda"
                className="nosotrosImg"
              />
            }
        </article>
        <article className="nosotrosArticle">
          <div className="nosotrosItem">
            <h2 class="nosotrosTitle"> DONDE ESTAMOS</h2>
            <p className="nosotrosParagraph">
              Nuestro deposito y centro de operaciones se encuentra ubicado en
              el sector de aguas buenas, San Antonio, en una privilegiada
              ubicación a solo 10 minutos del acceso a los principales puertos
              de la región STI y DPWorld, además nos encontramos cercanos a los
              principales terminales extraportuarios y depositos de devolución
              de contenedores vacios, lo cual, nos permite optimizar en tiempo y
              forma las operaciones requeridas por nuestros clientes.
            </p>
          </div>
              <img
                src={trabajador}
                alt="logo tienda"
                className="nosotrosImg"
              />
        </article>
        <article className="nosotrosArticle">
          <div className="nosotrosItem">
            <h2 class="nosotrosTitle"> NUESTRO EQUIPO </h2>
            <p className="nosotrosParagraph">
              Nuestro equipo de trabajo se caracteriza por la experiencia,
              contamos con operadores de tractocamiones de en promedio 30 años
              de experiencia en el rubro que conocen ampliamente las principales
              rutas del pais, asi como operadores de grua expertos en
              operaciones de manipulación de contenedores con gruas
              portacontenedores y desconsolidado con grua de horquillas. Los
              años de experiencia y trabajo en equipo nos llevan a manejar las
              situaciones del dia a dia de la mejor forma posible.
            </p>
          </div>
              <img
                src={ubicacion}
                alt="logo tienda"
                className="nosotrosImg"              
                />
        </article>
      </section>
    </main>
  );
}

export default Nosotros;

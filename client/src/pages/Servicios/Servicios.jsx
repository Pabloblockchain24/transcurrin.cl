import React from 'react'
import "./Servicios.css"
import { NavLink } from 'react-router-dom'

import retiros from "../../assets/serviciosRetiros.jpg"
import entregas from "../../assets/serviciosEntregas.jpeg"
import vacios from "../../assets/serviciosVacios.jpg"
import respaldo from "../../assets/serviciosRespaldo.jpg"
import almacenamiento from "../../assets/serviciosAlmacenamiento.jpg"
import desconsolidado from "../../assets/serviciosDesconsolidado.jpeg"


function Servicios() {
  return (
    <main className='mainServicios'>

    <h1 className='titleServices'>SERVICIOS</h1>
    <section className='serviciosGrid'>
        <article className="serviciosCard">
        <img
             src={retiros}
            alt="Entrega de carga"
            className="imgFormat"
        />
        <h2 className='titleCard'>RETIROS Y ENTREGA EN PUERTO</h2>
        <p className='parrafoCard'> Servicio de retiro en puerto que incluye presentación en puerto,
            previa coordinación con agencias de aduana, retiro en puerto y
            traslado a deposito o a cliente</p>
        <NavLink to={"/categoria/CONTACTO"} className="customButton"> COTIZAR </NavLink>
        </article>


        <article className="serviciosCard">
        <img
            src={almacenamiento}
            alt="Almacenaje contenedores y carga"
            className="imgFormat"
        />        
        <h2 className='titleCard'>ALMACENAJE CTR Y CARGA</h2>
        <p className='parrafoCard'> Servicio de almacenamiento de carga, en contenedor o desconsolidada, en patio
            o en bodega dependiendo de la naturaleza de la carga y los requerimientos del
            cliente</p>
        <NavLink to={"/categoria/CONTACTO"} className="customButton"> COTIZAR </NavLink>
        </article> 


        <article className="serviciosCard">
        <img
            src={desconsolidado}
            alt="Desconsolidado y consolidado de carga"
            className="imgFormat"
        />    
        <h2 className='titleCard'> CONSOLIDADO y DESCONSOLIDADO</h2>
        <p className='parrafoCard'> Servicio de desconsolidado de carga y su posterior carguio a rampla de camion,
            o traslado a zona de bodegas para ser almacenada hasta que cliente requiera el traslado a
            destino final.</p>
        <NavLink to={"/categoria/CONTACTO"} className="customButton"> COTIZAR </NavLink>
        </article>

        <article className="serviciosCard">
        <img
            src={entregas}
            alt="Entregas en cliente"
            className="imgFormat"
        />    
        <h2 className='titleCard' >ENTREGA EN CLIENTE</h2>
        <p className='parrafoCard'> Entregas en centros de distribucion o tiendas finales de clientes, según
            indicacion de cliente, hora 
            de presentación indicada y tiempo de descarga estimada. </p>
        <NavLink to={"/categoria/CONTACTO"} className="customButton"> COTIZAR </NavLink>
        </article>

        <article className="serviciosCard">
        <img
            src={vacios}
            alt="Devolucion de vacios"
            className="imgFormat"
        />    
        <h2 className='titleCard'>DEVOLUCION DE VACIOS</h2>
        <p className='parrafoCard'> Servicio de devolución de ctres vacios, ya sea retirandolos desde deposito
            del transporte dado que carga fue desconsolidada o posterior a la entrega en destino 
            final, para cargas full</p>
        <NavLink to={"/categoria/CONTACTO"} className="customButton"> COTIZAR </NavLink>
        </article>

        <article className="serviciosCard">
        <img
            src={respaldo}
            alt="Tracking y documentacion"
            className="imgFormat"
        />    
        <h2 className='titleCard'>TRACKING Y DOCUMENTACION</h2>
        <p className='parrafoCard'>Cada servicio  cuenta con respaldos que acredita el estado en el
            que se recibio la carga, estado en el que se entrego, guias de despacho timbradas, y 
            cualquier otro que sea requerido. </p>
        <NavLink to={"/categoria/CONTACTO"} className="customButton"> COTIZAR </NavLink>
        </article>
    </section>
    </main>
  )
}

export default Servicios
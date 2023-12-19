import React from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

import "./Contacto.css";

function Contacto() {


  const { handleSubmit, register } = useForm()
  const { sendMail } = useAuth();

  const onSubmit = handleSubmit(data => {
    sendMail(data)
  })

  return (
    <main className="Contacto">

      <div className="ContactoCard">
      <section className="ContactHeader">
        <h1 className="ContactHeaderTitle"> FORMULARIO CONTACTO </h1>
        <h2 className="ContactHeaderTitle2" > Escribenos y te contactaremos a la brevedad </h2>
      </section>

      <form onSubmit={onSubmit} className="ContactForm">

        <article className="ContactArticle">
          <label htmlFor="NOMBRE" className="ContactLabel" > NOMBRE: </label>
          <input type="text"
            {...register("nombre", { required: true })}
            className="ContactInput"
            placeholder="NOMBRE"
          />
        </article>

        <article className="ContactArticle">
          <label htmlFor="APELLIDO" className="ContactLabel" > APELLIDO:</label>
          <input type="text"
            {...register("apellido", { required: true })}
            className="ContactInput"
            placeholder="APELLIDO"
          />
        </article>

        <article className="ContactArticle">
          <label htmlFor="PHONE" className="ContactLabel" > TELEFONO:</label>
          <input type="tel"
            {...register("telefono", { required: true })}
            className="ContactInput"
            placeholder="+569 1234 5678"
          />
        </article>

        <article className="ContactArticle">
          <label htmlFor="EMAIL" className="ContactLabel" > EMAIL:</label>
          <input type="email"
            {...register("correo", { required: true })}
            className="ContactInput"
            placeholder="tucorreo@empresa.cl"
          />
        </article>

        <article className="ContactArticle">
          <label htmlFor="EMPRESA" className="ContactLabel" > EMPRESA:</label>
          <input type="text"
            {...register("empresa", { required: true })}
            className="ContactInput"
            placeholder="EMPRESA"
          />
        </article>

        <article className="ContactArticle">
          <label htmlFor="servicio">SERVICIO REQUERIDO:</label>
          <select 
          {...register("servicio", {required:true}) }
          className="ContactSelect" 
          aria-label="Selecciona un servicio"
          >
            <option disabled selected value="">Ingrese servicio a cotizar</option>
            <option value="retiroPuerto">RETIRO DE PUERTO</option>
            <option value="almacenamiento">ALMACENAMIENTO</option>
            <option value="desconsolidado">DESCONSOLIDADO</option>
            <option value="entregaCliente">ENTREGA EN CLIENTE</option>
            <option value="devolucionVacio">DEVOLUCION VACIOS</option>
            <option value="respaldoOperacion">RESPALDO OPERACIONES</option>
            <option value="respaldoOperacion">SERVICIO INTEGRAL</option>
          </select>
        </article>


        <article className="ContactArticleMessage">
          <label htmlFor="mensaje">CUENTANOS QUE BUSCAS: </label>

          <textarea 
          {...register("mensaje",{required:true})}
          className="ContactMessage" 
          rows="4"
          placeholder="Cuéntanos más sobre lo que buscas..."
          ></textarea>
        </article>

        <button type="submit" className="ContactButton"> ENVIAR </button>
      </form>
      </div>

    </main>
  );
}




export default Contacto;

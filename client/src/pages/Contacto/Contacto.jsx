import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="contactoPage ">
      <main className="bg-zinc-100 flex flex-col items-center justify-center max-w-xl w-full p-5 m-10 shadow-md rounded-md">

        {/* <h1 className="customTitleContact">FORMULARIO CONTACTO</h1> */}
        <h1 className="text-3xl	 font-bold mb-10 mt-5 text-black"> FORMULARIO CONTACTO </h1>
        <h3 className="text-xl mb-10  text-black" > Escribenos y te contactaremos a la brevedad </h3>


        <form className="flex flex-col items-center justify-center w-full gap-3">
          <div className="flex flex-row items-center w-full">
            <label htmlFor="first_name" className="w-1/4 " > NOMBRE: </label>
            <input type="text" className="w-full  bg-zinc-300 text-black px-4 py-2 rounded-md my-2" placeholder="NOMBRE" required />
          </div>

          <div className="flex flex-row items-center w-full">
            <label htmlFor="last_name" className="w-1/4 " > APELLIDO:</label>
            <input type="text" className="w-full  bg-zinc-300 text-black px-4 py-2 rounded-md my-2" placeholder="APELLIDO" required />
          </div>

          <div className="flex flex-row items-center w-full">
            <label htmlFor="Phone" className="w-1/4 " > TELEFONO:</label>
            <input type="tel" className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2" placeholder="TELEFONO" required />
          </div>

          <div className="flex flex-row items-center w-full">
            <label htmlFor="Email" className="w-1/4 " > EMAIL:</label>
            <input type="email" className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2" placeholder="CORREO" required />
          </div>

          <div className="flex flex-row items-center w-full">
            <label htmlFor="Empresa" className="w-1/4 " > EMPRESA:</label>
            <input type="text" className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2" placeholder="EMPRESA" required />
          </div>


          <div class="flex flex-row items-center justify-center w-full m-4">
            <label for="" class="w-1/2">INGRESE SERVICIO REQUERIDO:</label>
            <select className="bg-zinc-300 p-2 rounded-md w-1/2" aria-label="Default select example">
              <option selected>Ingrese servicio a cotizar</option>
              <option value="retiroPuerto">RETIRO DE PUERTO</option>
              <option value="almacenamiento">ALMACENAMIENTO</option>
              <option value="desconsolidado">DESCONSOLIDADO</option>
              <option value="entregaCliente">ENTREGA EN CLIENTE</option>
              <option value="devolucionVacio">DEVOLUCION VACIOS</option>
              <option value="respaldoOperacion">RESPALDO OPERACIONES</option>
              <option value="respaldoOperacion">SERVICIO INTEGRAL</option>
            </select>
          </div>

          <div class="flex flex-row items-start justify-center w-full m-2">
            <label for="" class="w-1/2">CUENTANOS QUE BUSCAS: </label>
            <textarea className="bg-zinc-300 p-2 rounded-md w-3/4" rows="3"> </textarea>
          </div>


  

            <button type="submit"
              className="px-4 py-2 my-8 bg-zinc-400 text-zinc-800 font-bold rounded hover:bg-zinc-400 hover:text-white transition duration-300 ease-in-out"
            > ENVIAR </button>

        </form>
      </main>
    </div>
  );
}

export default Contacto;

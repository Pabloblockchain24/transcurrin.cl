import React from 'react'
import "./programacionTable.css"
import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";

function ProgramacionTable() {


    const { getServices, services } = useIntranet()


    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const programacion = services.filter(servicio => {
        return servicio.entrega === null && servicio.progEntrega !== null
      });


    if (programacion.length === 0) return (<div className='customVacio'><h1> NO HAY PROGRAMACION DISPONIBLE</h1></div>)

  return (
    
    <div className='customTable'>
    <table className='table table-striped table-bordered table-hover'>
        <thead>
            <tr>
                    <th >UNIDAD</th>
                    <th > PRODUCTO</th>
                    <th > ALM. DESTINO</th>
                    <th > NAVE</th>
                    <th > DEPOT DEV</th>
            </tr>
        </thead>

        <tbody>
                {programacion.map((service, index) => (
                        <tr key={index}>
                        <td>{service.container}</td>
                        <td>{service.tipo}</td>
                        <td>{service.almDestino}</td>
                        <td>{service.nave}</td>
                        <td>{service.depotDevolucion}</td>
                    </tr>
                ))}
        </tbody>
    </table>
</div>


  

  )
}

export default ProgramacionTable
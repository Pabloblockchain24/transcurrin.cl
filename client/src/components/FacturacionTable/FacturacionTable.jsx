import React from 'react'
import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";


function FacturacionTable() {
    const { getServices, services } = useIntranet()

    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])


    const diasEnPuerto = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaEta
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))
    }

    const diasEnDepot = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaEta
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))

    }

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };



      const serviciosFacturacion = services.filter(servicio => {
        return servicio.retiroPuerto !== null && diasEnPuerto(servicio.eta) > 0 && servicio.entrega !== null
      });

  return (
    <>
    <div className='customTableProgramacion'>
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th className='w-1/10'>CARPETA</th>
                    <th className='w-1/6'>UNIDAD</th>
                    <th className='w-1/10'> NAVE</th>
                    <th className='w-1/10' > OPERACION</th>
                    <th className='w-1/10' > LUGAR DEV.</th>
                    <th className='w-1/10'> RETIRO PUERTO</th>
                    <th className='w-1/10'> ENTREGA CMT</th>
                    <th className='w-1/10'> FECHA VACIO</th>
                    <th className='w-1/10'> TARIFA</th>

                </tr>
            </thead>


            <tbody>
                {serviciosFacturacion.map((service, index) => (
                            <tr key={index}>
                                <td>{service.ref}</td>
                                <td>{service.container}</td>
                                <td>{service.nave}</td>
                                <td>{service.tipo}</td>
                                <td>{service.depotDevolucion}</td>
                                <td> {formatFecha(service.retiroPuerto)}</td>
                                <td>{formatFecha(service.entrega)}</td>
                                <td>{formatFecha(service.fechaVacio)}</td>
                                <td>PENDIENTE</td>


                            </tr>
                        ))}
                </tbody>
        </table>
    </div>
</>
  )
}

export default FacturacionTable
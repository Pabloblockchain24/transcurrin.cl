import React from 'react'
import { NavLink, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import "./stockTable.css"
import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";


function StockTable() {

    const { getServices, services } = useIntranet()


    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };

    const diasEnDepot = (fechaISO) => {
        const fechaRetiro = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaRetiro
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))
    }

    const demurrage = (fechaISO, diasLibres) =>{
        const fechaRetiro = new Date(fechaISO);
        fechaRetiro.setDate(fechaRetiro.getDate() + diasLibres - 1)
        const dia = fechaRetiro.getDate();
        const mes = fechaRetiro.getMonth() ;
        const año = fechaRetiro.getFullYear();
        return `${dia}-${mes}-${año}`;
    }

    const serviciosEnDepot = services.filter(servicio => {
        return servicio.retiroPuerto !== null && servicio.entrega === null;
      });
    
    
    
    if (serviciosEnDepot.length === 0) return (<div className='customVacio'><h1> OOOPS ... NO HAY UNIDADES EN STOCK</h1></div>)

    return (
        <div className='customTable'>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>RETIRO PUERTO</th>
                        <th> NAVE</th>
                        <th> CARPETA</th>
                        <th> UNIDAD</th>
                        <th> TIPO </th>
                        <th> DEMURRAGE</th>
                        <th> ALMACEN DESTINO </th>
                        <th> DIAS EN DEPOSITO </th>
                        <th> LUGAR DEVOLUCION </th>
                    </tr>
                </thead>

                <tbody>

                        {serviciosEnDepot.map((service, index) => (

                            <tr key={index}>
                                <td>
                                    {service.retiroPuerto ? formatFecha(service.retiroPuerto) : "PENDIENTE"}
                                </td>
                                <td>{service.nave}</td>
                                <td>{service.ref}</td>
                                <td>{service.container}</td>
                                <td>{service.tipo}</td>
                                <td>{demurrage(service.eta, service.demurrage)}</td>
                                <td>{service.almDestino}</td>
                                <td>
                                {service.retiroPuerto ? diasEnDepot(service.retiroPuerto) : "PENDIENTE"}
                                </td>
                                <td>{service.depotDevolucion}</td>

                            </tr>
                        ))}
                


                </tbody>
            </table>
        </div>
    )
}

export default StockTable
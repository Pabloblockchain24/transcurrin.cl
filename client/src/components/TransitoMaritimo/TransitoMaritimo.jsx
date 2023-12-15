import React from 'react'
import { NavLink, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";


function TransitoMaritimo() {

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

    const diasEnPuerto = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaEta
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))

    }

    const transitoMaritimo = services.filter(servicio => {
        return diasEnPuerto(servicio.eta) < 0
      });

    if (transitoMaritimo.length === 0) return (<div className='customVacio'><h1> OOOPS ... NO HAY UNIDADES EN TRANSITO MARITIMO</h1></div>)

    return (
        <div className='customTable'>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th> CARPETA</th>
                        <th> NAVE</th>
                        <th> UNIDAD</th>
                        <th> ETA </th>
                        <th> TIPO </th>
                        <th> DEMURRAGE</th>
                        <th> DIAS EN PUERTO </th>
                    </tr>
                </thead>

                <tbody>
                        {transitoMaritimo.map((service, index) => (
                            <tr key={index}>
                                <td>{service.ref}</td>
                                <td>{service.nave}</td>
                                <td>{service.container}</td>
                                <td>{formatFecha(service.eta)}</td>
                                <td>{service.tipo}</td>
                                <td>{service.demurrage}</td>
                                <td>{diasEnPuerto(service.eta)}</td>

                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransitoMaritimo
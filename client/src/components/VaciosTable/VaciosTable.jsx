import React from 'react'
import { NavLink, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import "./VaciosTable.css"
import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";


function VaciosTable() {

    const { getServices, services } = useIntranet()

    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate() +1 ;
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };

    const diasEnDepot = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaEta
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))

    }

    const diasEnPuerto = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaEta
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


    const vaciosDepot = services.filter(servicio => {
        return servicio.retiroPuerto !== null && diasEnPuerto(servicio.eta) > 0
      });





    if (services.length === 0) return (<div className='customVacio'><h1> OOOPS ... NO HAY UNIDADES PENDIENTES DE DEVOLUCION</h1></div>)
    return (
        <div className='customTable'>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th> CARPETA</th>
                        <th> UNIDAD</th>
                        <th> TIPO</th>
                        <th> DIAS EN DEPOT </th>
                        <th> DEMURRAGE </th>
                        <th> DEPOT DEVOLUCION </th>
                        <th> FECHA DEV. VACIO </th>
                        <th> CHOFER DEVOLUCION</th>
                    </tr>
                </thead>

                <tbody>
                        {vaciosDepot.map((service, index) => (
                            <tr key={index}>
                                <td>{service.ref}</td>
                                <td>{service.container}</td>
                                <td>{service.tipo}</td>
                                <td>{diasEnDepot(service.eta)}</td>
                                <td>{demurrage(service.eta, service.demurrage)}</td>
                                <td>{service.depotDevolucion}</td>
                                <td>{ service.fechaVacio === null ? "" : formatFecha(service.fechaVacio)}</td>
                                <td>{service.choferVacio}</td>

                            </tr>
                        ))}
                


                </tbody>
            </table>
        </div>
    )
}

export default VaciosTable
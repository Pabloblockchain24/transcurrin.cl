import React from 'react'
import "./statusTable.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";

function StatusTable() {


    const { getServices, services } = useIntranet()


    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const formatCarguio = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;

        const diaFormateado = (dia < 10) ? `0${dia}` : dia;
        const mesFormateado = (mes < 10) ? `0${mes}` : mes;

        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();

        const horaFormateada = (hora < 10) ? `0${hora}` : hora;
        const minutosFormateados = (minutos < 10) ? `0${minutos}` : minutos;

        return `${diaFormateado}-${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
    };

    const estimadaEntrega = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;

        const diaFormateado = (dia < 10) ? `0${dia}` : dia;
        const mesFormateado = (mes < 10) ? `0${mes}` : mes;

        const hora = fecha.getHours()+2;
        const minutos = fecha.getMinutes();

        const horaFormateada = (hora < 10) ? `0${hora}` : hora;
        const minutosFormateados = (minutos < 10) ? `0${minutos}` : minutos;

        return `${diaFormateado}-${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
    };


    const entregaDiaSiguiente = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate() + 1;
        const mes = fecha.getMonth() + 1;

        const diaFormateado = (dia < 10) ? `0${dia}` : dia;
        const mesFormateado = (mes < 10) ? `0${mes}` : mes;


        const horaFormateada = `08`
        const minutosFormateados = `30`

        return `${diaFormateado}-${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
    };

    const programacion = services.filter(servicio => {
        return servicio.entrega === null && servicio.progEntrega !== null
    });

    if (programacion.length === 0) return (<div className='customVacio'><h1> NO HAY STATUS DISPONIBLE</h1></div>)

    return (
        <div className='customTableStatus'>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th >UNIDAD</th>
                        <th > CHOFER</th>
                        <th > PRODUCTO </th>
                        <th > ALM. DESTINO</th>
                        <th > HORA CARGUIO</th>
                        <th> PRESENTACION EST.</th>
                        <th> STATUS</th>
                    </tr>
                </thead>
                <tbody>
                {programacion.map((service, index) => (
                        <tr key={index}>
                        <td>{service.container}</td>
                        <td>{service.choferEntrega}</td>
                        <td>{service.tipo}</td>
                        <td>{service.almDestino}</td>
                        <td>{formatCarguio(service.carguioEntrega)}</td>
                        <td>
                            {
                            service.carguioEntrega !== null ? 

                            service.progEntrega> service.carguioEntrega ?  entregaDiaSiguiente(service.carguioEntrega): estimadaEntrega(service.carguioEntrega)
                                : 
                             ""

                            
                            }
                        </td>
                        <td>{
                        service.carguioEntrega !== null ?
                         service.entrega === null ? "EN RUTA":"ENTREGADO" : 
                         "PENDIENTE CARGUIO"}
                        </td>
                    </tr>
                ))}
        </tbody>
            </table>
        </div>
    )
}

export default StatusTable
import React from 'react'
import "./SummaryTable.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink, Link } from "react-router-dom"
import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";


function SummaryTable() {

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

      const formatFechaMan = (fechaISO) => {
        const fecha = new Date(fechaISO);
        fecha.setDate(fecha.getDate() + 1);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };




    const llegoAPuerto = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        return fechaEta - fechaHoy
    }

    const diasEnPuerto = (fechaISO) => {
        const fechaEta = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaEta
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))
    }

    
    const serviciosEnDepot = services.filter(servicio => {
        return servicio.retiroPuerto !== null && servicio.entrega === null;
      });

      const serviciosEnPuerto = services.filter(servicio => {
        return servicio.retiroPuerto === null  && llegoAPuerto(servicio.eta) < 0
      });



      const vaciosDepot = services.filter(servicio => {
        return servicio.retiroPuerto !== null && diasEnPuerto(servicio.eta) > 0 &&  servicio.fechaVacio === null
      });


      const serviciosProgramados = services.filter(servicio => {
        return servicio.progEntrega !== null && servicio.entrega === null 
      });



      const serviciosEnTransito = services.filter(servicio => {
            let aux = llegoAPuerto(servicio.eta)
            if (aux>1){
                return servicio
            }
        }
      );

      const serviciosFacturacion = services.filter(servicio => {
        return servicio.retiroPuerto !== null && diasEnPuerto(servicio.eta) > 0 &&  servicio.fechaVacio !== null && servicio.entrega !== null
      });

      

    return (
        <>
            <div className='customTableSummary'>
                <table className='table  table-borderless customTable'>
                    <tbody>
                        <tr>
                            <td>UNIDADES EN TRANSITO MARITIMO:</td>
                            <td>{serviciosEnTransito.length}</td>
                            <td>
                            <NavLink to={"/intranet/transitoMaritimo"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>UNIDADES EN PUERTO:</td>
                            <td>{serviciosEnPuerto.length}</td>
                            <td>
                            <NavLink to={"/intranet/stockPuerto"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>
                        <tr className='customTr'>
                            <td >UNIDADES EN DEPOSITO:</td>
                            <td >{serviciosEnDepot.length}</td>
                            <td>
                            <NavLink to={"/intranet/stock"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>UNIDADES PENDIENTES DE DEVOLUCION:</td>
                            <td>{vaciosDepot.length}</td>
                            <td>
                            <NavLink to={"/intranet/vacios"} className="buttonSummary"> REVISAR </NavLink>
                            </td>

                        </tr>

                        <tr>
                            <td>SERVICIOS PENDIENTES DE FACTURACION:</td>
                            <td>{serviciosFacturacion.length}</td>
                            <td>
                            <NavLink to={"/intranet/facturacion"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>


                        <tr>
                            <td>PROGRAMACION {formatFechaMan(new Date())}</td>
                            <td>{serviciosProgramados.length>0 ? "OK" : "PENDIENTE" }</td>
                            <td>
                            <NavLink to={"/intranet/programacion"} className="buttonSummary"> REVISAR </NavLink>

                            </td>

                        </tr>

 


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SummaryTable
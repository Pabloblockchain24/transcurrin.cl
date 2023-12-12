import React from 'react'
import "./SummaryTable.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink, Link } from "react-router-dom"


function SummaryTable() {
    return (
        <>
            <div className='customTableSummary'>
                <table className='table  table-borderless  table-hover'>

                    <tbody>
                        <tr>
                            <td className='w-1/2'>OPERACIONES 12-12-2023:</td>
                            <td >EN PROCESO</td>
                            <td> 
                                <NavLink to={"/intranet/status"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>

                        <tr className='customTr'>
                            <td >UNIDADES EN DEPOSITO:</td>
                            <td >25</td>
                            <td>
                            <NavLink to={"/intranet/stock"} className="buttonSummary"> REVISAR </NavLink>
                            </td>

                        </tr>
                        <tr>
                            <td>UNIDADES EN PUERTO:</td>
                            <td>20</td>
                            <td>
                            <NavLink to={"/intranet/stock"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>UNIDADES EN TRANSITO MARITIMO:</td>
                            <td>12</td>
                            <td>
                            <NavLink to={"/intranet/stock"} className="buttonSummary"> REVISAR </NavLink>

                            </td>

                        </tr>

                        <tr>
                            <td>UNIDADES PENDIENTES DE DEVOLUCION:</td>
                            <td>30</td>
                            <td>
                            <NavLink to={"/intranet/stock"} className="buttonSummary"> REVISAR </NavLink>
                            </td>

                        </tr>

                        <tr>
                            <td>SERVICIOS PENDIENTES DE FACTURACION:</td>
                            <td>18</td>
                            <td>
                            <NavLink to={"/intranet/facturacion"} className="buttonSummary"> REVISAR </NavLink>
                            </td>
                        </tr>


                        <tr>
                            <td>PROGRAMACION 13-12-2023:</td>
                            <td>PENDIENTE</td>
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
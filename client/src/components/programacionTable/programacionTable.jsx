import React from 'react'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { useIntranet } from "../../context/IntranetContext"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, IconButton, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function ProgramacionTable() {
    const { getServices, services } = useIntranet()

    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


      const estimadaEntrega = (fechaISO, diasLibres) =>{
        const fechaRetiro = new Date(fechaISO);
        fechaRetiro.setDate(fechaRetiro.getDate() + diasLibres - 1)
        const dia = fechaRetiro.getDate();
        const mes = fechaRetiro.getMonth() ;
        const año = fechaRetiro.getFullYear();
        return `${dia}-${mes}-${año}`;
    }

      const programacion = services.filter(servicio => {
        return servicio.entrega === null && servicio.progEntrega !== null
      });


    if (programacion.length === 0) return (<div className='customVacio'><h1> NO HAY PROGRAMACION DISPONIBLE</h1></div>)



    const columns = [
        { id: 'Unidad', label: 'UNIDAD' },
        { id: 'Tipo', label: 'TIPO' },
        { id: 'AlmacenDestino', label: 'ALMACEN DESTINO' },
        { id: 'ChoferEntrega', label: 'CHOFER ENTREGA' },
        { id: 'CarguioFecha', label: 'CARGUIO FECHA' },
        { id: 'EntregaFecha', label: 'ENTREGA FECHA' },
        { id: 'Status', label: 'Status' },
    ];
      
function createData(Unidad, Tipo, AlmacenDestino, ChoferEntrega, CarguioFecha, EntregaFecha,Status) {
    return { Unidad, Tipo, AlmacenDestino, ChoferEntrega, CarguioFecha, EntregaFecha, Status };
  }
  
  const rows =  programacion.map((service,index) => {
    return createData(
        service.container,
        service.tipo,
        service.almDestino,
        service.choferEntrega,
        service.carguioEntrega,
        estimadaEntrega(service.carguioEntrega),
        service.statusEntrega,
        index
    )
})








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
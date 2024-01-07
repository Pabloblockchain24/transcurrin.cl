import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import ProgramacionTable from "../../../components/programacionTable/programacionTable"
import "./IntranetProgramacion.css"

function IntranetProgramacion() {

  const ahora = new Date()


  const formatFechaMan = (fechaISO) => {
    const fecha = new Date(fechaISO);
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  };

  const formatFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  };


  const getHora = (fechaISO) => {
    const hora = fechaISO.getHours()
    return hora
  };


  return (
    <>
    
    <NavBarIntranet/>

    <div className='boxPadre'>
    <div className='titleIntranetProgramacion'> PROGRAMACION OPERACIONES {
          getHora(ahora) > 16 ? formatFechaMan(ahora) : formatFecha(ahora)
        }
        </div>        
    </div>

    <ProgramacionTable/>
</>
  )
}

export default IntranetProgramacion
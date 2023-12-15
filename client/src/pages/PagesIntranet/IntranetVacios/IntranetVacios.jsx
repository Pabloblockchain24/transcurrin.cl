import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import "./IntranetVacios.css";

import VaciosTable from '../../../components/VaciosTable/VaciosTable';
function IntranetVacios() {

    const today = new Date()

    const formatFecha = (fechaISO) => {
        const dia = fechaISO.getDate();
        const mes = fechaISO.getMonth() + 1;
        const año = fechaISO.getFullYear();
        return `${dia}-${mes}-${año}`;
      };



      
  return (
    <>
        <NavBarIntranet/>
        <div className='boxPadre'>
        <div className='titleIntranet'> DEVOLUCION DE VACIOS AL {formatFecha(today)}</div>
        </div>


        <VaciosTable/>

    </>

  )
}

export default IntranetVacios
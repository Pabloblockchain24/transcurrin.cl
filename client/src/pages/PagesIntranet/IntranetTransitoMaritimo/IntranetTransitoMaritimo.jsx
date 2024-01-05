import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import TransitoMaritimo from '../../../components/TransitoMaritimo/TransitoMaritimo';
import "./IntranetTransitoMaritimo.css"

function IntranetTransitoMaritimo() {
  const today = new Date()
  const formatFecha = (fechaISO) => {
    const dia = fechaISO.getDate();
    const mes = fechaISO.getMonth() + 1;
    const año = fechaISO.getFullYear();
    return `${dia}-${mes}-${año}`;
  };

  return (
    <>
      <NavBarIntranet />
      <div className='boxPadre'>
        <div className='titleIntranet'> UNIDADES EN TRANSITO MARITIMO AL {formatFecha(today)}</div>
      </div>
      <TransitoMaritimo />
    </>
  )
}

export default IntranetTransitoMaritimo
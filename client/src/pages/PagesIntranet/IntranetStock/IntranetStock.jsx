import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import "./IntranetStock.css";
import StockTable from '../../../components/stockTable/stockTable';

function IntranetStock() {
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
        <div className='titleIntranet'> UNIDADES EN DEPOSITO AL {formatFecha(today)} </div>
      </div>
      <StockTable />
    </>

  )
}

export default IntranetStock
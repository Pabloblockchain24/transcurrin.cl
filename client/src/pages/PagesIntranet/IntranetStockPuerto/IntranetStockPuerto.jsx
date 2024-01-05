import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import "./IntranetStockPuerto.css";
import StockPuertoTable from '../../../components/StockPuertoTable/StockPuertoTable';

function IntranetStockPuerto() {
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
        <div className='titleIntranet'> UNIDADES EN PUERTO AL {formatFecha(today)}</div>
      </div>
      <StockPuertoTable />
    </>
  )
}

export default IntranetStockPuerto
import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import "./IntranetStock.css";
import StockTable from '../../../components/stockTable/stockTable';

function IntranetStock() {
  return (
    <>
        <NavBarIntranet/>
        <div className='boxPadre'>
        <div className='titleIntranet'> STOCK EN DEPOSITO 12-12-2023</div>
        </div>


        <StockTable/>












    </>

  )
}

export default IntranetStock
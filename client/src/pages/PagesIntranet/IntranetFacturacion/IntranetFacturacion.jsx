import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import FacturacionTable from '../../../components/FacturacionTable/FacturacionTable';

function IntranetFacturacion() {

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
        <div className='titleIntranet'> FACTURACION PENDIENTE {formatFecha(today)} </div>
        </div>

    <FacturacionTable/>
</>
  )
}

export default IntranetFacturacion
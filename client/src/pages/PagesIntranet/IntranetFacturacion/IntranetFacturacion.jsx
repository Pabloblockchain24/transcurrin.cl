import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import FacturacionTable from '../../../components/FacturacionTable/FacturacionTable';

function IntranetFacturacion() {
  return (
    <>
    
    <NavBarIntranet/>

    <div className='boxPadre'>
        <div className='titleIntranet'> FACTURACION PENDIENTE 12-12-2023 </div>
        </div>

    <FacturacionTable/>
</>
  )
}

export default IntranetFacturacion
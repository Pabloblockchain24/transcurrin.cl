import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import StatusTable from '../../../components/statusTable/statusTable';
import "./IntranetStatus.css"


function IntranetStatus() {
  return (
    <>
    
    <NavBarIntranet/>

    <div className='boxPadre'>
        <div className='titleIntranet'> STATUS OPERACION 12-12-2023 </div>
        </div>

    <StatusTable/>
</>
  )
}

export default IntranetStatus
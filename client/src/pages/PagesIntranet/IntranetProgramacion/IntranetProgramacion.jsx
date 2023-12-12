import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import ProgramacionTable from "../../../components/programacionTable/programacionTable"
import "./IntranetProgramacion.css"

function IntranetProgramacion() {
  return (
    <>
    
    <NavBarIntranet/>

    <div className='boxPadre'>
        <div className='titleIntranet'> PROGRAMACION OPERACION 12-12-2023 </div>
        </div>

    <ProgramacionTable/>
</>
  )
}

export default IntranetProgramacion
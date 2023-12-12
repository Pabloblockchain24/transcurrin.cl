import React from 'react'
import "./programacionTable.css"

function ProgramacionTable() {
  return (
    <>
    <div className='customTableProgramacion'>
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th className='w-1/10'>#</th>
                    <th className='w-1/6'>UNIDAD</th>
                    <th className='w-1/10'> PRODUCTO</th>
                    <th className='w-1/10' > ALM. DESTINO</th>
                    <th className='w-1/10' > MN</th>
                    <th className='w-1/10'> DEPOT DEV</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className='centrarElemento'>1</td>
                    <td >TCKU 654563-1</td>
                    <td>SANITARIO</td>
                    <td>B2B</td>
                    <td>MONTEVIDEO EXPRESS</td>
                    <td>AGUNSA PLACILLA</td>
                </tr>
                <tr>
                    <td className='centrarElemento'>1</td>
                    <td >TCKU 654563-1</td>
                    <td>SANITARIO</td>
                    <td>B2B</td>
                    <td>MONTEVIDEO EXPRESS</td>
                    <td>AGUNSA PLACILLA</td>
                </tr>
                <tr>
                    <td className='centrarElemento'>1</td>
                    <td >TCKU 654563-1</td>
                    <td>SANITARIO</td>
                    <td>B2B</td>
                    <td>MONTEVIDEO EXPRESS</td>
                    <td>AGUNSA PLACILLA</td>
                </tr>
            </tbody>
        </table>
    </div>
</>
  )
}

export default ProgramacionTable
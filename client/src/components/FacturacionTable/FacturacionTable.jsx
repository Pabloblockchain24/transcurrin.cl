import React from 'react'

function FacturacionTable() {
  return (
    <>
    <div className='customTableProgramacion'>
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th className='w-1/10'>CARPETA</th>
                    <th className='w-1/6'>UNIDAD</th>
                    <th className='w-1/10'> NAVE</th>
                    <th className='w-1/10' > OPERACION</th>
                    <th className='w-1/10' > LUGAR DEV.</th>
                    <th className='w-1/10'> RETIRO PUERTO</th>
                    <th className='w-1/10'> ENTREGA CMT</th>
                    <th className='w-1/10'> FECHA VACIO</th>
                    <th className='w-1/10'> TARIFA</th>

                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className='centrarElemento'>6200000909</td>
                    <td >MRKU 884120-8</td>
                    <td>LONG BEACH EXPRESS</td>
                    <td>DESCONSOLIDADO</td>
                    <td>CONTOPSA SAI</td>
                    <td>04-12-2023</td>
                    <td>05-12-2023</td>
                    <td>04-12-2023</td>
                    <td>$430.000</td>
                </tr>
                <tr>
                    <td className='centrarElemento'>6200000909</td>
                    <td >MRKU 884120-8</td>
                    <td>LONG BEACH EXPRESS</td>
                    <td>DESCONSOLIDADO</td>
                    <td>CONTOPSA SAI</td>
                    <td>04-12-2023</td>
                    <td>05-12-2023</td>
                    <td>04-12-2023</td>
                    <td>$430.000</td>
                </tr>
                <tr>
                    <td className='centrarElemento'>6200000909</td>
                    <td >MRKU 884120-8</td>
                    <td>LONG BEACH EXPRESS</td>
                    <td>DESCONSOLIDADO</td>
                    <td>CONTOPSA SAI</td>
                    <td>04-12-2023</td>
                    <td>05-12-2023</td>
                    <td>04-12-2023</td>
                    <td>$430.000</td>
                </tr>
            </tbody>
        </table>
    </div>
</>
  )
}

export default FacturacionTable
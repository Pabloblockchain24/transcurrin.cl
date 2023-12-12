import React from 'react'
import "./statusTable.css"
import "bootstrap/dist/css/bootstrap.min.css"


function StatusTable() {
    return (
        <>
            <div className='customTableStatus'>
                <table className='table table-striped table-bordered table-hover'>
                    <thead class="thead-dark">
                        <tr>
                            <th className='w-1/10'>#</th>
                            <th className='w-1/10'>UNIDAD</th>
                            <th className='w-1/10'> CHOFER</th>
                            <th className='w-1/10' > PRODUCTO</th>
                            <th className='w-1/10' > DESTINO</th>
                            <th className='w-1/10'> HORA CARGUIO </th>
                            <th className='w-1/10'> HORA PRESENTACION EST. </th>
                            <th className='w-1/6'> STATUS</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='centrarElemento'>1</td>
                            <td >TCKU 654563-1</td>
                            <td>FABIAN GONZALEZ</td>
                            <td>SANITARIO</td>
                            <td>RENCA</td>
                            <td>10:38</td>
                            <td>12:38</td>
                            <td>EN RUTA</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>TCKU 654563-1</td>
                            <td>FABIAN GONZALEZ</td>
                            <td>SANITARIO</td>
                            <td>RENCA</td>
                            <td>10:38</td>
                            <td>12:38</td>
                            <td>EN RUTA</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>TCKU 654563-1</td>
                            <td>FABIAN GONZALEZ</td>
                            <td>SANITARIO</td>
                            <td>RENCA</td>
                            <td>10:38</td>
                            <td>12:38</td>
                            <td>EN RUTA</td>

                        </tr>
                    </tbody>






                </table>
            </div>
        </>
    )
}

export default StatusTable
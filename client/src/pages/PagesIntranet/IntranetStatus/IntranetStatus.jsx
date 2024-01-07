import React from 'react'
import NavBarIntranet from "../../../components/NavbarIntranet/NavBarIntranet";
import StatusTable from '../../../components/statusTable/statusTable';
import "./IntranetStatus.css"


function IntranetStatus() {

  const ahora = new Date()

  const formatFechaMan = (fechaISO) => {
    const fecha = new Date(fechaISO);
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  };

  const formatFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  };

  const getHora = (fechaISO) => {
    const hora = fechaISO.getHours()
    return hora
  };

  return (
    <>

      <NavBarIntranet />
      <div className='boxPadre'>
        <div className='titleIntranetStatus'> STATUS OPERACION {
          getHora(ahora) > 16 ? formatFechaMan(ahora) : formatFecha(ahora)
        }
        </div>
        <p className='statusSubtitle'>
          Las horas de entrega indicadas abajo están sujetas a estimaciones, ya que dependen de diversos factores, especialmente las condiciones de tráfico en la ruta.
          </p>
      </div>

      <StatusTable />
    </>
  )
}

export default IntranetStatus
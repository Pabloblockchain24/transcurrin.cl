import React from 'react'
import { NavLink, Link } from "react-router-dom"
import "./NavbarIntranet.css"

import { TfiClipboard } from "react-icons/tfi";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscCalendar } from "react-icons/vsc";
import { GrCalculator } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

function NavBarIntranet() {
  return (
    <div className='nav-list-Intranet'>
    <NavLink to={"/intranet"} className="nav-item-Intranet">  <FaHome  className='nav-item-icon'/> HOME </NavLink>
    <NavLink to={"/intranet/stock"} className="nav-item-Intranet"> <TfiClipboard className='nav-item-icon' /> STOCK EN DEPOSITO</NavLink>
    <NavLink to={"/intranet/programacion"} className="nav-item-Intranet"> <VscCalendar className='nav-item-icon' /> PROGRAMACION </NavLink>
    <NavLink to={"/intranet/status"} className="nav-item-Intranet"> <TfiAlarmClock className='nav-item-icon'/>  STATUS OPERACION </NavLink>
    <NavLink to={"/intranet/facturacion"} className="nav-item-Intranet"> <GrCalculator className='nav-item-icon' />  FACTURACION </NavLink>
    </div>
  )
}

export default NavBarIntranet
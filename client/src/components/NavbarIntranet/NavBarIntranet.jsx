import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from "../../context/AuthContext"
import { NavLink, Link, useLocation } from "react-router-dom"
import "./NavbarIntranet.css"

import { TfiClipboard } from "react-icons/tfi";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscCalendar } from "react-icons/vsc";
import { GrCalculator } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { BiAnchor } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { RiShipLine } from "react-icons/ri";
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

function NavBarIntranet() {
  const {logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (

    <header className='headerNavIntranet'>
      <div className="abrirMenu">
        <button className='customButtonNavbarIntranet' onClick={toggleMenu}><PiListFill className='buttonAbrir' /></button>
      </div>
      
      <nav className={menuOpen ? 'nav-Intranet visible' : 'nav-Intranet' }>
        <button className="cerrarMenu" onClick={toggleMenu}><AiFillCloseSquare /></button>
        <ul className='nav-list-Intranet'>
          <li className='liNavList'> <NavLink to={"/intranet"} className="itemlistNav">  <FaHome className='nav-item-icon' /> HOME </NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/transitoMaritimo"} className="itemlistNav"> <RiShipLine className='nav-item-icon' /> TRANSITO MAR.</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/stockPuerto"} className="itemlistNav"> <BiAnchor className='nav-item-icon' />  STOCK PUERTO </NavLink></li>
          <li className='liNavList'> <NavLink to={"/intranet/stock"} className="itemlistNav"> <TfiClipboard className='nav-item-icon' /> STOCK DEPOSITO</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/programacion"} className="itemlistNav"> <VscCalendar className='nav-item-icon' /> PROGRAMACION </NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/status"} className="itemlistNav"> <TfiAlarmClock className='nav-item-icon' />  STATUS OPE. </NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/vacios"} className="itemlistNav"> <GiReturnArrow className='nav-item-icon' />  DEV. VACIOS </NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/facturacion"} className="itemlistNav"> <GrCalculator className='nav-item-icon' />  FACTURACION </NavLink> </li>
        </ul>
        <div>            
          <Link className="buttonLogout" to="/" onClick={() => logout()}> CERRAR SESION </Link>
        </div>
      </nav>

   
    </header>

  )
}

export default NavBarIntranet
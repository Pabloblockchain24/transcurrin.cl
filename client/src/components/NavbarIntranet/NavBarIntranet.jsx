import React from 'react'
import { useState, useEffect } from 'react'

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

function NavBarIntranet() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (

    <header>
      <nav className={menuOpen ? 'navbarCustom visible' : 'navbarIntranetCustom'}>

        <ul className='nav-list-Intranet'>
          <button className="menuMobileIntranet" onClick={toggleMenu}>
            <PiListFill className='buttonAbrir' />
          </button>
          <li> <NavLink to={"/intranet"} className="nav-item-Intranet">  <FaHome className='nav-item-icon' /> HOME </NavLink> </li>
          <li> <NavLink to={"/intranet/transitoMaritimo"} className="nav-item-Intranet"> <RiShipLine className='nav-item-icon' /> TRANSITO MARITIMO</NavLink> </li>
          <li> <NavLink to={"/intranet/stockPuerto"} className="nav-item-Intranet"> <BiAnchor className='nav-item-icon' />  STOCK EN PUERTO </NavLink></li>
          <li> <NavLink to={"/intranet/stock"} className="nav-item-Intranet"> <TfiClipboard className='nav-item-icon' /> STOCK EN DEPOSITO</NavLink> </li>
          <li> <NavLink to={"/intranet/programacion"} className="nav-item-Intranet"> <VscCalendar className='nav-item-icon' /> PROGRAMACION </NavLink> </li>
          <li> <NavLink to={"/intranet/status"} className="nav-item-Intranet"> <TfiAlarmClock className='nav-item-icon' />  STATUS OPERACION </NavLink> </li>
          <li> <NavLink to={"/intranet/vacios"} className="nav-item-Intranet"> <GiReturnArrow className='nav-item-icon' />  DEV. VACIOS </NavLink> </li>
          <li> <NavLink to={"/intranet/facturacion"} className="nav-item-Intranet"> <GrCalculator className='nav-item-icon' />  FACTURACION </NavLink> </li>
        </ul>
      </nav>
    </header>

  )
}

export default NavBarIntranet
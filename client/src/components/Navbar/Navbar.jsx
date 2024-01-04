import React from 'react'
import { useState, useEffect } from 'react'
import "./Navbar.css"
import { NavLink, Link, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import logoTrancurrin from "../../assets/logoSitio2.png"
import { BsPersonGear } from "react-icons/bs";
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbarMain">
      <NavLink to={isAuthenticated ? '/intranet' : '/'}> <img src={logoTrancurrin} alt="Logo" className="navbarLogo" /> </NavLink>
      {isAuthenticated ? (
        <nav className={menuOpen ? 'navbarCustom visible' : 'navbarCustomOnIntranet'}>

          <ul className='navAuthenticated'>
            <li> <div className="navbarTitle">BIENVENIDO {user.name}!</div> </li>
            <li> <Link className="buttonNavLogout" to="/" onClick={() => logout()}> LOGOUT </Link> </li>
          </ul>
        </nav>
      ) : (
        <>
          <button className="menuMobile" onClick={toggleMenu}> <PiListFill className='buttonAbrir' /> </button>
          <nav className={menuOpen ? 'navbarCustom visible' : 'navbarCustom'}>
            <ul className="navbarList">
              <button className="cerrarMenuMobile" onClick={toggleMenu}><AiFillCloseSquare /></button>
              <li><NavLink to="/categoria/NOSOTROS" className="navbarLink"> NOSOTROS </NavLink> </li>
              <li><NavLink to="/categoria/DEPOSITOEQUIPOS" className="navbarLink"> EQUIPOS</NavLink></li>
              <li><NavLink to="/categoria/SERVICIOS" className="navbarLink">SERVICIOS</NavLink></li>
              <li><NavLink to="/categoria/CLIENTES" className="navbarLink">CLIENTES</NavLink></li>
              <li><NavLink to="/categoria/CONTACTO" className="navbarLink">CONTACTO</NavLink></li>
              <NavLink to="/login" className="navbarLog"><BsPersonGear className="navbarLogoLog" /> INTRANET</NavLink>
            </ul>
          </nav>
        </>


      )}
    </header>
  );
}
export default Navbar

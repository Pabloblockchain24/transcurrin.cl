import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import logoSitio2 from "../../assets/logoSitio2.png"

import {BsPersonGear} from "react-icons/bs";

import "./Navbar.css"

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()
    return (
        <section className="flex p-12 bg-white items-center">
            <div className='w-1/3'>
                <NavLink to={"/"} className="flex flex-row justify-center"> 
                {<img src={logoSitio2} alt="logo tienda" className="logoNavbar" />}
                </NavLink>
            </div>

            <button className='abrirMenu'>ABRIR</button>

            <section className='navbarCustom'>
                {isAuthenticated ? (
                    <p>pendiente</p>
                    // <>
                    //     <li className="mr-10"> 
                    //     ¡Bienvenido {user.name}!
                    //     </li>
                    //     <li>
                    //         <Link to="/add-service"> Agregar una tarea</Link>
                    //     </li>
                    //     <li>
                    //         <Link to="/" onClick={() =>{logout()}}> Logout</Link>
                    //     </li>
                    // </>
                ) : (
                    <nav className='nav-list'>
                        {/* <li>
                                <Link to="/login">LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/register">REGISTER</Link>
                            </li> */}
                        <NavLink to={"/categoria/NOSOTROS"} className="customNavLink"> NOSOTROS </NavLink>
                        <NavLink to={"/categoria/DEPOSITOEQUIPOS"} className="customNavLink"> DEPOSITO & EQUIPOS</NavLink>
                        <NavLink to={"/categoria/SERVICIOS"} className="customNavLink"> SERVICIOS </NavLink>
                        <NavLink to={"/categoria/CLIENTES"} className="customNavLink"> CLIENTES </NavLink>
                        <NavLink to={"/categoria/CONTACTO"} className="customNavLink"> CONTACTO </NavLink>
                        <NavLink to={"/login"} className="customLogItem"> <BsPersonGear /> ACCESO CLIENTES </NavLink>
                    </nav>
                )
                }

            </section>
           
        </section>
        
    )
}

export default Navbar
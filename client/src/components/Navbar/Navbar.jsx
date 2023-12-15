import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import logoSitio2 from "../../assets/logoSitio2.png"

import { BsPersonGear } from "react-icons/bs";

import "./Navbar.css"

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()


    return (
        <section className="flex p-12 bg-white items-center">




            <button className='abrirMenu'>ABRIR</button>

            <section className='navbarCustom'>
                {isAuthenticated ? (
                    <>
                        <div className='w-1/3'>
                            <NavLink to={"/intranet"} className="flex flex-row justify-center">
                                {<img src={logoSitio2} alt="logo tienda" className="logoNavbar" />}
                            </NavLink>
                        </div>
                        <div className='nav-list'>
                            <div className='bienvenido'> BIENVENIDO {user.name} ! </div>
                            <Link className="text-center font-bold customLogItem" to="/" onClick={() => { logout() }}> Logout</Link>
                        </div>
                    </>


                ) : (
                    <>
                        <div className='w-1/3'>
                            <NavLink to={"/"} className="flex flex-row justify-center">
                                {<img src={logoSitio2} alt="logo tienda" className="logoNavbar" />}
                            </NavLink>
                        </div>

                        <div className='nav-list'>
                            <NavLink to={"/categoria/NOSOTROS"} className="customNavLink"> NOSOTROS </NavLink>
                            <NavLink to={"/categoria/DEPOSITOEQUIPOS"} className="customNavLink"> DEPOSITO & EQUIPOS</NavLink>
                            <NavLink to={"/categoria/SERVICIOS"} className="customNavLink"> SERVICIOS </NavLink>
                            <NavLink to={"/categoria/CLIENTES"} className="customNavLink"> CLIENTES </NavLink>
                            <NavLink to={"/categoria/CONTACTO"} className="customNavLink"> CONTACTO </NavLink>
                            <NavLink to={"/login"} className="customLogItem"> <BsPersonGear /> ACCESO CLIENTES </NavLink>
                        </div>
                    </>



                )
                }

            </section>

        </section>

    )
}

export default Navbar

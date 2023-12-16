import React from 'react'
import "./Navbar.css"
import { NavLink, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import logoTrancurrin from "../../assets/logoSitio2.png"
import { BsPersonGear } from "react-icons/bs";

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()

    return (
        <nav className="navbarMain">
            <button className='abrirMenu'>ABRIR</button>
                {isAuthenticated ?
                    (
                        <main className='navbarMainBox'>
                            <section className='navbarLogoBox'>
                                <NavLink to={"/intranet"}>
                                    {<img src={logoTrancurrin} alt="Logo" className='navbarLogo' />}
                                </NavLink>
                            </section>
                            <section className='navbarList'>
                                <div className='navbarTitle'> BIENVENIDO {user.name} ! </div>
                                <Link className="navbarLog" to="/" onClick={() => { logout() }}> Logout</Link>
                            </section>
                        </main>
                    ) : (
                        <main className='navbarMainBox'>
                            <section className='navbarLogoBox'>
                                <NavLink to={"/"}>
                                    {<img src={logoTrancurrin} alt="Logo" className="navbarLogo" />}
                                </NavLink>
                            </section>
                            <section className='navbarList'>
                                <NavLink to={"/categoria/NOSOTROS"} className="navbarLink"> NOSOTROS </NavLink>
                                <NavLink to={"/categoria/DEPOSITOEQUIPOS"} className="navbarLink"> EQUIPOS</NavLink>
                                <NavLink to={"/categoria/SERVICIOS"} className="navbarLink"> SERVICIOS </NavLink>
                                <NavLink to={"/categoria/CLIENTES"} className="navbarLink"> CLIENTES </NavLink>
                                <NavLink to={"/categoria/CONTACTO"} className="navbarLink"> CONTACTO </NavLink>
                                <NavLink to={"/login"} className="navbarLog"> <BsPersonGear className='navbarLogoLog' /> INTRANET </NavLink>
                            </section>
                        </main>
                    )}
        </nav>
    )
}
export default Navbar

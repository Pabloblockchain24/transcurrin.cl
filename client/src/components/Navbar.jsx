import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import logoSitio from "../assets/logoSitio.png"

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()
    return (
        <section className="flex flex-row h-15vh bg-zinc-100 items-center justify-center">
            <div className=' w-1/2 '>
                <NavLink to={"/"} className="flex flex-row justify-center"> 
                {<img src={logoSitio} alt="logo tienda" className="w-1/3" />}
                </NavLink>
            </div>
            <section className="flex gap-x-2 w-full">
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
                    <>
                        {/* <li>
                                <Link to="/login">LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/register">REGISTER</Link>
                            </li> */}
                        <NavLink to={"/categoria/NOSOTROS"} className="m-5 text-black font-bold "> NOSOTROS </NavLink>
                        <NavLink to={"/categoria/DEPOSITOEQUIPOS"} className="m-5 text-black font-bold"> DEPOSITO Y EQUIPOS </NavLink>
                        <NavLink to={"/categoria/SERVICIOS"} className="m-5 text-black font-bold"> SERVICIOS </NavLink>
                        <NavLink to={"/categoria/CLIENTES"} className="m-5 text-black font-bold"> CLIENTES </NavLink>
                        <NavLink to={"/categoria/CONTACTO"} className="m-5 text-black font-bold"> CONTACTANOS </NavLink>
                    </>
                )
                }
            </section>
            <div className='w-1/3'>
            <NavLink to={"/login"} className=" flex flew-row justify-center w-3/4 text-white bg-zinc-400  p-5 rounded-lg font-bold hover:bg-zinc-600 ">
                <i class="bi bi-person-circle"></i> 
                PORTAL CLIENTES
            </NavLink>

            </div>

        </section>
    )
}

export default Navbar
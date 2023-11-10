
import { useIntranet } from "../../context/IntranetContext"
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext"
import { Link } from "react-router-dom";

function Intranet() {
    const { isAuthenticated, user, logout } = useAuth()
    const { getServices, services } = useIntranet();

    useEffect(() => {
        getServices()
    }, [])
    // if (services.length === 0) return (<h1> NO HAY SERVICIOS</h1>)



    return (
        <>
            <h1 className="text-center p-10 m-10 font-bold"> ¡Bienvenido {user.name}!</h1>
            <Link className="text-center p-10 m-10 font-bold" to="/" onClick={() => { logout() }}> Logout</Link>
        </>


    )
}

export default Intranet

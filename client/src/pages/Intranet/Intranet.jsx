
import { useIntranet } from "../../context/IntranetContext";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import StockTable from "../../components/stockTable/stockTable";

import NavBarIntranet from "../../components/NavbarIntranet/NavBarIntranet";



function Intranet() {
    const { isAuthenticated, user, logout } = useAuth()
    const { getServices, services } = useIntranet();

    useEffect(() => {
        getServices()
    }, [])
    // if (services.length === 0) return (<h1> NO HAY SERVICIOS</h1>)


    return (
        <>
            <NavBarIntranet/>
            <StockTable/>

        </>


    )
}

export default Intranet

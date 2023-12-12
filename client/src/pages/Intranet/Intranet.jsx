
import { useIntranet } from "../../context/IntranetContext";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import StockTable from "../../components/stockTable/stockTable";

import NavBarIntranet from "../../components/NavbarIntranet/NavBarIntranet";
import SummaryTable from "../../components/SummaryTable/SummaryTable";


import "./Intranet.css"

function Intranet() {
    const { isAuthenticated, user, logout } = useAuth()
    const { getServices, services } = useIntranet();

    useEffect(() => {
        getServices()
    }, [])
    // if (services.length === 0) return (<h1> NO HAY SERVICIOS</h1>)


    return (
        <>
            <NavBarIntranet />

            <div className="auxIntranetSummary">
                <main className="boxMain">
                    <div className='boxPadreIntranet'>
                        <div className='titleIntranetSummary'> RESUMEN OPERACIONAL 12-12-2023 </div>
                    </div>

                    <SummaryTable />








                </main>

            </div>


        </>


    )
}

export default Intranet

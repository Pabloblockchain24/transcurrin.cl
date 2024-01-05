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
    const { createService, getServices, updateService, services } = useIntranet()

    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])
    if (services.length === 0) return (<h1> NO HAY SERVICIOS</h1>)

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
    };



    return (
        <>

        <NavBarIntranet />

            <div className="auxIntranetSummary">
                <main className="boxMain">
                    <div className='boxPadreIntranet'>
                        <div className='titleIntranetSummary'> RESUMEN OPERACIONAL {formatFecha(new Date())} </div>
                    </div>
                    <div className="boxDataIntranet">
                        <p className="dataIntranet"> Usuario: {user.name} </p>
                        <p className="dataIntranet"> Compañia: {user.company} </p>
                    </div>
                    <SummaryTable />


                </main>

            </div>


        </>


    )
}

export default Intranet

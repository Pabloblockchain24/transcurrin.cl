import {useIntranet} from "../context/IntranetContext"
import {Link} from "react-router-dom"

function ServiceCard({ service }) {

    const { deleteService} = useIntranet();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{service.ref}</h1>
                <div className="flex gap-x-2 items-center">
                    <button onClick={ () =>{
                        deleteService(service._id)
                    }
                    }> delete</button>
                    <Link to={`/intranet/${service._id}`}>EDIT</Link>
                </div>
            </header>
            <p className="text-slate-300">{service.container}</p>
            {/* <p>{new Date(service.date).toLocaleDateString()}</p> */}
        </div>
    )
}

export default ServiceCard
import { useIntranet } from "../context/IntranetContext"
import { useEffect } from "react";
import ServiceCard from "../components/ServiceCard"

function ServicePage() {
  const {getServices, services} = useIntranet();

  useEffect( () =>{
    getServices()
  },[])

  if(services.length === 0) return (<h1> NO HAY SERVICIOS</h1>)

  return(
    <div className="grid grid-cols-3 gap-2">
    {services.map( (service) => (
      <ServiceCard service={service} key={service._id} />
    ))}
    </div>
  )

}

export default ServicePage
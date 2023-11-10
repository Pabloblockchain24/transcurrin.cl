import { createContext, useContext, useState } from "react"
import { createServiceRequest, getServicesRequest, deleteServiceRequest, getServiceRequest, updateServiceRequest } from "../api/services"
const IntranetContext = createContext()

export const useIntranet = () => {
    const context = useContext(IntranetContext);
    if (!context) {
        throw new Error("useIntranet must be used within a IntranetProvider")
    }
    return context
}

export function IntranetProvider({ children }) {
    const [services, setServices] = useState([])

    const getServices = async () => {
        const res = await getServicesRequest()
        try {
            setServices(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createService = async (service) => {
        const res = await createServiceRequest(service)
        console.log(res)
    }

    const deleteService = async (id) => {
        try {
            const res = await deleteServiceRequest(id)
            if (res.status === 204) setServices(services.filter(service => service._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getService = async (id) => {
        try {
            const res = await getServiceRequest(id)
            return res.data
        } catch (error){
            console.log(error)
        }
    }

    const updateService = async(id,service) =>{
        try{
            const res = await updateServiceRequest(id,service)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <IntranetContext.Provider value={{
            services,
            createService,
            getServices,
            deleteService,
            getService,
            updateService
        }}
        >
            {children}
        </IntranetContext.Provider>
    )
}


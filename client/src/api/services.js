import axios from "./axios"

export const getServicesRequest = () => axios.get("/intranet")

export const getServiceRequest = (id) => axios.get(`/intranet/${id}`)

export const createServiceRequest = (service) => axios.post("/intranet", service)

export const updateServiceRequest = (id,service) => axios.put(`/intranet/${id}` , service)

export const deleteServiceRequest = (id) => axios.delete(`/intranet/${id}`)

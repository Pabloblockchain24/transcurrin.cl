import axios from "axios";


const instance  = axios.create({
    baseURL: "https://transcurrin-cl-api.vercel.app/api",
    withCredentials: true
})

export default instance
import axios from "axios";


const instance  = axios.create({
    baseURL: "https://transcurrin-cl.vercel.app",
    withCredentials: true
})

export default instance
import axios from "axios";


const instance  = axios.create({
    baseURL: "https://transcurrin-cl-api.vercel.app/",
    withCredentials: true
})

export default instance
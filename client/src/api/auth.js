import axios from "./axios";


export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify")

export const sendMailRequest  = (data) => axios.post("/sendMail", data)

export const sendMailReset  = (data) => axios.post("/sendMailReset", data)

export const verificarCorreo = (data) => axios.post("/verifyEmail", data)
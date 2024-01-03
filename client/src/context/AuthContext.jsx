import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, sendMailRequest, sendMailReset, verificarCorreo } from "../api/auth"

import Cookies from "js-cookie"

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [exists,setExists] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)


    const sendMail = async(data) => {
        try {
            const res = await sendMailRequest(data)
        } catch (error) {
            console.log(error)
        }
    }


    const sendMailRes = async(data) => {
        try {
            const res = await sendMailReset(data)
        } catch (error) {
            console.log(error)
        }
    }

    const verificarCorreoEnBD = async(correo) => {
        const res = await verificarCorreo(correo)
        return res.data
    }

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
            
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }

            setErrors([error.response.data.message])
        }
    }

    const logout = async() =>{
        Cookies.remove("token");
        setIsAuthenticated(false)
        setUser(null)
    }


    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data){
                setIsAuthenticated(false)
                setLoading(false)
                return
                }  
                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)

            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)

            }
        }
        checkLogin();
    }, [])

    return (
        <AuthContext.Provider value={{
            sendMail,
            sendMailRes,
            verificarCorreoEnBD,
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
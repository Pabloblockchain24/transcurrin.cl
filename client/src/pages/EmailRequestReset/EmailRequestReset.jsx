import React, { useEffect } from 'react'
import "./EmailRequestReset.css"
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import Swal from 'sweetalert2';
import { useNavigate  } from 'react-router-dom';

function EmailRequestReset() {
    const { handleSubmit, register } = useForm()
    const { sendMailRes, verificarCorreoEnBD } = useAuth();
    const navigate = useNavigate();


    const onSubmit = handleSubmit(async(data) => {
        const existe = await verificarCorreoEnBD(data)
        if(existe){
            await sendMailRes(data)
            Swal.fire({
                title: '¡Correo enviado!',
                text: 'Revisa el correo ingresado y sigue las instrucciones.',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then( () => {
                navigate('/')
            })
        }else{
            Swal.fire({
                title: '¡Error!',
                text: 'El correo ingresado no existe',
                icon: 'error',
                confirmButtonText: 'OK',
            })
        }
    })

    return (
        <main className="boxReset">
            <form onSubmit={onSubmit} className="formReset">
                <h1 className='titleReset'>RECUPERA TU CONTRASEÑA</h1>
                <h2 className='subtitleReset'>Ingresa tu correo y te enviaremos un link para restablecer tu contraseña</h2>

                <div className='containerReset'>
                    <label htmlFor="emailReset" className='resetLabel'> EMAIL:</label>
                    <input type="email"            
                    {...register("email", { required: true })}
                    className="resetInput" 
                    placeholder="tucorreo@empresa.cl" 
                    />
                </div>

                <button type="submit" className="buttonLogin"> RECUPERAR CONTRASEÑA </button>
            </form>



        </main>

    )
}

export default EmailRequestReset
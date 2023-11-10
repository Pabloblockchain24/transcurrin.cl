import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";

import "./LoginPage.css"

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate("/intranet")
  }, [isAuthenticated])


  return (
    <div className="loginPage">


      <div className="bg-zinc-800 flex flex-col items-center justify-center max-w-md w-full p-10 shadow-md rounded-md">

        <h1 className="text-3xl	 font-bold mb-10 mt-5 text-white"> ACCESO CLIENTES </h1>

        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center w-full gap-3">
          <input type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">Password is required</p>}
          <button type="submit"
            className="px-4 py-2 my-4 bg-white text-zinc-800 font-bold rounded hover:bg-zinc-400 hover:text-white transition duration-300 ease-in-out"
          > INGRESAR </button>

          {
            signinErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
              </div>
            ))
          }
        </form>

        <p className="flex flex-col gap-1 items-center justify-center">
          ¿ No tienes una cuenta ?
          <Link to="/register" className="text-sky-500"> REGISTRATE AQUI </Link>
        </p>



      </div>

    </div>
  )
}

export default LoginPage
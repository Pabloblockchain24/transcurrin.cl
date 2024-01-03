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
    <main className="loginPage">
      <section className="boxLogin">
        <h1 className="titleLogin"> ACCESO CLIENTES </h1>
        <form onSubmit={onSubmit} className="formLogin">
          <input type="email"
            {...register("email", { required: true })}
            className="inputLogin"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input type="password"
            {...register("password", { required: true })}
            className="inputLogin"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">Password is required</p>}
          <button type="submit"
            className="buttonLogin"
          > INGRESAR </button>

          {
            signinErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
              </div>
            ))
          }
        </form>

        <article className="boxResetPassword">
          <div className="text-white"> ¿ Olvidaste tu contraseña ? </div>
          {/* <Link to="/register" className="text-sky-500"> Recuperar contraseña </Link> */}
          <Link to="/emailRequestReset" className="text-sky-500"> Recuperar contraseña </Link>

        </article>

      </section>
    </main>
  )
}

export default LoginPage
import { useForm } from "react-hook-form"
import { useIntranet } from "../context/IntranetContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

function ServiceFormPage() {
  const { register, handleSubmit, setValue } = useForm()
  const { createService, getService,updateService } = useIntranet()
  const navigate = useNavigate();
  const params = useParams()

useEffect( () => {
  async function loadService(){
    if (params.id){
      const service = await getService(params.id)
      console.log(service)
      setValue("ref", service.ref)
      setValue("container", service.container)
    }
  }
  loadService()
},[])


  const onSubmit = handleSubmit((data) => {
    if(params.id){
      updateService(params.id, data)
    }else{
      createService(data)
    }
    navigate("/intranet")
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text"
            placeholder="ref"
            {...register("ref")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="container"
            {...register("container")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          > </textarea>
          <button className=" bg-white text-zinc-700 px-4 py-2 my-2  rounded-md  shadow-sm">GUARDAR</button>
        </form>
      </div>
    </div>

  )
}

export default ServiceFormPage
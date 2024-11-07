import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function DashboardPage() {

  const initialValues = {
    projectName: "",
    clientName: "",
    description: ""
  }

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})

  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">My projects</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Handle your projects</p>
      
        <nav className="my-8">
          <Link
            className="bg-purple-600 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to='/projects/create'
          >New project</Link>
        </nav>

        <form
          className=" mt-10 bg-white shadow-md p-10 rounded-md"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <input 
            type="submit" 
            value="Create project"
            className="bg-fuchsia-700 hover:bg-fuchsia-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  )
}
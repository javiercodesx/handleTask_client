import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProjectForm from "@/components/projects/ProjectForm";
import { ProjectFormData } from "@/types/index";
import { createProject } from "@/components/api/ProjectApi";

export default function CreateProjectPage() {

  const initialValues : ProjectFormData = {
    projectName: "",
    clientName: "",
    description: ""
  }

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})

  const handleForm = (data : ProjectFormData) => {
    createProject(data)
  }

  return (
    <>
        <h1 className="text-5xl font-black">Create project</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Fill the form to create a project</p>
      
        <nav className="my-8">
          <Link
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to='/'
          >Back to projects</Link>
        </nav>

        <form
          className=" mt-10 bg-white shadow-md p-10 rounded-md"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm
            register={register}
            errors={errors}
          />

          <input 
            type="submit" 
            value="Create project"
            className="bg-fuchsia-700 hover:bg-fuchsia-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
    </>
  )
}

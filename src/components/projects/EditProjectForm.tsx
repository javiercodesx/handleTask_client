import { Link } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { ProjectFormData } from "@/types/index";
import { useForm } from "react-hook-form";

export default function EditProjectForm() {

    const initialValues : ProjectFormData = {
        projectName: "",
        clientName: "",
        description: ""
      }
      
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})

    const handleForm = () => {

    }

    return (
        <>
            <h1 className="text-4xl font-black">Edit project</h1>
          
            <nav className="my-8 flex items-center justify-between">
              <p className="text-xl font-light text-gray-500">Fill the form to edit the project</p>
    
              <Link
                className="bg-gray-950 text-gray-300 border border-gray-300 hover:text-white px-4 py-2 font-semibold cursor-pointer transition-colors"
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
                value="Save changes"
                className="
                bg-gray-950 text-gray-300 hover:text-white uppercase px-4 py-2 font-semibold cursor-pointer transition-colors
                w-full p-3"
              />
            </form>
        </>
      )
}

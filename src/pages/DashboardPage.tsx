import { Link } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getAllProjects } from "@/api/ProjectApi"

export default function DashboardPage() {
  
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  })

  if(isLoading) return <h2 className="text-red-500 text-2xl text-center">Loading...</h2>

  if(data) return (
    <>
      <h1 className="text-4xl font-black">My projects</h1>
      <p className="text-xl font-light text-gray-500 mt-5">Handle your projects</p>
    
      <nav className="my-8">
        <Link
          className="bg-gray-950 text-gray-300 border border-gray-300 hover:text-white px-4 py-2 font-semibold cursor-pointer transition-colors"
          to='/projects/create'
          >New project</Link>
      </nav>

      {data.length ? (
        <section className="space-y-5">
          {data.map( project => (
          <div key={project._id} className="">
            <p>{project.projectName}</p>
            <p>{project.clientName}</p>
            <p>{project.description}</p>
          </div>
        ))}
        </section>
      ) : (
        <>
            <p className="text-center py-20">No projects yet, {''}
              <Link
                to="/projects/create"
                className="text-blue-500 hover:text-blue-600 font-bold  cursor-pointer"
              >create a project</Link>
            </p>
        </>
      )}
    </>
  )
}
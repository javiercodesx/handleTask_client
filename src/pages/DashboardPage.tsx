import { Link } from "react-router-dom"

export default function DashboardPage() {

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black">My projects</h1>
        <p className="text-xl font-light text-gray-500 mt-5">Handle your projects</p>
      
        <nav className="my-8">
          <Link
            className="bg-gray-950 text-gray-300 border border-gray-300 hover:text-white px-4 py-2 font-semibold cursor-pointer transition-colors"
            to='/projects/create'
          >New project</Link>
        </nav>

      </div>
    </>
  )
}
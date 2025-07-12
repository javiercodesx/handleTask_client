import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectAPI"
import AddTaskModal from "@/components/tasks/AddTaskModal"
import TaskList from "@/components/tasks/TaskList"
import EditTaskData from "@/components/tasks/EditTaskData"
import TaskModalDetails from "@/components/tasks/TaskModalDetails"
import { useAuth } from "@/hooks/useAuth"
import { isManager } from "@/utils/policies"

export default function ProjectDetailsPage() {
  const { data: user, isLoading: authLoading } = useAuth()

  const navigate = useNavigate()
  const params = useParams()
  const projectId = params.projectId!

  const { data, isLoading, isError } = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })

  if (isLoading && authLoading) return <h2 className="text-red-500 text-2xl text-center">Loading...</h2>
  if (isError) return <Navigate to='/404' />

  if (data && user) return (
    <>
      <h1 className="text-4xl font-black">{data.projectName}</h1>
      <p className="text-xl font-light mt-5">{data.description}</p>

      {isManager(data.manager, user._id) && (
        <nav className="my-5 flex gap-3">
          <button
            type="button"
            className="bg-gray-950 hover:bg-gray-800 px-10 py-2 text-gray-100 font-bold cursor-pointer transition-colors"
            onClick={() => navigate('?newTask=true')}
          >
            Add Task
          </button>

          <Link
            to={"team"}
            className="flex items-center bg-gray-800 hover:bg-gray-700 px-10 py-2 text-gray-100 font-bold cursor-pointer transition-colors"
          >Collaborators</Link>
        </nav>
      )}

      <TaskList
        tasks={data.tasks}
      />
      <AddTaskModal />
      <EditTaskData />
      <TaskModalDetails />
    </>
  )
}

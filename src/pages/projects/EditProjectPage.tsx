import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import EditProjectForm from "@/components/projects/EditProjectForm"
import { getProjectById } from "@/api/ProjectAPI"

export default function EditProjectPage() {
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    if(isLoading) return <h2 className="text-red-500 text-2xl text-center">Loading...</h2>
    if(isError) return <Navigate to='/404'/>
    
    if(data) return <EditProjectForm data={data} projectId={projectId} />
}

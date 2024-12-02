import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectApi"

export default function EditProjectPage() {
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    console.log(data)

    return (
        <div>EditProjectPage</div>
    )
}

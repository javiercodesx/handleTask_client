import { useParams } from "react-router-dom"

export default function EditProjectPage() {
    const params = useParams()
    const projectId = params.projectId!

    console.log(projectId)

    return (
        <div>EditProjectPage</div>
    )
}

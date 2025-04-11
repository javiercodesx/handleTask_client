import { Link, useNavigate, useParams } from "react-router-dom"

export default function ProjectTeamPage() {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    return (
        <>
            <h1 className="text-2xl font-bold">Manage team</h1>
            <p className="text-lg font-light text-gray-500 mt-5">Manage the team for this project</p>

            <nav className="my-5 flex gap-3">
                <button
                    type="button"
                    className="bg-gray-950 hover:bg-gray-800 px-10 py-2 text-gray-100 font-bold cursor-pointer transition-colors"
                    onClick={() => navigate('?addMember=true')}
                >
                    Add collaborator
                </button>

                <Link
                    to={`/projects/${projectId}`}
                    className="bg-gray-800 hover:bg-gray-700 px-10 py-2 text-gray-100 font-bold cursor-pointer transition-colors"
                >Go back to the project</Link>
            </nav>
        </>

    )
}

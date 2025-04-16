import { addUserToProject } from "@/api/TeamAPI";
import { TeamMember } from "@/types/index";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

type SearchResultProps = {
    user: TeamMember,
    reset: () => void
}

export default function SearchResult({ user, reset }: SearchResultProps) {

    const params = useParams()
    const projectId = params.projectId!

    const { mutate } = useMutation({
        mutationFn: addUserToProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        },
    })

    const handleAddUserToProject = () => {
        const data = { projectId, id: user._id }
        mutate(data)
    }

    return (
        <>
            <p className="mt-10 mb-5 text-center font-bold">Result</p>
            <div className="flex justify-between items-center">
                <p>{user.name}</p>
                <button
                    type="submit"
                    className="text-neutral-950 font-bold py-3 px-10 cursor-pointer rounded hover:bg-neutral-200"
                    onClick={handleAddUserToProject}
                >
                    Add to the project
                </button>
            </div>
        </>
    )
}

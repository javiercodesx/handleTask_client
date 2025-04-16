import { TeamMember } from "@/types/index"

type SearchResultProps = {
    user: TeamMember
}

export default function SearchResult({ user }: SearchResultProps) {
    return (
        <>
            <p className="mt-10 mb-5 text-center font-bold">Result</p>
            <div className="flex justify-between items-center">
                <p>{user.name}</p>
                <button
                    type="submit"
                    className="text-neutral-950 font-bold py-3 px-10 cursor-pointer rounded hover:bg-neutral-200"
                >
                    Add to the project
                </button>
            </div>
        </>
    )
}

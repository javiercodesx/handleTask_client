import AddMemberModal from "@/components/team/AddMemberModal"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectTeam } from "@/api/TeamAPI"
import { Fragment } from "react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"

export default function ProjectTeamPage() {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ["projectTeam", projectId],
        queryFn: () => getProjectTeam(projectId),
        retry: false
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <Navigate to={"/404"} />

    if (data) return (
        <>
            <h1 className="text-3xl font-bold">Manage team</h1>
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

            <h2 className="text-2xl font-bold my-10">Current members</h2>
            {data.length ? (
                <ul role="list" className="divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg">
                    {data?.map((member) => (
                        <li key={member._id} className="flex justify-between gap-x-6 px-5 py-10">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto space-y-2">
                                    <p className="text-2xl font-black text-gray-600">
                                        {member.name}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {member.email}
                                    </p>
                                </div>
                            </div>
                            <div className="flex shrink-0 items-center gap-x-6">
                                <Menu as="div" className="relative flex-none">
                                    <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                        <span className="sr-only">options</span>
                                        <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
                                    </MenuButton>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            <MenuItem>
                                                <button
                                                    type='button'
                                                    className='block px-3 py-1 text-sm leading-6 text-red-500'
                                                >
                                                    Remove user
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-center py-20'>No hay miembros en este equipo</p>
            )}

            <AddMemberModal />
        </>

    )
}

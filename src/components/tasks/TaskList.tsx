import { Task } from "@/types/index"
import TaskCard from "./TaskCard"

type TaskListProps = {
    tasks: Task[]
}

type GroupedTasks = {
    [key: string]: Task[]
}

const initialStatusGroups: GroupedTasks = {
    pending: [],
    onHold: [],
    inProgress: [],
    underReview: [],
    completed: []
}

export const statusNames: { [key: string]: string } = {
    pending: 'Pending',
    onHold: 'On hold',
    inProgress: 'In progress',
    underReview: 'Under review',
    completed: 'Completed'
}

const statusStyles: { [key: string]: string } = {
    pending: 'border-t-slate-500',
    onHold: 'border-t-red-500',
    inProgress: 'border-t-blue-500',
    underReview: 'border-t-amber-500',
    completed: 'border-t-emerald-500'
}

export default function TaskList({ tasks }: TaskListProps) {

    const groupedTasks : GroupedTasks = tasks.reduce((acc, task) => {
        let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
        currentGroup = [...currentGroup, task]
        return { ...acc, [task.status]: currentGroup };
    }, initialStatusGroups);

    return (
        <>
            <h2 className="text-3xl font-bold my-10">Tasks</h2>

            <div className="grid gap-5 pb-10 md:pb-32 2xl:overflow-auto
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

                {Object.entries(groupedTasks).map(([status, tasks]) => (
                    <div key={status} className='min-w-fit'>

                        <h3 className={`capitalize border border-x-slate-300 bg-white p-3 font-bold border-t-8 ${statusStyles[status]}`}
                        >{statusNames[status]}</h3>

                        <ul className='mt-5 space-y-5'>
                            {tasks.length === 0 ? (
                                <li className="text-gray-500 text-center pt-3">There are no tasks</li>
                            ) : (
                                tasks.map(task => <TaskCard key={task._id} task={task} />)
                            )}
                        </ul>

                    </div>
                ))}
            </div>
        </>
    )
}

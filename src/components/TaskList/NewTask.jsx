import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data, ownerEmail}) => {

    const { employees, updateEmployees } = useContext(AuthContext)

    const handleAccept = () => {
        const currentEmployees = employees || []

        const updatedEmployees = currentEmployees.map((emp) => {
            if (emp.email === ownerEmail) {
                let { active, newTask } = emp.taskCount

                const updatedTasks = emp.tasks.map((t) => {
                    if (t.taskNo === data.taskNo) {
                        if (t.newTask) {
                            newTask = Math.max(0, newTask - 1)
                            active = active + 1
                        }
                        return {
                            ...t,
                            active: true,
                            newTask: false,
                        }
                    }
                    return t
                })

                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskCount: {
                        ...emp.taskCount,
                        active,
                        newTask,
                    },
                }
            }
            return emp
        })

        if (updateEmployees) {
            updateEmployees(updatedEmployees)
        }
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#0b1120] border border-emerald-500/60 shadow-md snap-start'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='bg-emerald-600 text-xs px-3 py-1 rounded-full text-white'>New</h3>
                    <span className='text-[11px] text-emerald-300 border border-emerald-500/60 px-2 py-0.5 rounded-full'>{data.category}</span>
                </div>
                <h4 className='text-xs text-slate-300'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-lg font-semibold text-white'>{data.title}</h2>
            <p className='text-xs mt-2 text-slate-200 whitespace-pre-line'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button
                    onClick={handleAccept}
                    className='w-full bg-emerald-600 hover:bg-emerald-500 text-xs text-white py-2 rounded-md'
                >
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask
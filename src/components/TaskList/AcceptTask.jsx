import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data, ownerEmail}) => {

    const { employees, updateEmployees } = useContext(AuthContext)

    const updateStatus = (status) => {
        const currentEmployees = employees || []

        const updatedEmployees = currentEmployees.map((emp) => {
            if (emp.email === ownerEmail) {
                let { active, completed, failed } = emp.taskCount

                const updatedTasks = emp.tasks.map((t) => {
                    if (t.taskNo === data.taskNo) {
                        let next = { ...t }

                        if (t.active) {
                            active = Math.max(0, active - 1)
                        }

                        if (status === 'completed') {
                            if (!t.completed) {
                                completed = completed + 1
                            }
                            next = {
                                ...next,
                                active: false,
                                newTask: false,
                                completed: true,
                                failed: false,
                            }
                        }

                        if (status === 'failed') {
                            if (!t.failed) {
                                failed = failed + 1
                            }
                            next = {
                                ...next,
                                active: false,
                                newTask: false,
                                completed: false,
                                failed: true,
                            }
                        }

                        return next
                    }
                    return t
                })

                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskCount: {
                        ...emp.taskCount,
                        active,
                        completed,
                        failed,
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
        <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#0b1120] border border-yellow-400/60 shadow-md snap-start'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='bg-yellow-500 text-xs px-3 py-1 rounded-full text-black'>Active</h3>
                    <span className='text-[11px] text-yellow-200 border border-yellow-400/60 px-2 py-0.5 rounded-full'>{data.category}</span>
                </div>
                <h4 className='text-xs text-slate-300'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-lg font-semibold text-white'>{data.title}</h2>
            <p className='text-xs mt-2 text-slate-200 whitespace-pre-line'>
                {data.description}
            </p>
            <div className='flex justify-between mt-4 gap-2'>
                <button
                    onClick={() => updateStatus('completed')}
                    className='flex-1 bg-green-500 hover:bg-green-600 py-1 px-2 text-sm text-white rounded-md'
                >
                    Mark as Completed
                </button>
                <button
                    onClick={() => updateStatus('failed')}
                    className='flex-1 bg-red-500 hover:bg-red-600 py-1 px-2 text-sm text-white rounded-md'
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask
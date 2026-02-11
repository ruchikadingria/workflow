import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const { employees, updateEmployees, showNotification } = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
            alert('Please fill all fields before creating a task.')
            return
        }

        const currentEmployees = employees || []

        let isAssigned = false
        let assignedEmployeeName = ''

        const updatedEmployees = currentEmployees.map((emp) => {
            if (emp.firstName.toLowerCase() === asignTo.trim().toLowerCase()) {
                isAssigned = true
                assignedEmployeeName = emp.firstName
                const currentTasks = Array.isArray(emp.tasks) ? emp.tasks : []
                const taskNo = currentTasks.length + 1

                const task = {
                    taskNo,
                    title: taskTitle,
                    description: taskDescription,
                    date: taskDate,
                    category,
                    active: true,
                    newTask: true,
                    failed: false,
                    completed: false,
                }

                const updatedTaskCount = emp.taskCount || {
                    active: 0,
                    newTask: 0,
                    completed: 0,
                    failed: 0,
                }

                return {
                    ...emp,
                    tasks: [...currentTasks, task],
                    taskCount: {
                        ...updatedTaskCount,
                        active: updatedTaskCount.active + 1,
                        newTask: updatedTaskCount.newTask + 1,
                    },
                }
            }
            return emp
        })

        if (!isAssigned) {
            alert('No employee found with that name. Please check the name and try again.')
            return
        }

        if (updateEmployees) {
            updateEmployees(updatedEmployees)
        }

        if (showNotification && assignedEmployeeName) {
            showNotification({
                message: `Task "${taskTitle}" assigned to ${assignedEmployeeName}.`,
                type: 'success'
            })
        }

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
    }

    return (
        <div className='p-5 mt-7 rounded-xl bg-slate-900/70 border border-slate-700'>
            <form onSubmit={(e) => { submitHandler(e) }} className='flex items-start justify-between flex-wrap w-full'>
                <div className='w-full md:w-1/2 pr-4'>
                    <div>
                        <h3 className='text-xs text-gray-300 mb-1 uppercase tracking-wide'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }} 
                        className="text-sm py-2 px-3 w-full rounded-md outline-none bg-slate-900 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4" type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-xs text-gray-300 mb-1 uppercase tracking-wide'>Date</h3>
                        <input value={taskDate} onChange={(e) => {
                            setTaskDate(e.target.value)
                        }} 
                        className="text-sm py-2 px-3 w-full rounded-md outline-none bg-slate-900 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4" type="date" />
                    </div>
                    <div>
                        <h3 className='text-xs text-gray-300 mb-1 uppercase tracking-wide'>Assign to</h3>
                        <input value={asignTo} onChange={(e) => {
                            setAsignTo(e.target.value)
                        }} 
                        className="text-sm py-2 px-3 w-full rounded-md outline-none bg-slate-900 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4" type="text" placeholder='Employee first name (e.g. Ruchika)' />
                    </div>
                    <div>
                        <h3 className='text-xs text-gray-300 mb-1 uppercase tracking-wide'>Category</h3>
                        <input value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} 
                        className="text-sm py-2 px-3 w-full rounded-md outline-none bg-slate-900 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 mb-4" type="text" placeholder='Design, Dev, QA, etc.' />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex flex-col items-start'>
                    <h3 className='text-xs text-gray-300 mb-1 uppercase tracking-wide'>Description</h3>
                    <textarea value={taskDescription} onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }} className='w-full h-44 text-sm py-2 px-4 rounded-md outline-none bg-slate-900 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100' name="" id="" cols="30" rows="10" placeholder='Describe the task, expectations, and any important notes.'></textarea>
                    <button className='bg-emerald-600 py-3 hover:bg-emerald-500 px-5 rounded-md text-sm mt-4 w-full font-medium shadow-md shadow-emerald-900/40'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
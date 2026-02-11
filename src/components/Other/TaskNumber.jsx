import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='grid mt-10 gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        <div className='rounded-xl py-6 px-9 bg-red-600 text-white shadow-md'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-sm mt-1 font-medium uppercase tracking-wide'>Failed Tasks</h3>
        </div>
        <div className='rounded-xl py-6 px-9 bg-emerald-600 text-white shadow-md'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-sm mt-1 font-medium uppercase tracking-wide'>New Tasks</h3>
        </div>
        <div className='rounded-xl py-6 px-9 bg-blue-600 text-white shadow-md'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-sm mt-1 font-medium uppercase tracking-wide'>Completed Tasks</h3>
        </div>
        <div className='rounded-xl py-6 px-9 bg-amber-400 text-slate-900 shadow-md'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-sm mt-1 font-medium uppercase tracking-wide'>Active Tasks</h3>
        </div>
    </div>
  )
}

export default TaskNumber   
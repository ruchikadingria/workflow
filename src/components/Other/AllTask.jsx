import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const { employees } = useContext(AuthContext)

  return (
    <div className="p-5 mt-7 rounded-xl bg-slate-900/70 border border-slate-700">
      <div className='mb-3 flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-white'>Team Overview</h2>
        <p className='text-xs text-slate-400'>New / Active / Completed / Failed tasks per employee</p>
      </div>
      <div className='bg-slate-800/80 mb-2 py-2 px-4 flex justify-between rounded-lg text-xs font-semibold text-slate-200'>
        <h2 className='w-1/5'>Employee</h2>
        <h2 className='w-1/5 text-emerald-300'>New</h2>
        <h2 className='w-1/5 text-yellow-300'>Active</h2>
        <h2 className='w-1/5 text-emerald-200'>Completed</h2>
        <h2 className='w-1/5 text-red-300'>Failed</h2>
      </div>
      <div className='space-y-2'>
        {employees && employees.map(function(e, index) {
          return <div key={index} className='border border-slate-700 bg-slate-900/60 mb-1 py-2 px-4 flex justify-between rounded-lg text-sm'>
            <h2 className='w-1/5 font-medium text-slate-100'>{e.firstName}</h2>
            <h2 className='w-1/5 font-semibold text-emerald-300'>{e.taskCount.newTask}</h2>
            <h2 className='w-1/5 font-semibold text-yellow-300'>{e.taskCount.active}</h2>
            <h2 className='w-1/5 font-semibold text-emerald-200'>{e.taskCount.completed}</h2>
            <h2 className='w-1/5 font-semibold text-red-300'>{e.taskCount.failed}</h2>
          </div>
        })}
      </div>
    </div>
  )
}

export default AllTask

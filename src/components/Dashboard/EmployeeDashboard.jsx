import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import TaskPie from '../Other/TaskPie'
import Header from '../Other/Header'
import TaskNumber from '../Other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  const [filter, setFilter] = useState('all')

  const { employees } = useContext(AuthContext)
  const employee = employees?.find(e => e.email === props.data?.email) || props.data

  return (
  <div className='min-h-screen w-full bg-slate-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 py-8'>
        <Header changeUser={props.changeUser} data={employee}/>
        <TaskNumber data={employee}/>
        <TaskPie taskCount={employee.taskCount}/>

        <div className='mt-8 flex flex-wrap gap-3'>
          {[
            { id: 'all', label: 'All' },
            { id: 'new', label: 'New' },
            { id: 'active', label: 'Active' },
            { id: 'completed', label: 'Completed' },
            { id: 'failed', label: 'Failed' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-1.5 rounded-full text-sm border ${
                filter === btn.id
                  ? 'bg-emerald-600 border-emerald-500 text-white'
                  : 'bg-transparent border-gray-600 text-gray-300 hover:border-emerald-500'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {employee && (
          <TaskList data={employee} filter={filter} direction="horizontal" />
        )}
        </div>
    </div>
  )
}

export default EmployeeDashboard
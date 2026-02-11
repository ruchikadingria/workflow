import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full bg-slate-900 text-white'>
            <div className='max-w-6xl mx-auto px-6 py-8'>
                <Header changeUser={props.changeUser} role="admin" />
                <CreateTask/>
                <AllTask/>
            </div>
        </div>
    )
}

export default AdminDashboard   
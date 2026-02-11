import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, filter = 'all', direction = 'vertical' }) => {

    const tasksToShow = data.tasks.filter((t) => {
        if (filter === 'new') return t.newTask
        if (filter === 'active') return t.active
        if (filter === 'completed') return t.completed
        if (filter === 'failed') return t.failed
        return true
    })

    const isHorizontal = direction === 'horizontal'

    const containerClasses = `py-5 mt-10 flex gap-4 items-stretch justify-start w-full ${
        isHorizontal
            ? 'flex-row overflow-x-auto'
            : 'flex-col max-h-[320px] overflow-y-auto'
    }`

    return (
        <div id='tasklist' className={containerClasses}>
            {tasksToShow.map((e, index) => {
                if(e.newTask)
                    return <NewTask key={index} data={e} ownerEmail={data.email}/>
                if(e.active)
                    return <AcceptTask key={index} data={e} ownerEmail={data.email}/>
                if(e.completed)
                    return <CompleteTask key={index} data={e}/>
                if(e.failed)
                    return <FailedTask key={index} data={e}/>
                return null
            })}
        </div>
    )
}

export default TaskList
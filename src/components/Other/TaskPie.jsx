import React from 'react'

const TaskPie = ({ taskCount }) => {
  const active = taskCount?.active || 0
  const completed = taskCount?.completed || 0
  const failed = taskCount?.failed || 0

  const total = active + completed + failed

  const activePct = total ? (active / total) * 100 : 0
  const completedPct = total ? (completed / total) * 100 : 0
  const failedPct = total ? (failed / total) * 100 : 0

  const gradient = total
    ? `conic-gradient(#4ade80 0 ${completedPct}%, #facc15 ${completedPct}% ${completedPct + activePct}%, #f97373 ${completedPct + activePct}% 100%)`
    : 'conic-gradient(#1e293b 0 100%)'

  return (
    <div className='mt-10 flex flex-col md:flex-row gap-8 items-center'>
      <div className='flex-1 bg-slate-900/70 border border-slate-700 rounded-xl p-5 flex items-center justify-center'>
        <div
          className='relative h-40 w-40 rounded-full flex items-center justify-center'
          style={{ backgroundImage: gradient }}
        >
          <div className='h-30 w-30 rounded-full bg-slate-950 flex flex-col items-center justify-center'>
            <span className='text-[11px] text-slate-400'>Total</span>
            <span className='text-lg font-semibold text-white'>{total}</span>
          </div>
        </div>
      </div>

      <div className='flex-1 bg-slate-900/70 border border-slate-700 rounded-xl p-5'>
        <h3 className='text-sm font-semibold text-slate-100 mb-4 uppercase tracking-wide'>
          Task Status Overview
        </h3>
        <div className='space-y-3 text-sm'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-emerald-400'></span>
              <span className='text-slate-200'>Completed</span>
            </div>
            <span className='text-slate-100 font-medium'>
              {completed} {total ? `(${Math.round(completedPct)}%)` : ''}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-yellow-300'></span>
              <span className='text-slate-200'>Active</span>
            </div>
            <span className='text-slate-100 font-medium'>
              {active} {total ? `(${Math.round(activePct)}%)` : ''}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-red-400'></span>
              <span className='text-slate-200'>Failed</span>
            </div>
            <span className='text-slate-100 font-medium'>
              {failed} {total ? `(${Math.round(failedPct)}%)` : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskPie

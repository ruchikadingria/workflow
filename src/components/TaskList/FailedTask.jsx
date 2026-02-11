import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#0f172a] border border-red-500/60 snap-start shadow-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='bg-red-600 text-xs px-3 py-1 rounded-full text-white'>Failed</h3>
                    <span className='text-[11px] text-red-300 border border-red-500/60 px-2 py-0.5 rounded-full'>{data.category}</span>
                </div>
                <h4 className='text-xs text-slate-300'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-lg font-semibold text-white'>{data.title}</h2>
            <p className='text-xs mt-2 text-slate-200 whitespace-pre-line'>
                {data.description}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-red-700 text-xs text-white py-1.5 rounded-md cursor-default'>
                    Failed
                </button>
            </div>
        </div>
    )
}

export default FailedTask
import React, { useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const Notification = () => {
  const { notification, clearNotification } = useContext(AuthContext)

  useEffect(() => {
    if (!notification) return
    const timer = setTimeout(() => {
      clearNotification && clearNotification()
    }, 3000)
    return () => clearTimeout(timer)
  }, [notification, clearNotification])

  if (!notification) return null

  const baseClasses =
    'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg shadow-xl text-sm flex items-center gap-3 border transition-transform animate-slide-up'

  const typeClasses =
    notification.type === 'success'
      ? 'bg-emerald-900/90 border-emerald-500 text-emerald-100'
      : notification.type === 'error'
      ? 'bg-red-900/90 border-red-500 text-red-100'
      : 'bg-slate-900/90 border-slate-600 text-slate-100'

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      <span className='text-xs'>{notification.message}</span>
      <button
        onClick={clearNotification}
        className='text-xs text-slate-300 hover:text-white ml-2'
      >
        ✕
      </button>
    </div>
  )
}

export default Notification

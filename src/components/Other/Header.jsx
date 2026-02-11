import React, { useEffect, useState } from 'react'

const Header = ({ changeUser, data, role }) => {

  const [userName, setUserName] = useState('User')
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    // Employee: use passed data
    if (data && data.firstName) {
      setUserName(data.firstName)
      setUserRole('Employee')
      return
    }

    // Admin: read from localStorage
    if (role === 'admin') {
      const adminData = JSON.parse(localStorage.getItem('admin'))
      if (adminData && adminData[0]?.firstName) {
        setUserName(adminData[0].firstName)
      } else {
        setUserName('Admin')
      }
      setUserRole('Admin')
      return
    }

    // Fallback
    setUserName('User')
    setUserRole('')
  }, [data, role])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className='flex items-center justify-between mb-6'>
      <div className='flex items-center gap-4'>
        <div className='h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-semibold'>
          {userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className='text-sm text-gray-400'>Welcome back,</p>
          <h1 className='text-2xl font-semibold'>
            {userName}
            <span className='ml-2 text-xs rounded-full px-2 py-0.5 bg-emerald-900/60 text-emerald-300 border border-emerald-500/40'>
              {userRole || 'User'}
            </span>
          </h1>
        </div>
      </div>
      <button
        onClick={logOutUser}
        className='bg-red-600 hover:bg-red-700 transition-colors text-sm font-medium text-white px-5 py-2 rounded-full shadow-md'
      >
        Log out
      </button>
    </div>
  )
}

export default Header
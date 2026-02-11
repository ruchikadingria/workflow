import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import Notification from './components/Other/Notification'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const { showNotification } = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data || null)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      showNotification && showNotification({ message: 'Logged in as Admin.', type: 'success' })
    } else {
      const { employees } = getLocalStorage()

      const employee = employees?.find(
        e => e.email === email && e.password === password
      )

      if (employee) {
        setUser('employee')
        // keep full employee for backwards compatibility but we will
        // always re-read fresh data from localStorage using email
        setLoggedInUserData({ email: employee.email })
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: { email: employee.email } })
        )
        if (showNotification) {
          const newCount = employee.taskCount?.newTask ?? employee.tasks?.filter(t => t.newTask).length ?? 0
          if (newCount > 0) {
            showNotification({
              message: newCount === 1 ? 'You have 1 new task assigned.' : `You have ${newCount} new tasks assigned.`,
              type: 'success'
            })
          } else {
            showNotification({
              message: 'Welcome back!',
              type: 'info'
            })
          }
        }
      } else {
        alert("Invalid credentials")
      }
    }
  }


  let employeeData = null
  if (user === 'employee' && loggedInUserData?.email) {
    const { employees } = getLocalStorage()
    if (employees) {
      employeeData = employees.find(e => e.email === loggedInUserData.email) || null
    }
  }

  return (
    <>
      <Notification />
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin'
        ? <AdminDashboard changeUser={setUser} />
        : (user == 'employee' && employeeData
          ? <EmployeeDashboard changeUser={setUser} data={employeeData} />
          : null)}
    </>
  )
}

export default App
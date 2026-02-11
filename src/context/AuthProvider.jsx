import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [employees, setEmployees] = useState([])
    const [admin, setAdmin] = useState([])
    const [notification, setNotification] = useState(null)

    useEffect(() => {
        // localStorage.clear()
        setLocalStorage()
        const { employees: initialEmployees, admin: initialAdmin } = getLocalStorage()
        setEmployees(initialEmployees || [])
        setAdmin(initialAdmin || [])
    }, [])

    const updateEmployees = (updatedEmployees) => {
        setEmployees(updatedEmployees)
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    const showNotification = ({ message, type = 'info' }) => {
        setNotification({ message, type, id: Date.now() })
    }

    const clearNotification = () => {
        setNotification(null)
    }

    const value = {
        employees,
        admin,
        updateEmployees,
        notification,
        showNotification,
        clearNotification,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setPassword('')
    }

    return (
    <div className='min-h-screen w-screen bg-slate-900 flex items-center justify-center px-4'>
            <div className='max-w-md w-full bg-slate-900/70 border border-slate-700 rounded-2xl shadow-xl p-8'>
                <div className='mb-8 text-center'>
                    <div className='inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-600/90 text-2xl font-bold'>
                        WF
                    </div>
                    <h1 className='mt-4 text-2xl font-semibold text-white'>WorkFlow</h1>
                    <p className='mt-1 text-sm text-slate-300'>
                        Sign in as <span className='font-medium text-emerald-300'>Admin</span> or <span className='font-medium text-emerald-300'>Employee</span>.
                    </p>
                </div>

                <form
                    onSubmit={submitHandler}
                    className='space-y-5'
                >
                    <div className='space-y-2'>
                        <label className='block text-sm font-medium text-slate-200'>
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                            className="w-full text-white outline-none bg-slate-900/80 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 py-2.5 px-4 text-sm rounded-xl placeholder:text-slate-500 transition"
                            type="email"
                            placeholder='admin@me.com or employee email'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='block text-sm font-medium text-slate-200'>
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                            className="w-full text-white outline-none bg-slate-900/80 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 py-2.5 px-4 text-sm rounded-xl placeholder:text-slate-500 transition"
                            type="password"
                            placeholder='Enter your password'
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 text-white bg-emerald-600 hover:bg-emerald-500 py-2.5 px-5 text-sm font-medium rounded-xl shadow-lg shadow-emerald-900/40 transition"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
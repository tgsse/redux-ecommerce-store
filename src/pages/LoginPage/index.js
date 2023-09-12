import React, { useEffect } from 'react'

import Login from '../../components/Login/Login'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    useEffect(() => {
        const alreadyLoggedIn = localStorage.getItem('isLoggedIn') === '1'
        if (alreadyLoggedIn) {
            navigate('/products')
        }
    }, [])

    const onLogin = (email, password) => {
        console.log({ email, password })
        localStorage.setItem('isLoggedIn', '1')
        navigate('/products')
    }
    const onLogout = () => {
        localStorage.setItem('isLoggedIn', '0')
    }

    const navigate = useNavigate()
    const navigateProgrammatically = () => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    navigateProgrammatically()
    return (
        <Login
            onLogin={onLogin}
            onLogout={onLogout}
        />
    )
}

export default LoginPage

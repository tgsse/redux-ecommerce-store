import React, { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import LoginPage from './pages/LoginPage'
// import CreateProductPage from './pages/CreateProduct'
import ProductsPage from './pages/ProductsPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
    { path: '/', element: <ProductsPage /> },
])

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const alreadyLoggedIn = localStorage.getItem('isLoggedIn') === '1'
        if (alreadyLoggedIn) {
            setIsLoggedIn(true)
        }
    }, [])

    const onLogin = (email, password) => {
        console.log({ email, password })
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    const onLogout = () => {
        localStorage.setItem('isLoggedIn', '0')
        setIsLoggedIn(false)
    }
    return (
        // <Layout>
        //     {isLoggedIn ? (
        //         // <CreateProductPage/>
        //         <ProductsPage/>
        //     ) : (
        //         <LoginPage
        //             isLoggedIn={isLoggedIn}
        //             onLogin={onLogin}
        //             onLogout={onLogout}
        //         />
        //     )}
        // </Layout>
        <RouterProvider
            router={router} />
    )
}

export default App

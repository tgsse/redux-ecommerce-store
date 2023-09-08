import React, {useEffect, useState} from 'react'
import Layout from './components/Layout/Layout'
import LoginScreen from './pages/Login'
// import CreateProductPage from './pages/CreateProduct'
import ProductsScreen from './pages/Products'

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const alreadyLoggedIn = localStorage.getItem('isLoggedIn') === '1'
        if (alreadyLoggedIn) {
            setIsLoggedIn(true)
        }
    }, [])

    const onLogin = (email, password) => {
        console.log({email, password})
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    const onLogout = () => {
        localStorage.setItem('isLoggedIn', '0')
        setIsLoggedIn(false)
    }
    return (
        <Layout>
            {isLoggedIn ? (
                // <CreateProductPage/>
                <ProductsScreen/>
            ) : (
                <LoginScreen
                    isLoggedIn={isLoggedIn}
                    onLogin={onLogin}
                    onLogout={onLogout}
                />
            )}
        </Layout>
    )
}

export default App

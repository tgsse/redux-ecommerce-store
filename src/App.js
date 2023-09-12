import Layout from './components/Layout/Layout'
import ProductsPage from './pages/ProductsPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './pages/CartPage'
import CreateProductPage from './pages/CreateProductPage'
import CheckoutPage from './pages/Checkout'
import ErrorPage from './pages/ErrorPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import LoginPage from './pages/LoginPage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <LoginPage /> },
            { path: '/products', element: <ProductsPage /> },
            { path: '/products/:id', element: <ProductDetailsPage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/checkout', element: <CheckoutPage /> },
            { path: '/createProduct', element: <CreateProductPage /> },
        ]
    },
])

function App() {
    return (
        <RouterProvider
            router={router} />
    )
    /*

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

    * */
}

export default App

import React, {useEffect, useState} from 'react'
import Cart from '../../components/Cart/Cart'
import {useSelector} from 'react-redux'
import Products from '../../components/Shop/Products'

export default function ProductsScreen() {

    const isCartVisible = useSelector(state => state.cart.isVisible)
    // const products = useSelector(state => state.products.items)

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(fetchProducts, [])

    function fetchProducts() {
        fetch('http://localhost:3001/api/products')
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    throw Error(`Error! Your request returned ${response.status}: ${response.statusText}`)
                }
                return response.json()
            })
            .then(result => {
                console.log('result', result)
                setProducts(result.products)
            })
            .catch(e => {
                console.log(e)
                setError(e.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    let Content = () => {
        if (isLoading) {
            return <p>Fetching products...</p>
        } else if (error) {
            return <p>{error}</p>
        } else  if (!products.length) {
            return <p>There are no products at the moment. <a href="#">Create one now ↗</a></p>
        } else {
            return <Products products={products}/>
        }
    }


    return (
        <>
            {isCartVisible && (
                <Cart/>
            )}

            <Content />

            {/*{isLoading && <p>Fetching products...</p>}*/}
            {/*{!isLoading && products.length === 0 && !error && (*/}
            {/*    <p>There are no products at the moment. <a href="#">Create one now ↗</a></p>*/}
            {/*)}*/}
            {/*{!isLoading && products.length > 0 && (*/}
            {/*    <Products products={products}/>*/}
            {/*)}*/}
            {/*{!isLoading && error && (*/}
            {/*    <p>{error}</p>*/}
            {/*)}*/}
        </>
    )
}

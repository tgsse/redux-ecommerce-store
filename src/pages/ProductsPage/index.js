import React, { useEffect, useState } from 'react'
import Products from '../../components/Shop/Products'

export default function ProductsPage() {
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
                // TODO: failed to fetch (eg. no backend) causes the component to call fetchProducts again and again
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
        } else if (!products.length) {
            return <p>There are no products at the moment. <a href="#">Create one now ↗</a></p>
        } else {
            return <Products products={products} />
        }
    }


    return (
        <>
            <Content />
        </>
    )
}

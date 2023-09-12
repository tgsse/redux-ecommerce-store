import ProductItem from '../../components/Shop/ProductItem'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function ProductDetailsPage() {
    const params = useParams()


    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(fetchProduct, [])

    // TODO: implement custom http handling to avoid duplication

    function fetchProduct() {
        fetch(`http://localhost:3001/api/products/${params.id}`)
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    throw Error(`Error! Your request returned ${response.status}: ${response.statusText}`)
                }
                return response.json()
            })
            .then(result => {
                console.log('result', result)
                setProduct(result.product)
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
            return <p>Fetching product details...</p>
        } else if (error) {
            return <p>{error}</p>
        } else if (product === null) {
            return <p>No such product. <a href="#">Create one now ↗</a></p>
        } else {
            return <ProductItem product={product} />
        }
    }


    return (
        <>
            <h1>Product Details Page</h1>
            <Content />
        </>
    )
}

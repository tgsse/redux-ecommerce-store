import React from 'react'
import CreateProductForm from '../../components/Shop/CreateProductForm/CreateProductForm'

export default function CreateProductPage() {

    function onCreateProduct(productData) {
        console.log({productData})
        const myHeaders = new Headers()
        myHeaders.append('Authorization', 'Bearer ')

        const formData = new FormData()
        formData.append('title', productData.title)
        formData.append('description', productData.description)
        formData.append('price', productData.price)
        formData.append('image', productData.image)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        }

        fetch('http://localhost:3001/api/products', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }

    return (
        <CreateProductForm onCreateProduct={onCreateProduct}/>
    )
}

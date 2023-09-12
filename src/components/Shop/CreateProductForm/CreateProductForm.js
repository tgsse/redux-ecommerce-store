import React, { useRef } from 'react'

import classes from './CreateProductForm.module.css'
import Card from '../../UI/Card/Card'
import { func } from 'prop-types'

CreateProductForm.propTypes = {
    onCreateProduct: func
}

function CreateProductForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const priceInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.files[0]
        const enteredPrice = priceInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        console.log('img', { imageInputRef })
        const productData = {
            title: enteredTitle,
            image: enteredImage,
            price: enteredPrice,
            description: enteredDescription,
        }

        props.onCreateProduct(productData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Product Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Product Image</label>
                    <input type="file" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="price">Price</label>
                    <input type="number" step={'0.01'} min={0} required id="price" ref={priceInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        required
                        rows="5"
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Product</button>
                </div>
            </form>
        </Card>
    )
}

export default CreateProductForm

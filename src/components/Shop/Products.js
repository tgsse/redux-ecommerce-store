import React from 'react'
import ProductItem from './ProductItem'
import classes from './Products.module.css'
import propTypes from '../../util/propTypes'

Products.propTypes = {
    products: [propTypes.product]
}

function Products(props) {
    return (
        <section className={classes.products}>
            <h2>Best Sellers</h2>
            <ul>
                {props.products.map(p => (
                    <ProductItem
                        key={p.title}
                        product={p}
                    />
                ))}

            </ul>
        </section>
    )
}

export default Products

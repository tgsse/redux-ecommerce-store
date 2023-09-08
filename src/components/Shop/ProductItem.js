import React from 'react'
import Card from '../UI/Card/Card'
import classes from './ProductItem.module.css'
import {priceFormatter} from '../../util/util'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../store/slices/cartSlice'
import propTypes from '../../util/propTypes'

ProductItem.propTypes = {
    product: propTypes.product,
}

function ProductItem(props) {
    const dispatch = useDispatch()
    const {title, price, description} = props.product

    const onAddToCart = () => {
        dispatch(cartActions.addToCart(props.product))
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${priceFormatter.format(price)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={onAddToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem

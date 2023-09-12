import React from 'react'
import classes from './CartButton.module.css'
import { useSelector } from 'react-redux'
import { priceFormatter } from '../../util/util'

function CartButton() {
    const cartTotal = useSelector(state => state.cart.items.reduce((acc, current) => acc + current.priceTotal, 0))

    const onCartButtonClick = () => {}

    return (
        <button className={classes.button} onClick={onCartButtonClick}>
            <span>My Cart</span>
            <span className={classes.badge}>${priceFormatter.format(cartTotal)}</span>
        </button>
    )
}

export default CartButton

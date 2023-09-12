import React from 'react'
import Card from '../UI/Card/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function Cart() {

    const cartItems = useSelector(state => state.cart.items)

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.length > 0 ? cartItems.map(p => (
                    <CartItem key={p.title} product={p}/>
                )) : (
                    <p>Your cart is empty. That means shopping time, yaay!</p>
                )}
            </ul>
        </Card>
    )
}

export default Cart

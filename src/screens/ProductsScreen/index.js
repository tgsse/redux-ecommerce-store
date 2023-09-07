import React from 'react'
import Cart from '../../components/Cart/Cart'
import {useSelector} from 'react-redux'
import Products from '../../components/Shop/Products'

export default function ProductsScreen() {

    const isCartVisible = useSelector(state => state.cart.isVisible)
    const products = useSelector(state => state.products.items)

    return (
        <>
            {isCartVisible && (
                <Cart/>
            )}
            <Products products={products}/>
        </>
    )
}

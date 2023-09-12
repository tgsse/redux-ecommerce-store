import React from 'react'
import CartButton from '../Cart/CartButton'
import classes from './MainHeader.module.css'

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1>Ecommerce Store</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader

import React from 'react'
import CartButton from '../Cart/CartButton'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <header className={classes.header}>
            <h1>Ecommerce Store</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) => isActive ? classes.active : null}
                            end={true}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/products'}
                            className={({ isActive }) => isActive ? classes.active : null}
                        >Products</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/checkout'}
                            className={({ isActive }) => isActive ? classes.active : null}
                        >Checkout</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/createProduct'}
                            className={({ isActive }) => isActive ? classes.active : null}
                        >Create Product</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/cart'}
                            className={({ isActive }) => isActive ? classes.active : null}
                        >
                            <CartButton />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

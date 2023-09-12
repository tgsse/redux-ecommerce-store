import React, { Fragment } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Layout

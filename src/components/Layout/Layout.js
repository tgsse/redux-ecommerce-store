import React, { Fragment } from 'react'
import MainHeader from './MainHeader'
import { node } from 'prop-types'

Layout.propTypes = {
    children: node
}

function Layout(props) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout

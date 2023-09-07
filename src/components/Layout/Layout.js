import React, {Fragment} from 'react'
import MainHeader from './MainHeader'

Layout.propTypes = HTMLElement.prototype

function Layout(props) {
    return (
        <Fragment>
            <MainHeader/>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout

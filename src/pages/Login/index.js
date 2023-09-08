import React from 'react'

import Login from '../../components/Login/Login'
import {bool, func} from 'prop-types'

LoginScreen.propTypes = {
    isLoggedIn: bool,
    onLogin: func,
    onLogout: func,
}

function LoginScreen(props) {

    return (
        <Login
            isLoggedIn={props.isLoggedIn}
            onLogin={props.onLogin}
            onLogout={props.onLogout}
        />
    )
}

export default LoginScreen

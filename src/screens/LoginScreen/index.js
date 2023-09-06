import React from 'react';

import Login from "../../components/Login/Login";

function LoginScreen(props) {
    
    return (
        <Login
            isLoggedIn={props.isLoggedIn}
            onLogin={props.onLogin}
            onLogout={props.onLogout}
        />
    )
}

export default LoginScreen;

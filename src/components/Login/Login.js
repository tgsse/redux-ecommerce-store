import React, {useEffect, useReducer, useState} from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (prevState, action) => {
    if (action.type === 'EMAIL_CHANGED') {
        return { value: action.value, isValid: action.value.includes('@')}
    } else  if (action.type === 'INPUT_BLUR') {
        return { value: prevState.value, isValid: prevState.value.includes('@')}
    }
    return {
        value: '',
        isValid: false,
    }
}

export default function Login(props) {

    const [email, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false})

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setFormIsValid(
    //             email.value.includes('@') && enteredPassword.trim().length >= 6
    //         );
    //     }, 500)
    //     return () => {
    //         clearTimeout(timeoutId)
    //     }
    // }, [
    //     email.value,
    //     enteredPassword,
    // ])

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'EMAIL_CHANGED', value: event.target.value})
        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim.length >= 6
        )
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'})
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(email.value, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        email.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

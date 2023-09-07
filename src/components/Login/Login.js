import React, {useEffect, useState} from 'react'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import PropTypes from 'prop-types'

// NOTE: useReducer only viable if useState is too cumbersome/complex and is producing bugs or unintended behaviors
// const emailReducer = (prevState, action) => {
//     if (action.type === 'EMAIL_CHANGED') {
//         return { value: action.value, isValid: action.value.includes('@')}
//     } else  if (action.type === 'INPUT_BLUR') {
//         return { value: prevState.value, isValid: prevState.value.includes('@')}
//     }
//     return {
//         value: '',
//         isValid: false,
//     }
// }

Login.propTypes = {
    onLogin: PropTypes.func
}

export default function Login(props) {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [enteredPassword, setEnteredPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const emailValid = enteredEmail.includes('@')
            const passwordValid = enteredPassword.trim().length >= 6
            setFormIsValid(emailValid === true && passwordValid === true)
            setEmailIsValid(emailValid)
            setPasswordIsValid(passwordValid)
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [
        enteredEmail,
        enteredPassword,
    ])

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim.length >= 6
        )
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (formIsValid) {
            props.onLogin(enteredEmail, enteredPassword)
        }
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    isValid={emailIsValid}
                    id={'email'}
                    label={'E-Mail'}
                    type={'email'}
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                />
                <Input
                    isValid={passwordIsValid}
                    id={'password'}
                    label={'Password'}
                    type={'password'}
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

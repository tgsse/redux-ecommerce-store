import React from 'react'
import classes from './Input.module.css'
import {bool, func, string} from 'prop-types'

Input.propTypes = {
    isValid: bool,
    id: string,
    label: string,
    type: string,
    value: string,
    onChange: func,
}

export default function Input(props) {

    return (
        <div
            className={`${classes.control} ${
                props.value.length > 0 && !props.isValid ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

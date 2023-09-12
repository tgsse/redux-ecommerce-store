import React from 'react'
import classes from './Button.module.css'
import { bool, func, node, string } from 'prop-types'

Button.propTypes = {
    type: string,
    className: string,
    onClick: func,
    disabled: bool,
    children: node,
}

function Button(props) {
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button

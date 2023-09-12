import React from 'react'
import classes from './Card.module.css'
import { node, string } from 'prop-types'

Card.propTypes = {
    children: node,
    className: string,
}

function Card(props) {
    return (
        <section
            className={`${classes.card} ${props.className ? props.className : ''}`}
        >
            {props.children}
        </section>
    )
}

export default Card

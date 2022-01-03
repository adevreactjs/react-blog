import React from 'react'
import classes from '../button/Mybutton.module.css'

export default function MyButton(props) {
    return (
        <button {...props} className={classes.myBtn}>
            {props.children}
        </button>
    )
}

import React from 'react'
import classes from '../styles/Cards.module.css'

const Cards = (props) => {
  return (
    <div className={classes.card} >{props.children}</div>
  )
}

export default Cards 
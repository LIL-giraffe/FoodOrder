import React from 'react'
import classes from'../styles/Header.module.css'
import mealsImg from '../asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes["main-image"]} >
        <img src={mealsImg} alt='A full meal' />
    </div>
    </>
  )
}

export default Header
import React from 'react'
import classes from '../styles/HeaderCartButton.module.css'
import CartIcon from './CartIcon'
import { useContext } from 'react'
import CartContext from '../store/cart-context'


const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext)
  const numberOfCartItems=cartCtx.items.reduce((curtNumber,item)=>{
    return curtNumber+item.amount;
  },0)
  return (
    <button className={classes.button} onClick={props.onClick} > 
       <span className={classes.icon} >
        <CartIcon/>
       </span>
       <span>Your Cart</span>
       <span className={classes.badge} >{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
import React, { useRef, useState } from 'react'
import classes from '../styles/MealItemForm.module.css'
import Input from './Input'
const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsVaid]=useState(true)
  const amountInputRef=useRef()
  const submitHandler=event=>{
    event.preventDefault()
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount
    if(
      enteredAmount.trim().length===0||enteredAmount<1||enteredAmount>5
    ){
      setAmountIsVaid(false)
      return
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler} >
        <Input 
            ref={amountInputRef}
            label='Amount' input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm
import './App.css';
import { useState } from 'react';
import Cart from './component/Cart';
// import Lists from './component/Lists';
import Header from './component/Header';
import Meals from './component/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cart, setCart]=useState(false)
  const showCartHandler=()=>{
    setCart(true)
  }
  const hideCartHandler=()=>{
    setCart(false)
  }
  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main><Meals/></main>
      
      </CartProvider>
  );
}

export default App;

import React from 'react'
import { useSelector } from 'react-redux'
import DownMainCart from '../../components/cart/downMainCart'
import TopMainCart from '../../components/cart/topMainCart'
import { CartContainer } from './styledCart'

const Cart = () => {
  
  const state = useSelector(state => state.cartState);

  return (
    <CartContainer>
      <TopMainCart />
      {state.step < 1 && <hr /> }
      {state.step < 1 && <DownMainCart />}
    </CartContainer>
  )
}

export default Cart
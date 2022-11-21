import React from 'react'
import DownMainCart from '../../components/cart/downMainCart'
import TopMainCart from '../../components/cart/topMainCart'
import { CartContainer } from './styledCart'

const Cart = () => {
  return (
    <CartContainer>
        <TopMainCart />
        <hr />
        <DownMainCart />
    </CartContainer>
  )
}

export default Cart
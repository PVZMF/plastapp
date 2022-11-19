import React from 'react'
import DownMainCart from '../../componets/cart/downMainCart'
import TopMainCart from '../../componets/cart/topMainCart'
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
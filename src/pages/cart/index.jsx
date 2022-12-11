import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import DownMainCart from '../../components/cart/downMainCart'
import TopMainCart from '../../components/cart/topMainCart'
import GetAddress from '../../components/cart/modal/GetAddress'
import { CartContainer } from './styledCart'

const Cart = () => {
  
  const state = useSelector(state => state.cartState);
  const [open,setOpen] = useState(false);

  return (
    <CartContainer>
      <GetAddress open={open} setOpen={setOpen}/>
      <TopMainCart open={open} setOpen={setOpen}/>
      {state.step < 1 && <hr /> }
      {state.step < 1 && <DownMainCart />}
    </CartContainer>
  )
}

export default Cart
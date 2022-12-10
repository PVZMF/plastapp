import React from 'react'
import { TbTrash } from 'react-icons/tb';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, removeItem, setIdCart } from '../../../../../toolkit/slices/cart.slice';

import Product from '../../../../../assets/imgs/pesteh.jpg';

// Style
import { CardContainer } from './styledCard'
import { createCart } from '../../../../../api/api';

const Card = ({ data }) => {

  const dispatch = useDispatch();
  const {thumbnails, title, price, quantity, shop, offer} = data;
  const state = useSelector(state => state.cartState);

  const priceOff = price * (offer?  offer / 100 : 0);
  const priceOrigin = price - priceOff;
  console.log(data)
  const handleClick = () =>{
    dispatch(removeItem(data));
  }
  return (
    <CardContainer>
      <div className='top-header'>
        <h3>از غرفه {shop}</h3>
        <h2>یک کالا</h2>
      </div>

      <div className='data-product'>
        <div className='right'>
          <img src={thumbnails} alt={title} />
          <div className='box-data'>
            <h2>{title}</h2>
            <div className='counter_box'>
              <div className='number'>
                <span onClick={() => dispatch(increase(data))}>+</span>
                <h5>{quantity.toLocaleString('fa-IR')}</h5>
                <span onClick={() => {quantity > 1 && dispatch(decrease(data))}}>-</span>
              </div>
              <button onClick={() => handleClick()}><TbTrash /></button>
            </div>
          </div>
        </div>

        <div className='left'>
          {data.offer? <del>{data.price.toLocaleString('fa-IR')} <span>تومان</span></del> : null}
          <div className='price'>
          {data.offer !== 0 ? <h5>{priceOff.toLocaleString('fa-IR')} <span>تخفیف</span></h5> : null}
            <p>{console.log(priceOrigin)}
              {data.offer?
                priceOrigin
                :
                data.price.toLocaleString('fa-IR')
              }<span>تومان</span></p>
          </div>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card;

Card.defaultProps = {
  title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
  price: 550000,
  image: Product,
  shop: 'پسته طلایی گلشن',
  number: 3,
  offer: 20,
}
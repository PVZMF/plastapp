import React from 'react'
import { TbTrash } from 'react-icons/tb';

// Redux
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../../../../../toolkit/cart/cartAction';

import Product from '../../../../../assets/imgs/pesteh.jpg';

// Style
import { CardContainer } from './styledCard'

const Card = ({ data }) => {

  const dispatch = useDispatch();
  const {image, title, price, quantity, shop, offer} = data;

  const priceOff = price * (offer !== 0 ?  offer / 100 : 1);
  const priceOrigin = price - priceOff;

  return (
    <CardContainer>
      <div className='top-header'>
        <h3>از غرفه {shop}</h3>
        <h2>یک کالا</h2>
      </div>

      <div className='data-product'>
        <div className='right'>
          <img src={image} alt={title} />
          <div className='box-data'>
            <h2>{title}</h2>
            <div className='counter'>
              <div className='number'>
                <span onClick={() => dispatch(increase(data))}>+</span>
                <h5>{quantity}</h5>
                <span onClick={() => {quantity > 1 && dispatch(decrease(data))}}>-</span>
              </div>

              <button onClick={() => dispatch(removeItem(data))}><TbTrash /></button>
            </div>
          </div>
        </div>

        <div className='left'>
          {data.offer !== 0 ? <del>{data.price.toLocaleString('fa-IR')} <span>تومان</span></del> : null}
          <div className='price'>
          {data.offer !== 0 ? <h5>{priceOff.toLocaleString('fa-IR')} <span>تخفیف</span></h5> : null}
            <p>
              {data.offer ?
                priceOrigin.toLocaleString('fa-IR')
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
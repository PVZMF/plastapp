import React from 'react'
import { TbTrash } from 'react-icons/tb';

// Redux
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../../../../../toolkit/slices/cart.slice';

// Style
import { CardContainer } from './styledCard'

const Card = ({ data }) => {
  console.log("dataaaaaaaaa",data)
  const dispatch = useDispatch();
  const {thumbnails, title, price, quantity, shop, offer} = data;

  const priceOff = price * (offer?  offer / 100 : 0);
  const priceOrigin = price - priceOff;
 
  const handleClick = () =>{
    dispatch(removeItem(data));
  }
  return (
    <CardContainer>
      <div className='top-header'>
        <h3>از غرفه {shop.name}</h3>
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
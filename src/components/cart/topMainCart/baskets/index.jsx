import React, { useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Componenets
import Card from "./card";

import Product from '../../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../../assets/imgs/shalwar.jpg';

// Style
import { FlexMainBaskets } from './styledBaskets';

const Baskets = ({ list }) => {
  
  const state = useSelector(state => state.cartState);

  const [active, setActive] = useState(false);

  return (
    <FlexMainBaskets>
        <div className='header'>
            <div onClick={() => setActive(false)} className={active ? 'title' : 'active'}><h5>سبد خرید</h5></div>
        </div>
        
        <div className='cart-list'>
          {state.selectedItems.map (item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
    </FlexMainBaskets>
  )
}

export default Baskets;

Baskets.defaultProps = {
  list: [
    {
      id: "1",
      title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
      price: 550000,
      image: Product,
      shop: 'پسته طلایی گلشن',
      number: 3,
      offer: 20,
    },

    {
      id: "2",
      title: "شلوار اسلش مردانه سایز بزرگ 3و4 و 5(کد301)",
      price: 48000,
      image: Product2,
      shop: 'پسته طلایی گلشن',
      number: 1,
      offer: 0,
    },
  ]
}
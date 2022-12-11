import React, { useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Componenets
import Card from "./card";
// Style
import { FlexMainBaskets } from './styledBaskets';

const Baskets = () => {
  
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
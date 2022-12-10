import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';

import style from './buyStep.module.css'

const Card = ({ item }) => {
  const [more, setMore] = useState(false);

  return (
    <div className={style.card_item}>
      <div className={style.cardHeader}>
        <div className={style.dataProduct}>
          <h4>از غرفه: <sapn>{item?.title}</sapn></h4>
          <p>{item?.quantity} کالا</p>
        </div>
        
        <h2 className={style.price} onClick={() => setMore(!more)}>
          مبلغ مرسوله: {(item.price*item.quantity).toLocaleString('fa-IR')} تومان 
          <span className={more ? style.down : style.up}><BsChevronDown /></span>
        </h2>
      </div>

      <div className={more ? style.bodyCard : style.bodyCard_Hide}>
        <div className={style.proData}>
          <img src={item?.thumbnails} alt={item?.title} />
          <div className={style.proName}>
            <h3>{item?.title}</h3>
            <h5>{item?.quantity} عدد</h5>
          </div>
        </div>
        <h4 className={style.price}>{item?.price.toLocaleString('fa-IR')} تومان</h4>
      </div>
    </div>
  )
}

export default Card
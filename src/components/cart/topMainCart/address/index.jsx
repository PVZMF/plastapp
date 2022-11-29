import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';

// Redux
import { useSelector } from 'react-redux';
// Images
import Product from '../../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../../assets/imgs/shalwar.jpg';
// Style
import style from './address.module.css'

const Address = ({ setStep, step, user_name, location, postal_code, phone }) => {
  
  const state = useSelector(state => state.cartState);

  return (
    <div className={style.address}>
      <div className={style.card}>
        <div className={style.header}>
            <div className={style.title}><button onClick={() => setStep(step - 1)}><BsArrowRight /> انتخاب آدرس</button></div>
        </div>
        
        <div className={style.data_address}>
          <div className={style.header}>
            <h5><GrLocation /> آدرس گیرنده</h5>
            <button>به آدرس دیگر ارسال شود</button>
          </div>
          <h4 className={style.username}>{user_name}</h4>
          <p className={style.location}>{location}</p>
          <div className={style.footerCard}>
            <h3>کد پستی: {postal_code}</h3>
            <h3>شماره‌همراه: {phone}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address;

Address.defaultProps = {
  postal_code: '',
  phone: '۰۹۱۲۱۱۱۷۷۸۸',
}
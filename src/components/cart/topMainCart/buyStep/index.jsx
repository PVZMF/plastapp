import React, { useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { stepMinus } from '../../../../toolkit/slices/cart.slice';
// Component
import Card from './Card';
import { Switch } from '@mui/material';
//Icons
import { BsArrowRight } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
// Style
import style from './buyStep.module.css'

const BuyStep = ({ setStep, step, value, username, location, list }) => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.cartState);
  let textError = "";
  let creditShopping =false;

  const total = [];
  state.selectedItems.map((product) => {
    if (!total.includes(product.title)) total.push(product.title);
  });
  creditShopping = total.length > 1
  if (creditShopping) textError = ("خرید اعتباری تنها از یک فروشگاه امکان پذیر است!")



  return (
    <div className={style.buystep}>
      <div className={style.buyheader}>
        <button onClick={() => dispatch(stepMinus())}><BsArrowRight /> پرداخت</button>
      </div>

      <div className={style.OfferCode}>
        <label>کد تخفیف</label>
        <div className={style.inputBox}>
          <input type="text" placeholder='اگر کد‌تخفیف دارید، وارد کنید' />
          <button>اعمال</button>
        </div>
      </div>

      <div className={style.list}>
        <div className={style.wallet}>
          <div className={style.checkboxDiv}>
            {/* <input type="checkbox" /> */}
            <Switch disabled={creditShopping} sx={{mr:6}}/>
            <label htmlFor='creditShopping'>کسر از اعتبار</label>
            <span className={style.error}>{textError}</span>
          </div>

          <h4>اعتبار: <span>{value}</span> تومان</h4>
        </div>

        <div className={style.factortitle}><h5>فاکتور سفارش:</h5></div>

        <div className={style.boxCards}>
          {state.selectedItems.map((item, index) => (
            <Card key={index + "cardbuy"} item={item} />
          ))}
        </div>
      </div>

      <div className={style.buyheader}>
        <p><RiErrorWarningLine /> شماره شما برای غرفه‌دار این محصولات و «شرکت پست ایران» ارسال خواهد شد.</p>
      </div>

      <div className={style.buyfooter}>
        <h5><RiErrorWarningLine /> تمامی بسته های پستی به آقا/خانم <p>{state.sendInfo.receiver_name}</p> به نشانی <p>{state.sendInfo.address_text}</p> تحویل داده می‌شوند</h5>
        <div className={style.btn_box}><button>ویرایش</button></div>
      </div>

    </div>
  )
}

export default BuyStep;

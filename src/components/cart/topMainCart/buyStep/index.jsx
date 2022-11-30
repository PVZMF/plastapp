import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { stepMinus } from '../../../../toolkit/cart/cartAction';
// Component
import Card from './Card';
import { Switch } from '@mui/material';
//Icons
import { BsArrowRight } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
// Style
import style from './buyStep.module.css'

const BuyStep = ({ setStep, step, value, username, location }) => {
  
  const dispatch = useDispatch()
  const state = useSelector(state => state.cartState);

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
            <Switch checked={value < 0 && false} onChange={null} />
            <label>کسر از اعتبار</label>
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
        <h5><RiErrorWarningLine /> تمامی بسته های پستی به آقا/خانم <p>{username}</p> به نشانی <p>{location}</p> تحویل داده می‌شوند</h5>
        <div className={style.btn_box}><button>ویرایش</button></div>
      </div>

    </div>
  )
}

export default BuyStep;

BuyStep.defaultProps = {
  username: 'علی لهراسبی',
  location: 'تهران، امیرآباد، کارگرشمالی، پلاک۶۴',
}
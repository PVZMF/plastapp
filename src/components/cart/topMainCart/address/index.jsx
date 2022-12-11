import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { stepMinus } from '../../../../toolkit/slices/cart.slice';
// Component
import Card from './Card';
// Style
import style from './address.module.css'

const Address = ({ setStep, step, user_name, location, postal_code, phone, price_Send }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.cartState);

  return (
    <div className={style.address}>
      <div className={style.card}>
        <div className={style.header}>
            <div className={style.title}>
              <button onClick={() => dispatch(stepMinus())}><BsArrowRight /> انتخاب آدرس</button>
            </div>
        </div>
        
        <div className={style.data_address}>
          <div className={style.headerCard}>
            <h5><GrLocation /> آدرس گیرنده</h5>
            {/* <button>به آدرس دیگر ارسال شود</button> */}
          </div>
          <h4 className={style.username}>{user_name}</h4>
          <p className={style.location}>{location}</p>
          <div className={style.footerCard}>
            <h3>کد پستی: {postal_code}</h3>
            <h3>شماره‌همراه: {phone}</h3>
          </div>
        </div>
      </div>

      
      <div className={style.card}>
        <div className={style.header}>
            <div className={style.title}>
              <button>
                هزینه ارسال برای {state.selectedItems.length} بسته {state.sendPrice > 0 ? `${state.sendPrice.toLocaleString('fa-IR')} تومان` : 'رایگان'}
              </button>
            </div>
        </div>

        <div className={style.boxCards}>
          {state.selectedItems.map((item, index) => (
            <Card key={index + "cardCart"} index={index} item={item} all={state.selectedItems.length} />
          ))}
        </div>
        
      </div>

    </div>
  )
}

export default Address;

Address.defaultProps = {
  user_name: 'علی لهراسبی',
  location: 'تهران، امیرآباد، کارگر شمالی، پلاک ۸۹',
  postal_code: '۶۴۰۲۵۱۸۸۹۹۹',
  phone: '۰۹۱۲۱۱۱۷۷۸۸',
}
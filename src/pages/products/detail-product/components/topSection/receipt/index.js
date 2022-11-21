import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import Profile from '../../../../../../assets/imgs/shop_1.jpg';

import { FlexMainReceipt } from './styleReceipt'

const Receipt = ({ image_profile, name_profile, shop_profile, number_product }) => {
    const price = 2250000;
    const off = 1000000;

    const total = price - off;
    const number = 2;
  return (
    <FlexMainReceipt>
        <div className='top-receipt'>
            <h5 className='title'>غرفه‌دار</h5>
            
            <div className='profile'>
                <img src={image_profile} alt={name_profile} />
                <div className='box-profle'>
                    <h4>{name_profile}</h4>
                    <h5>{shop_profile}</h5>
                </div>
            </div>

            <div className='btns-receipt'>
                <button className='dialogue'><BiMessageDetail /> گفت و گو</button>
                <button className='more-data'>اطلاعات بیشتر</button>
            </div>
        </div>

        <div className='down-receipt'>

            <div className='send-items'>
                <div className='send-box'>
                    <h5>ارسال از</h5>
                    <h4>خراسان رضوی</h4>
                </div>
                <div className='send-box'>
                    <h5>ارسال غرفه‌دار</h5>
                    <h4>از 3 روز دیگر</h4>
                </div>
                <div className='send-box'>
                    <h5>فروش محصول</h5>
                    <h4>{number_product.toLocaleString('fa-IR')}</h4>
                </div>
            </div>

            <div className='total-amount'>
                <h5>مبلغ قابل پرداخت</h5>
                <h5>{total.toLocaleString('fa-IR')} <span>تومان</span></h5>
            </div>

            <button className='buy'><BsPlusLg /> افزودن به سبد خرید</button>
        </div>
    </FlexMainReceipt>
  )
}

export default Receipt;

Receipt.defaultProps = {
    image_profile : Profile,
    name_profile: 'علی سپهری',
    shop_profile: 'خشکبار عمو حبیب',
    number_product: 900,
}
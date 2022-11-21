import React from 'react';
import { BsTelegram, BsTwitter ,BsInstagram , BsFacebook } from 'react-icons/bs';

import Map from '../../assets/imgs/shop_2.jpg';
// Style
import style from './aboutus.module.css';

const AboutUs = ({ description, desc_plastapp }) => {
  return (
    <div className={style.aboutus}>
        <div className={style.box_data}>
            <div className={style.map}>
                <img src={Map} alt='plastapp' />
            </div>

            <div className={style.data}>
                <div className={style.top}>
                    <h2 className={style.title}>درباره پلاست اپ</h2>
                    <p>{description}</p>
                </div>

                <div className={style.down}>
                    <h2 className={style.title}>توضیحات پلاست اپ</h2>
                    <p>{desc_plastapp}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;

AboutUs.defaultProps = {
    description: 'پلاست اپ اولین پلتفرم فروش انواع نایلکس،نایلکس و محصولات و خدمات پلاستیکی در ایران از سال 1397 فعالیت خود را به صورت رسمی آغاز نمود.',
    desc_plastapp: '12354',
}
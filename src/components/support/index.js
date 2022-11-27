import React from 'react';
import { BsTelegram, BsTwitter ,BsInstagram , BsFacebook } from 'react-icons/bs';

// import Map from '../../assets/imgs/location-map.svg';
// Style
import style from './support.module.css';

const Support = ({ numbers, email }) => {
  return (
    <div className={style.support}>
        <div className={style.box_data}>
            <div className={style.map}>
                {/* <img src={Map} alt='map' /> */}
            </div>

            <div className={style.data}>
                <div className={style.hours_work}>
                    <h2>ساعت کار بخش اداری</h2>
                    <p>پشتیبانی تماس تلفنی هر روز از ساعت ۹ صبح تا ۶ عصر</p>
                </div>
                <div className={style.contactus}>
                    <h2>شماره های تماس</h2>
                    {numbers.map(item => (
                        <h3 key={item.id}>{item.phone_number}</h3>
                    ))}

                    <h3>ایمیل: {email}</h3>
                    <p>گفتگوی آنلاین هر روز (حتی روز های تعطیل) از ساعت ۸ صبح تا ۱۱ شب</p>
                    <p>ثبت درخواست پشتیبانی هفت روز هفته و ۲۴ ساعت شبانه روز</p>
                </div>
                <div className={style.social_media}>
                    <p>ما را در شبکه های اجتماعی دنبال کنید</p>
                    <div className={style.social}>
                        <button href=""><BsTwitter /></button>
                        <button href=""><BsTelegram /></button>
                        <button href=""><BsInstagram /></button>
                        <button href=""><BsFacebook /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support;

Support.defaultProps = {
    numbers: [
        {
            id: '1',
            phone_number: '۰۲۱-۹۱۰۳۰۸۰۹',
        },
        {
            id: '2',
            phone_number: '۰۲۱-۴۴۱۰۱۷۱۱',
        },
        {
            id: '3',
            phone_number: '۰۲۱-۴۴۱۰۱۷۸۸',
        },
    ],
    email: 'info@plastapp.ir',
}
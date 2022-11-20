import React, { useState } from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import style from './addProduct.module.css';

const SendData = ({ citys }) => {
    
    const [active, setActive] = useState(1);

  return (
    <div className={style.send}>
        <span className={style.icon}><TbTruckDelivery /></span>
        <div className={style.box}>
            <h5 className={style.title}>- اطلاعات ارسال</h5>
            <div className={style.boxinput}>
                <label>وضعیت محصول</label>
                <select>
                    <option>در دسترس</option>
                    <option>تمام شده</option>
                </select>
            </div>

            <div className={style.boxradio}>
                <label>محدوده ارسال</label>
                <div className={style.input}>
                    <label htmlFor="allcity">به سراسر ایران</label>
                    <input type="radio" name='allCity' id='allcity' value={1} onChange={(e) => setActive(e.target.value)} defaultChecked />
                </div>
                <div className={style.input}>
                    <label htmlFor="city">انتخاب شهر</label>
                    <input type="radio" name='allCity' id='city' value={2} onChange={(e) => setActive(e.target.value)} />
                </div>
            </div>
            
            {active == 2 ?
                <div className={style.boxinput}>
                    <label>انتخاب شهر</label>
                    <select required>
                        <option>انتخاب شهر</option>
                        {citys.map(item => (
                            <option key={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
            : null}
        </div>
    </div>
  )
}

export default SendData;

SendData.defaultProps = {
    citys: [
        {
            id: 1,
            name: 'تهران',
        },
        {
            id: 2,
            name: 'خراسان',
        },
        {
            id: 3,
            name: 'شیراز',
        },
        {
            id: 4,
            name: 'اصفهان',
        },
    ]
}
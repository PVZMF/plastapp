import React, { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select';

// Icons
import { TbCertificate } from 'react-icons/tb';
import { ImUserTie } from 'react-icons/im';
import { AiFillShop } from 'react-icons/ai';
import { CgImage } from 'react-icons/cg';

// Style
import style from './storeRegister.module.css'

const StoreRegister = ({ states, citys }) => {
    const [city, setCity] = useState();

    const AllCity = (id) => {
        citys.map(item => {
            if(item.active === id){
                setCity(item.list)
            }
        })
    };

    console.log(city)

  return (
    <div className={style.store}>
        <div className={style.boxstore}>
            <div className={style.boxinput}>
                <Input classname={style.input} type='file' childern={<ImUserTie />} placeholder="* عکس کارت ملی" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<ImUserTie />} placeholder="* کدملی / شناسه ملی" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<ImUserTie />} placeholder="* شماره شناسنامه" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} type='file' childern={<TbCertificate />} placeholder="* عکس پروانه کسب" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} type='file' childern={<CgImage />} placeholder="* لوگو فروشگاه" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<AiFillShop />} placeholder="* نام فروشگاه" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<AiFillShop />} placeholder="* آدرس فروشگاه" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<AiFillShop />} placeholder="* کدپستی" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<CgImage />} placeholder="* شماره شبای بانکی" />
            </div>
            <div className={style.boxinput}>
                <Input classname={style.input} childern={<TbCertificate />} placeholder="* کد آیسیک پروانه کسب" />
            </div>
            <div className={style.boxinput}>
                <Select classname={style.input} title="* استان" items={states} onChange={(e) => AllCity(e.target.value)} />
            </div>
            <div className={style.boxinput}>
                <Select classname={style.input} title="* شهر" items={city} />
            </div>
        </div>

        <div className={style.box_btn}>
            <button>تایید</button>
        </div>

        <div className={style.rules}>
            <p>فروشنده محترم:</p>
            <ul>
                <li>پروانه کسب باید حتما به نام شخص ثبت نام کننده باشد.</li>
                <li>شماره شبای بانکی باید حتما به نام شخص ثبت نام کننده باشد.</li>
                <li>عکس های ارسالی حتما باید واضح و خوانا باشد.</li>
            </ul>

            <h5>درصورت عدم رعایت موارد فوق امکان تایید از سمت پلاست اپ وجود نخواهد داشت .</h5>
        </div>
    </div>
  )
}

export default StoreRegister;

StoreRegister.defaultProps = {
    states: [
        {
            id: 1,
            name: 'تهران',
            value: 'تهران'
        },
        {
            id: 2,
            name: 'خراسان',
            value: 'خراسان'
        },
        {
            id: 3,
            name: 'اصفهان',
            value: 'اصفهان'
        },
    ],
    citys: [
        {
            id: 11,
            active: 'تهران',
            list: [
                {
                    id: 21,
                    name: 'کرج'
                },
                {
                    id: 22,
                    name: 'البرز'
                },
            ]
        },
        {
            id: 12,
            active: 'خراسان',
            list: [
                {
                    id: 31,
                    name: 'شیروان'
                },
                {
                    id: 32,
                    name: 'مشهد'
                },
            ]
        },
        {
            id: 13,
            active: 'اصفهان',
            list: [
                {
                    id: 41,
                    name: 'اصفهان'
                },
                {
                    id: 42,
                    name: '2البرز'
                },
            ]
        },
    ]
}
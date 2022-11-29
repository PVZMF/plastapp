import React, { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select';
import { provinces } from "../../../assets/citiesName/CitiesName"
import {createShop} from "../../../api/api"

// Icons
import { TbCertificate } from 'react-icons/tb';
import { ImUserTie } from 'react-icons/im';
import { AiFillShop } from 'react-icons/ai';
import { CgImage } from 'react-icons/cg';

// Style
import style from './storeRegister.module.css'

const StoreRegister = () => {
    const [cities, setCities] = useState([""])


    const handleCities = (e) => {
        setCities(provinces.filter(item => item.name == e.target.value)[0].cities);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form_data = new FormData(e.target);
        const data = Object.fromEntries(form_data.entries());
        createShop(data).then(result => {
            console.log(result);
        })
        console.log(data);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={style.store} id={"form"}>
            <div className={style.boxstore}>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"picPersonalID"} type='file' childern={<ImUserTie />} placeholder="* عکس کارت ملی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"NationalPersonalId"} childern={<ImUserTie />} placeholder="* کدملی / شناسه ملی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"PersonalId"} childern={<ImUserTie />} placeholder="* شماره شناسنامه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"picCertificate"} type='file' childern={<TbCertificate />} placeholder="* عکس پروانه کسب" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"logoShop"} type='file' childern={<CgImage />} placeholder="* لوگو فروشگاه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"nameShop"} childern={<AiFillShop />} placeholder="* نام فروشگاه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"addrShop"} childern={<AiFillShop />} placeholder="* آدرس فروشگاه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"picCertificate"} childern={<AiFillShop />} placeholder="* کدپستی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"numberSheba"} childern={<CgImage />} placeholder="* شماره شبای بانکی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"codeIsic"} childern={<TbCertificate />} placeholder="* کد آیسیک پروانه کسب" />
                </div>
                <div className={style.boxinput}>
                    <Select classname={style.input} name={"province"} form={"form"} child={false} title="* استان" items={provinces} onChange={(e) => handleCities(e)} />
                </div>
                <div className={style.boxinput}>
                    <Select classname={style.input} name={"city"} form={"form"} title="* شهر" child={true} items={cities} />
                </div>
            </div>

            <div className={style.box_btn}>
                <button type='submit'>تایید</button>
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
        </form>
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
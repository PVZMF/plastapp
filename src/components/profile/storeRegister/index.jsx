import React, { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select';
import { provinces } from "../../../assets/citiesName/CitiesName"
import { createShop } from "../../../api/api"

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
                    <Input classname={style.input} name={"first_name"} childern={<ImUserTie />} placeholder="* نام" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"last_name"} childern={<ImUserTie />} placeholder="* نام خانوادگی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"national_card_image"} type='file' childern={<ImUserTie />} placeholder="* عکس کارت ملی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"economic_code"} childern={<ImUserTie />} placeholder="* کدملی / شناسه ملی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"PersonalId"} childern={<ImUserTie />} placeholder="* شماره شناسنامه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"license_image"} type='file' childern={<TbCertificate />} placeholder="* عکس پروانه کسب" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"logo"} type='file' childern={<CgImage />} placeholder="* لوگو فروشگاه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"name"} childern={<AiFillShop />} placeholder="* نام فروشگاه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"addrShop"} childern={<AiFillShop />} placeholder="* آدرس فروشگاه" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"picCertificate"} childern={<AiFillShop />} placeholder="* کدپستی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"sheba_no"} childern={<CgImage />} placeholder="* شماره شبای بانکی" />
                </div>
                <div className={style.boxinput}>
                    <Input classname={style.input} name={"registration_number"} childern={<TbCertificate />} placeholder="* کد آیسیک پروانه کسب" />
                </div>
                <div className={style.boxinput}>
                    <Select classname={style.input} name={"state"} form={"form"} child={false} title="* استان" items={provinces} onChange={(e) => handleCities(e)} />
                </div>
                <div className={style.boxinput}>
                    <Select classname={style.input} name={"city"} form={"form"} title="* شهر" child={false} items={cities} />
                </div>
                <div className={style.boxinput}>
                    <Select classname={style.input} name={"is_active"} form={"form"} title="در دسترس" child={true} items={["فعال","غیرفعال"]} />
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


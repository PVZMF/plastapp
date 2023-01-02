import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from './role.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from "../../toolkit/slices/auth"
import { setProfile } from '../../api/api';
import { useState } from 'react';

const RoleSelect = ({ image }) => {
    const role = useSelector(state => state.auth.role)
    const [textError,setTextError] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        const form_data = new FormData(e.target);
        const data = Object.fromEntries(form_data.entries());
        setProfile(data).then(res => {
            if (res.phone_number){
                if(role === "business") navigate("../profile/storregiser")
                else navigate("../")
            }
            else if(res.data.code === "token_not_valid"){
                setTextError("خطای سرور")
            }
            
        }).catch(e =>console.log(e))

    };
    return (
        <form onSubmit={handleClick}>
            <div className={style.role}>
                <div className={style.stepBox}>
                    <div className={style.inputs}>
                        <div className={style.inputbox}>
                            <div className={style.input}>
                                <label id='first_name'>نام</label>
                                <input required type="text" id='first_name' name='first_name' />
                            </div>
                        </div>
                        <div className={style.inputbox}>
                            <div className={style.input}>
                                <label id='last_name'>نام خانوادگی</label>
                                <input required type="text" id='last_name' name='last_name' />
                            </div>
                        </div>
                    </div>
                    <div className={style.btns}>
                        <button type='submit' onClick={() => dispatch(setRole("business"))}>
                                فروشنده هستم
                        </button>
                        <button type='submit' onClick={() => dispatch(setRole("client"))}>
                                مشتری هستم
                        </button>
                    </div>
                    <ul className={style.rules}>
                        <p>{textError}</p>
                    </ul>
                    <ul className={style.rules}>
                        <li><p>- مشتری هستم در پلاست اپ به معنای خریدار محصولات در پلاست اپ می‌باشد.</p></li>
                        <li><p>- فروشنده هستم در پلاست اپ به معنای دارای کسب و کار فعال در حوزه پلاستیک(حقیقی/حقوقی)می‌باشد.</p></li>
                        <li><p>- درصورتی که خریدار هستید لطفا گزینه مشتری هستم و درصورتی که فعال در حوزه پلاستیک هستید گزینه فروشنده هستم را انتخاب فرمایید.</p></li>
                    </ul>
                </div>
            </div>
        </form>
    )
}

export default RoleSelect
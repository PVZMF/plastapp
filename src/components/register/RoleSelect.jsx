import React from 'react'
import User from '../../assets/imgs/user1.png'
import style from './role.module.css'

const RoleSelect = ({ image }) => {
  return (
    <div className={style.role}>
        <div className={style.stepBox}>
            <div className={style.inputs}>
                <div className={style.inputbox}>
                    <div className={style.input}>
                        <label>نام و نام خانوادگی :</label>
                        <input type="text" />
                    </div>
                    <div className={style.input}>
                        <label>آدرس :</label>
                        <input type="text" />
                    </div>
                    <div className={style.inputImg}>
                        <div className={style.imgbox}>
                            <img src={image ? image : User} alt="user" />
                        </div>
                        <div className={style.inputfile}>
                            <label>انتخاب تصویر</label>
                            <input type="file" />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className={style.btns}>
                <button>فروشنده هستم</button>
                <button>مشتری هستم</button>
            </div>


            <ul className={style.rules}>
                <li><p>- مشتری هستم در پلاست اپ به معنای خریدار محصولات در پلاست اپ می‌باشد.</p></li>
                <li><p>- فروشنده هستم در پلاست اپ به معنای دارای کسب و کار فعال در حوزه پلاستیک(حقیقی/حقوقی)می‌باشد.</p></li>
                <li><p>- درصورتی که خریدار هستید لطفا گزینه مشتری هستم و درصورتی که فعال در حوزه پلاستیک هستید گزینه فروشنده هستم را انتخاب فرمایید.</p></li>
            </ul>
        </div>
    </div>
  )
}

export default RoleSelect
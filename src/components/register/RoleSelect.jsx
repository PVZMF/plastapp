import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../assets/imgs/user1.png'
import style from './role.module.css'

const RoleSelect = ({ image }) => {
    return (
        <div className={style.role}>
            <div className={style.stepBox}>
                <div className={style.btns}>

                    <button>
                        <Link to="../profile/storregiser">
                            فروشنده هستم
                        </Link>

                    </button>
                    <Link to="../">
                        <button>مشتری هستم</button>
                    </Link>
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
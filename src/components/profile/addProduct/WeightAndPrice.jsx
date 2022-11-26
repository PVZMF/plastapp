import React from 'react'
import { TbTag } from 'react-icons/tb';
import style from './addProduct.module.css';

const WeightAndPrice = () => {
  return (
    <div className={style.weight}>
        <span className={style.icon}><TbTag /></span>
        <div className={style.box}>
            <h5 className={style.title}>- وزن، تعداد، قیمت و موجودی</h5>
            <div className={style.boxinput}>
                <label>واحد محصول</label>
                <div className={style.input}>
                    <input type="text" />
                    {/* <span>گرم</span> */}
                    <select defaultValue="کیلوگرم">
                        <option value="گرم">گرم</option>
                        <option value="کیلوگرم">کیلوگرم</option>
                        <option value="رول">رول</option>
                        <option value="بسته">بسته</option>
                        <option value="کارتن">کارتن</option>
                        <option value="تعداد">تعداد</option>
                        <option value="دستگاه">دستگاه</option>
                    </select>
                </div>
            </div>

            {/* <div className={style.boxinput}>
                <label>وزن با دسته بندی</label>
                <div className={style.input}>
                    <input type="text" />
                    <span>گرم</span>
                </div>
                <p>- وزن خالص محصول به اضافه وزن کارتن بسته بندی را اینجا ثبت کنید.</p>
                <p>- این وزن در محاسبه هزینه ارسال اهمیت دارد.</p>
            </div> */}
            
            <div className={style.boxinput}>
                <label>قیمت محصول</label>
                <div className={style.input}>
                    <input type="text" />
                    <span>تومان</span>
                </div>
            </div>
            
            <div className={style.boxinput}>
                <label>قیمت محصول با تخفیف (اختیاری)</label>
                <div className={style.input}>
                    <input type="text" />
                    <span>تومان</span>
                </div>
            </div>
            
            <div className={style.boxinput}>
                <label>تعداد موجودی</label>
                <div className={style.boxadd}>
                    <button>+</button>
                    <span>10</span>
                    <button>-</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeightAndPrice;
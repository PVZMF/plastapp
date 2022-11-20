import React from 'react';
import { BiCategory } from 'react-icons/bi';
import style from './addProduct.module.css';

const NameAndGrouping = ({ categorys }) => {
  return (
    <div className={style.name_grouping}>
      <span className={style.icon}><BiCategory /></span>
      <div className={style.box}>
        <h5 className={style.title}>- نام و دسته بندی</h5>
        <h4>قوانین محصولات ممنوعه در پلاست اپ</h4>
        <div className={style.boxinput}>
          <label>عنوان محصول</label>
          <input type="text" placeholder='مثلا عسل آویشن سبلان' />
        </div>
        <select>
          <option>انتخاب دسته بندی</option>
          {categorys.map(item => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default NameAndGrouping;

NameAndGrouping.defaultProps = {
  categorys: [
    {
      id: '1',
      name: 'محصولات نایلون و نایلکس'
    },
    {
      id: '2',
      name: 'محصولات سلولزی'
    },
    {
      id: '3',
      name: 'محصولات یک‌بار مصرف'
    },
    {
      id: '4',
      name: 'محصولات خانه و آشپزخانه'
    },
    {
      id: '5',
      name: 'محصولات بهداشت و حمام'
    },
    {
      id: '6',
      name: ' سفارشات چاپی'
    },
    {
      id: '7',
      name: ' مواد اولیه'
    },
    {
      id: '8',
      name: ' تجهیزات و دستگاه خط تولید'
    },
  ]
}
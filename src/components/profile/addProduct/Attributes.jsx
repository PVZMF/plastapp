import React, { useState } from 'react'
import { TbClipboardList } from 'react-icons/tb';
import { v4 as uuidv4 } from "uuid";
import style from './addProduct.module.css';

const Attributes = () => {
    const [att, setAtt] = useState([{ key: "", value: "", id: uuidv4() }]);

    const handleAddClick = () => {
        setAtt([...att, { id: uuidv4(), key: "", value: "" }]);
    };

    const RemoveAtt = (item) => {
        setAtt(() => {
          return att.filter((itm) => {
            return itm !== item;
          });
        });
    };
    
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...att];
        list[index][name] = value;
        setAtt(list);
    };
  return (
    <div className={style.attributes}>
        <span className={style.icon}><TbClipboardList /></span>
        <div className={style.box}>
            <h5 className={style.title}>- سایر ویژگی های محصول (اختیاری)</h5>
            
            <div className={style.header}>
                <h4>ویژگی محصول</h4>
                <h4>مقدار</h4>
                <button onClick={handleAddClick}>+</button>
            </div>

            {att.map((item, index) => (
                <div className={style.boxattribute}>
                    <input type="text" placeholder='مثلا وزن خالص...' name='key' onChange={(e) => handleInputChange(e, index)} />
                    <input type="text" placeholder='مثلا 120 گرم' name='value' onChange={(e) => handleInputChange(e, index)} />
                    <button onClick={() => RemoveAtt(item)}>-</button>
                </div>
            ))}

            <div className={style.boxinput_checked}>
                <input type="checkbox" />
                <label>امکان خرید اعتباری دارد</label>
            </div>

            <div className={style.boxinput}>
                <label>توضیحات محصول (اختیاری)</label>
                <textarea />
            </div>
            
        </div>
    </div>
  )
}

export default Attributes;
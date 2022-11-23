import React from 'react'

// Components
import NameAndGrouping from './NameAndGrouping'
import Images from './Images'
import WeightAndPrice from './WeightAndPrice'
import SendData from './SendData'
import Attributes from './Attributes'

// Style
import style from './addProduct.module.css'

const AddProduct = () => {
  return (
    <div className={style.addProduct}>
        <div className={style.header}>
            <h5>خانه</h5><span>{'>'}</span><h5>افزودن محصول</h5>
        </div>
        <NameAndGrouping />
        <Images />
        <WeightAndPrice />
        <SendData />
        <Attributes />
        <div className={style.footer}>
            <button>انتشار محصول</button>
        </div>
    </div>
  )
}

export default AddProduct
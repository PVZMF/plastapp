import React from 'react'
import imgBlog from '../../../assets/imgs/shop_1.jpg'
import style from '../blog.module.css'

const CardBlog = ({ title, image, date }) => {
  return (
    <div className={style.cardBlog}>
        <div className={style.imgbox}>
            <img src={image} alt={title} />
        </div>

        <div className={style.data}>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default CardBlog;

CardBlog.defaultProps = {
    title: 'متن تستی',
    image: imgBlog,
    date: '8 روز پیش'
}
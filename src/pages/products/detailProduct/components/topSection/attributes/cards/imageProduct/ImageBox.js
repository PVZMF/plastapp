import React, { useState } from 'react';

import { FiBookmark } from 'react-icons/fi';
import { BiShareAlt } from 'react-icons/bi';
import { ImWarning } from 'react-icons/im';
import { AiOutlineLineChart } from 'react-icons/ai';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


import { FlexImageBox } from './styledImageBox';

import Product from '../../../../../../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../../../../../../assets/imgs/shalwar.jpg';

const ImageBox = ({ title, image, image_list }) => {

  const [activeImg, setActiveImg] = useState(0);
  const selectImg = (index) => setActiveImg(index);

  const NextImg = () => {
    if(image_list.length - 1 > activeImg) {
      setActiveImg(activeImg + 1)
    } else {
      setActiveImg(0)
    }
  }
  
  const PrevImg = () => {
    if(activeImg > 0) {
      setActiveImg(activeImg - 1)
    } else {
      setActiveImg(image_list.length - 1)
    }
  }

  return (
    <FlexImageBox>
      <div className='right-imgbox'>
        <div className='active-img'>
          <img src={image_list[activeImg]?.img} alt={title} />
          <button className='next-img' onClick={() => NextImg()}><BsChevronRight /></button>
          <button className='prev-img' onClick={() => PrevImg()}><BsChevronLeft /></button>
        </div>

        <div className='list-img'>
          {image_list.map((item, index) => (
            <div 
              className={activeImg === index ? 'active-mini' : 'mini-img'} 
              key={index + "detail"} 
              onClick={() => selectImg(index)}
            >
              <img src={item.img} alt="mini-img" />
            </div>
          ))}
        </div>
      </div>

      <div className='left-imgbox'>
        <div className='header-detail'>
          <h2>{title}</h2>
          <div className='icons-detail'>
            <FiBookmark />
            <BiShareAlt />
            <ImWarning />
            <AiOutlineLineChart />
          </div>
        </div>

        <div className='footer-detail'>
          <h4><RiSecurePaymentLine /> ازدرگاه امن بانک پرداخت کن</h4>
        </div>
      </div>
    </FlexImageBox>
  )
}

export default ImageBox;

ImageBox.defaultProps = {
  title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
  price: 550000,
  image: Product,
  image_list: [
    {
      img: Product,
    },
    {
      img: Product2,
    },
    {
      img: Product,
    },
    {
      img: Product2,
    },
  ],
  number: 3,
}
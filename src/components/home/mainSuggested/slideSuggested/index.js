import React from 'react';
// import { BsStarFill } from 'react-icons/bs';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import product from '../../../../assets/imgs/pesteh.jpg';
import { FlexMainSlidSuggested } from './styledMainSlideSuggested';

const SlideSuggested = ({ offer, image, title, price, number, point }) => {

  const off = price * (offer / 100);
  return (
    <FlexMainSlidSuggested>
        <div className='offer-notif'>
            <h5>{offer}% OFF</h5>
            <p>فقط تا آخر خرداد</p>
        </div>

        <img src={image} alt={title} />
        
        <div className='stars'>
            {
                [...Array(5)].map((item, index) => <StarRoundedIcon className={point > index ? 'active' : 'stargray'} /> )
            }
        </div>
        
        <h2>{title}</h2>
        
        {number > 0 ?
            <p className='true'>موجود در انبار پلاست اپ</p>
            :
            <p className='noting'>ناموجود</p>
        }

        <div className='price-box'>
            {offer && <h5>{off} <span>تومان - </span></h5>}
            <h5>{price} <span>تومان</span></h5>
        </div>
    </FlexMainSlidSuggested>
  )
}

export default SlideSuggested;

SlideSuggested.defaultProps = {
    title: 'دستکش یکبار مصرف',
    image: product,
    number: 10,
    price: 160000,
    offer: 20,
    point: 3,
}
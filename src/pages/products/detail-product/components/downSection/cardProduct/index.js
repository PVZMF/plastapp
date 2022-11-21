import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { AiTwotoneShop } from 'react-icons/ai';
import { FlexCardProduct } from './styledCardProduct'
import { Link } from 'react-router-dom';

const CardProduct = ({ item }) => {
    const price = item.price * (item.offer / 100);
    const totalprice = item.price - price;

  return (
    <FlexCardProduct>
        <div className='image'>
            <img src={item.image} alt={item.title} />
        </div>

        <div className='product-data'>
            <h3>
                <Link to={`/product/${item.id}`}>{item.title}</Link>
            </h3>
            <div className='location'>
                <AiTwotoneShop />
                <p>{item.location}</p>
            </div>

            <div className='down-items'>
                <button><BsPlusLg /></button>
                <div className='price-box'>
                    {item.offer > 0 && 
                        <div className='offer'>
                            <span>{item.offer.toLocaleString('fa-IR')}%</span>
                            <del>{item.price.toLocaleString('fa-IR')}</del>
                        </div>
                    }
                    <h5>{totalprice.toLocaleString('fa-IR')} <span>تومان</span></h5>
                </div>
            </div>
        </div>
    </FlexCardProduct>
  )
}

export default CardProduct
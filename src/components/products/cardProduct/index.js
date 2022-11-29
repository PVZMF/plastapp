import React from 'react'
import { Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../toolkit/cart/cartAction';

// Icons
import { BsPlusLg, BsCartCheck } from 'react-icons/bs';
import { AiTwotoneShop } from 'react-icons/ai';
import { FlexProductCard } from './styledProductCard'

const CardProduct = ({ item }) => {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    const price = item.price * (item.offer / 100);
    const totalprice = item.price - price;

  return (
    <FlexProductCard>
        <div className='image'>
            <Link to={`/products/${item.id}`}><img src={item.image} alt={item.title} /></Link>
        </div>

        <div className='product-data'>
            <h3>
                <Link to={`/products/${item.id}`}>{item.title}</Link>
            </h3>
            <div className='location'>
                <AiTwotoneShop />
                <p>{item.location}</p>
            </div>

            <div className='down-items'>
                {state.selectedItems.find(pro => pro.id === item.id) ?
                    <button className='added'><BsCartCheck /></button>
                    :
                    <button onClick={() => dispatch(addItem(item))}><BsPlusLg /></button>
                }
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
    </FlexProductCard>
  )
}

export default CardProduct
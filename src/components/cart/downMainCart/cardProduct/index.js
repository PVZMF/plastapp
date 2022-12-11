import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusLg, BsCartCheck } from 'react-icons/bs';
import { AiTwotoneShop } from 'react-icons/ai';
import { FlexCardProduct } from './styledCardProduct'
import { addItem, setIdCart } from '../../../../toolkit/slices/cart.slice';
import { Link } from 'react-router-dom';

const CardProduct = ({ item }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    const price = item.offer? item.price * (item.offer / 100):0;
    const totalprice = item.price - price;
    const handleClick = () => {
        dispatch(addItem(item));
    }
    return (
        <FlexCardProduct>
            <div className='image'>
                <Link to={`/products/${item.id}`}><img src={item.thumbnails} alt={item.title} /></Link>
            </div>

            <div className='product-data'>
                <h3>
                    <Link to={`/products/${item.id}`}>{item.title}</Link>
                </h3>
                <div className='location'>
                    <AiTwotoneShop />
                    <p>{item.send_to_all_point?"سرار کشور":""}</p>
                </div>

                <div className='down-items'>
                    {state.selectedItems.find(pro => pro.id === item.id) ?
                        <button className='added'><BsCartCheck /></button>
                        :
                        <button onClick={() => handleClick()}> <BsPlusLg /> </button>
                    }
                    <div className='price-box'>
                        {item.offer > 0 &&
                            <div className='offer'>
                                <span>{item.offer?item.offer.toLocaleString('fa-IR'):""}%</span>
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
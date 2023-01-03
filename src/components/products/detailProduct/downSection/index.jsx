import React from 'react'
import CardProduct from '../../../cart/downMainCart/cardProduct/index.js';
import { FlexDownCart } from './styledDownCart'
import { useEffect,useState } from 'react';
import {getListProduct  } from "../../../../api/api.js";
const DownMainCart = () => {
  const [listProducts, setListProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getListProduct()
      .then((res) => {
        setListProducts(res);
        setLoading(false)
      })
      .catch((err) =>console.log(err))
  }, []);
if (loading) {
    return <h1>Loading . . .</h1>;
  }
  return (
    <FlexDownCart>
        <div className='header-suggestion'>
            <div className='right'>
                <h4>شاید بپسندید !</h4>
                <h5>محصولات با ارسال رایگان</h5>
            </div>
            <button>همه محصولات</button>
        </div>

        <div className='list-suggestion'>
            <div className='box-list'>
            {[...listProducts]
            .reverse()
            .slice(0, 6)
            .map((item) => {
              return <CardProduct key={item.id + "plastapp"} item={item} />;
            })}
            </div>
        </div>
    </FlexDownCart>
  )
}

export default DownMainCart;


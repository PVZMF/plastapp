import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardProduct from './cardProduct';
import { FlexDownCart } from './styledDownCart'
import Product from '../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../assets/imgs/shop_1.jpg';
import { getListProduct } from '../../../api/api';
import { Grid } from '@mui/material';

const DownMainCart = () => {
  const [listProducts, setListProducts] = useState();

  useEffect(() => {
    getListProduct().then(res => setListProducts(res)).catch(err => console.log(err));
  }, [])
  
  return (
    <FlexDownCart>
      <div className='header-suggestion'>
        <div className='right'>
          <h4>شاید بپسندید !</h4>
          <h5>محصولات با ارسال رایگان</h5>
        </div>
        <Link to="/products" ><button>همه محصولات</button></Link>
      </div>

      <Grid container className='list-suggestion'>
      {listProducts?.map(item => {
            return (<CardProduct key={item.id + "plastapp"} item={item} />)
        })}
      </Grid>
    </FlexDownCart>
  )
}

export default DownMainCart;
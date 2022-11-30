import React from 'react'
import { Link } from 'react-router-dom';
import CardProduct from './cardProduct';
import { FlexDownCart } from './styledDownCart'
import Product from '../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../assets/imgs/shop_1.jpg';

const DownMainCart = ({ list }) => {
  const ListSugg = [];
  return (
    <FlexDownCart>
        <div className='header-suggestion'>
            <div className='right'>
                <h4>شاید بپسندید !</h4>
                <h5>محصولات با ارسال رایگان</h5>
            </div>
            <Link to="/products" ><button>همه محصولات</button></Link>
        </div>

        <div className='list-suggestion'>
            <div className='box-list'>
                {list.map(item => {
                    ListSugg.push(item)
                    if(ListSugg.length <= 6) {
                        return (<CardProduct key={item.id + "plastapp"} item={item} />)
                    }
                })}
            </div>
        </div>
    </FlexDownCart>
  )
}

export default DownMainCart;

DownMainCart.defaultProps = {
    list: [
      {
        id: 1,
        title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
        price: 550000,
        offer: 10,
        image: Product,
        shop: 'پسته طلایی گلشن',
        number: 3,
        sendPrice: 5000,
        location: "دامغان - خشکبار عمو قاسم"
      },
  
      {
        id: 2,
        title: "شلوار اسلش مردانه سایز بزرگ 3و4 و 5(کد301)",
        price: 48000,
        offer: 0,
        image: Product2,
        shop: 'لوازم خانگی گل سرخ',
        number: 1,
        sendPrice: 4000,
        location: "تهران - لوازم خانگی گل سرخ"
      },
      {
        id: 3,
        title: "مغز  پسته 2",
        price: 550000,
        offer: 75,
        image: Product,
        shop: 'پسته طلایی',
        number: 3,
        sendPrice: 15000,
        location: "کرمان - خشکبار کرمانی"
      },
  
      {
        id: 4,
        title: "شلوار پسرانه جدید",
        price: 48000,
        offer: 8,
        image: Product2,
        shop: 'شلوار فروش',
        number: 1,
        sendPrice: 6000,
        location: "تهران - بوتیک جاوید"
      },
      {
        id: 5,
        title: "مغز  پسته مناسب مصارف قنادی",
        price: 550000,
        offer: 0,
        image: Product,
        shop: 'پسته طلایی گلشن',
        number: 3,
        sendPrice: 0,
        location: "تهران - مغازه هشمت"
      },
  
      {
        id: 6,
        title: "لباس های راحتی",
        price: 48000,
        offer: 15,
        image: Product2,
        shop: 'پسته دامغان',
        number: 1,
        sendPrice: 0,
        location: "شیراز - فلکه گاز"
      },
    ]
  }
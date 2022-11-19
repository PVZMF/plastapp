import React from 'react'
import CardProduct from './cardProduct';
import { FlexDownCart } from './styledDownCart'
import Product from '../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../assets/imgs/shalwar.jpg';

const DownMainCart = ({ list }) => {
    const ListSugg = [];
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
        location: "شیراز - فلکه گاز"
      },
    ]
  }
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { BsPlusLg, BsCartCheck } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import Profile from '../../../../../assets/imgs/shop_1.jpg';
import Product from '../../../../../assets/imgs/pesteh.jpg';
import Product2 from '../../../../../assets/imgs/shalwar.jpg';

import { FlexMainReceipt } from './styleReceipt'
import { addItem } from '../../../../../toolkit/cart/cartAction';

const Receipt = ({ ProductsList, image_profile, name_profile, shop_profile, number_product }) => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    const [item, setItem] = useState();
    const Percent = (item?.offer * 100) / item?.price;
    const total = item?.price - item?.offer;
    const Items = () => {ProductsList.map(item => {
        if(item.id !== id) {
            setItem(item)
        }
    })};
    // const price = item?.price;
    // const off = 1000000;

    useEffect(() => {
        Items()
    }, [])

  return (
    <FlexMainReceipt>
        <div className='top-receipt'>
            <h5 className='title'>فروشگاه</h5>
            
            <div className='profile'>
                <img src={item?.image} alt={item?.title} />
                <div className='box-profle'>
                    <h4>{item?.shop}</h4>
                    <h5>{item?.name_shop}</h5>
                </div>
            </div>

            <div className='btns-receipt'>
                <button className='dialogue'><BiMessageDetail /> گفت و گو</button>
                <button className='more-data'>اطلاعات بیشتر</button>
            </div>
        </div>

        <div className='down-receipt'>

            <div className='send-items'>
                <div className='send-box'>
                    <h5>ارسال از</h5>
                    <h4>{item?.state}</h4>
                </div>
                <div className='send-box'>
                    <h5>ارسال از فروشگاه</h5>
                    <h4>3 روز دیگر</h4>
                </div>
                <div className='send-box'>
                    <h5>فروش محصول</h5>
                    <h4>{item?.number.toLocaleString('fa-IR')}</h4>
                </div>
            </div>

            {/* <div className='total-amount'>
                <h5>مبلغ قابل پرداخت</h5>
                <h5>{total.toLocaleString('fa-IR')} <span>تومان</span></h5>
            </div> */}
            <div className='price-box'>
                {item?.offer > 0 && 
                    <div className='offer'>
                        <span>{Math.round(Percent).toLocaleString('fa-IR')}%</span>
                        <del>{item?.price.toLocaleString('fa-IR')}</del>
                    </div>
                }
                <h5>{total.toLocaleString('fa-IR')} <span>تومان</span></h5>
            </div>
            {state.selectedItems.find(pro => pro.id === id) ?
                    <button className='buy'><BsCartCheck /></button>
                    :
                    <button className='buy' onClick={() => dispatch(addItem(item))}><BsPlusLg /> افزودن به سبد خرید</button>
            }
            
        </div>
    </FlexMainReceipt>
  )
}

export default Receipt;

Receipt.defaultProps = {
    ProductsList: [
        {
          id: 1,
          title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
          price: 550000,
          offer: 10000,
          image: Product,
          shop: 'پسته طلایی گلشن',
          number: 3,
          location: "دامغان - خشکبار عمو قاسم",
          profile: Profile,
          name_shop: 'مغازه عمو رحیم',
          state: 'اصفهان',
        },
    
        {
          id: 2,
          title: "شلوار اسلش مردانه سایز بزرگ 3و4 و 5(کد301)",
          price: 48000,
          offer: 0,
          image: Product2,
          shop: 'لوازم خانگی گل سرخ',
          number: 1,
          location: "تهران - لوازم خانگی گل سرخ",
          profile: Profile,
          name_shop: 'مغازه عمو رحیم',
          state: 'اصفهان',
        },
        {
          id: 3,
          title: "مغز  پسته 2",
          price: 550000,
          offer: 75000,
          image: Product,
          shop: 'پسته طلایی',
          number: 3,
          location: "کرمان - خشکبار کرمانی",
          profile: Profile,
          name_shop: 'مغازه عمو رحیم',
          state: 'اصفهان',
        },
    
        {
          id: 4,
          title: "شلوار پسرانه جدید",
          price: 48000,
          offer: 80000,
          image: Product2,
          shop: 'شلوار فروش',
          number: 1,
          location: "تهران - بوتیک جاوید",
          profile: Profile,
          name_shop: 'مغازه عمو رحیم',
          state: 'اصفهان',
        },
        {
          id: 5,
          title: "مغز  پسته مناسب مصارف قنادی",
          price: 550000,
          offer: 0,
          image: Product,
          shop: 'پسته طلایی گلشن',
          number: 3,
          location: "تهران - مغازه هشمت",
          profile: Profile,
          name_shop: 'مغازه عمو رحیم',
          state: 'اصفهان',
        },
    
        {
          id: 6,
          title: "لباس های راحتی",
          price: 48000,
          offer: 15000,
          image: Product2,
          shop: 'پسته دامغان',
          number: 1,
          location: "شیراز - فلکه گاز",
          profile: Profile,
          name_shop: 'مغازه عمو رحیم',
          state: 'اصفهان',
        },
      ]
}
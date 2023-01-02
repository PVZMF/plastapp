import React, { useEffect, useState } from 'react';
// Icons
import { BiSearch } from 'react-icons/bi';
import { getOrders, myShopOrder } from '../../../api/api';
// Style
import style from './orders.module.css'
import { useSelector } from 'react-redux';
import { toPersianNumber } from '../../../functions/numbers';
import moment from 'jalali-moment';
const Orders = () => {
 const role = useSelector(state=>state.auth.role)
    const [search, setSearch] = useState('');
    const [infoOrder,setInfoOrder] = useState();
    useEffect(()=>{
       
        
             getOrders().then(res => {setInfoOrder(res)})
       
       
    },[])
    const totalCancel = infoOrder?infoOrder.reduce(((total, item) => item.payment_status === "C" ? total = total + 1 : total), 0):"";
    const totalReturned = infoOrder?infoOrder.reduce(((total, item) => item.payment_status === "F" ? total = total + 1 : total), 0):"";
    const totalCompeleted = infoOrder?infoOrder.reduce(((total, item) => item.payment_status === "P" ? total = total + 1 : total), 0):"";
    
    const getDeliveryTime = (placedAt,deliveryTime)=>{
            let startDate = new Date(placedAt.slice(0,10));
            let day = (60 * 60 * 24 * 1000) * deliveryTime;
            let endDate = new Date(startDate.getTime() + day);
            return toPersianNumber(moment(endDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'))
    }
      
    return (
        <div className={style.orders}>
            <div className={style.boxOrder}>
                <div className={style.header}>
                    <div className={style.searchbox}>
                        <span><BiSearch /></span>
                        <input type="search" onChange={(e) => setSearch(e.target.value)} />
                    </div>

                    <div className={style.items}>
                        <div className={style.item}>
                            <span>{totalCancel !=null ? totalCancel:""}</span>
                            <h5>لغو شده</h5>
                        </div>
                        <div className={style.item}>
                            <span>{totalReturned !=null? totalReturned:""}</span>
                            <h5>مرجوع شده</h5>
                        </div>
                        <div className={style.item}>
                            <span>{totalCompeleted ?totalCompeleted:""}</span>
                            <h5>فاکتورها</h5>
                        </div>
                        <div className={style.item}>
                            <span>{infoOrder?infoOrder.length:""}</span>
                            <h5>سفارشات</h5>
                        </div>
                    </div>
                </div>

                <div className={style.boxtable}>
                    <table>
                        <thead>
                            <th><h4>محصول</h4></th>
                            <th><h4>تاریخ ثبت سفارش</h4></th>
                            <th><h4>تاریخ ارسال</h4></th>
                            <th><h4>قیمت</h4></th>
                            {role=="business"?<th><h4>کمیسیون</h4></th> :""}
                            <th><h4>کد سفارش</h4></th>
                            <th><h4>نام خریدار</h4></th>
                            <th><h4>وضعیت</h4></th>
                        </thead>

                        <tbody>
                            {infoOrder?infoOrder.filter(item => {
                                if (search === '') {
                                    return item;
                                } 
                                else if (
                                     item.items[0].product.title.toLowerCase().includes(search.toLowerCase())||
                                   `${item.id}`.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return item;
                                }
                               
                            }).map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <h3>{item.items[0].product.title}</h3>
                                    </td>
                                    <td>
                                        <h3>{toPersianNumber(moment(item.placed_at.slice(0,10), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'))}</h3>
                                    </td>
                                    <td>
                                        <h3>{getDeliveryTime(item.placed_at,item.items[0].product.delivery_time)}</h3>
                                    </td>
                                    <td>
                                        <h3>{toPersianNumber(item.items[0].product.price)} تومان</h3>
                                    </td>
                            {role =="business"?<td><h3>{item.items.commission !=null? toPersianNumber(item.commission):toPersianNumber(0)}</h3></td>:""}
                                    
                                    <td><h3>{item.id}</h3>
                                    </td>
                                    <td>
                                        <h3>{item.customer}</h3>
                                    </td>
                                    <td>
                                        <h3 className={item.status === 1 ? style.itis : item.status === 0 ? style.noting : ''}>
                                            {item.payment_status === "P" && 'پرداخت شده'}
                                            {item.payment_status === "C" && 'لغو شده'}
                                            {item.payment_status === "F" && 'مرجوع شده'}
                                        </h3>
                                    </td>
                                </tr>
                            ))
                           :"" }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders;

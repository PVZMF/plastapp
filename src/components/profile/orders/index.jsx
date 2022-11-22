import React, { useEffect, useState } from 'react';
// Icons
import { BiSearch } from 'react-icons/bi';
// Style
import style from './orders.module.css'

const Orders = ({ listOrder }) => {
    
  const [search, setSearch] = useState('');

  const totalOrder = listOrder.reduce(((total, item) => item.status === 1 ? total = total + 1: total) ,0);
  const totalCancel = listOrder.reduce(((total, item) => item.status === 2 ? total = total + 1: total) ,0);
  const totalReturned = listOrder.reduce(((total, item) => item.status === 0 ? total = total + 1: total) ,0);

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
                        <span>{totalCancel}</span>
                        <h5>لغو شده</h5>
                    </div>
                    <div className={style.item}>
                        <span>{totalReturned}</span>
                        <h5>مرجوع شده</h5>
                    </div>
                    <div className={style.item}>
                        <span>{listOrder?.length}</span>
                        <h5>فاکتورها</h5>
                    </div>
                    <div className={style.item}>
                        <span>{totalOrder}</span>
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
                        <th><h4>کد سفارش</h4></th>
                        <th><h4>نام خریدار</h4></th>
                        <th><h4>وضعیت</h4></th>
                    </thead>

                    <tbody>
                        {listOrder.filter(item => {
                            if (search === '') {
                                return item;
                            } else if (
                                item.name.toLowerCase().includes(search.toLowerCase())
                            ) {
                                return item;
                            }
                            }).map(item => (
                            <tr key={item.id}>
                                <td>
                                    <h3>{item.name}</h3>
                                </td>
                                <td>
                                    <h3>{item.date}</h3>
                                </td>
                                <td>
                                    <h3>{item.date_send}</h3>
                                </td>
                                <td>
                                    <h3>{item.price.toLocaleString('fa-IR')} تومان</h3>
                                </td>
                                <td><h3>{item.code_order}</h3>
                                </td>
                                <td>
                                    <h3>{item.username}</h3>
                                </td>
                                <td>
                                    <h3 className={item.status === 1 ? style.itis : item.status === 0 ? style.noting : ''}>
                                        {item.status === 1 && 'پرداخت شده'}
                                        {item.status === 2 && 'لغو شده'}
                                        {item.status === 0 && 'مرجوع شده'}
                                    </h3>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Orders;

Orders.defaultProps = {
    listOrder: [
        {
            id: 1,
            name: 'پلاستیک فریزر',
            date: '1400/02/15',
            date_send: '1400/02/15',
            price: 50000,
            code_order: 1356,
            username: 'متین بهرامی',
            status: 1,
        },
        {
            id: 1,
            name: 'پیراهن',
            date: '1399/05/12',
            date_send: '1400/02/15',
            price: 650000,
            code_order: 2022,
            username: 'سعید کریمی',
            status: 0,
        },
        {
            id: 1,
            name: 'موبایل',
            date: '1401/12/09',
            date_send: '1400/02/15',
            price: 200000,
            code_order: 1988,
            username: 'مرضیه اسلامی',
            status: 1,
        },
        {
            id: 11,
            name: 'پلاستیک فریزر',
            date: '1400/02/15',
            date_send: '1400/02/15',
            price: 50000,
            code_order: 1356,
            username: 'متین بهرامی',
            status: 2,
        },
        {
            id: 12,
            name: 'پیراهن',
            date: '1399/05/12',
            date_send: '1400/02/15',
            price: 650000,
            code_order: 2022,
            username: 'سعید کریمی',
            status: 0,
        },
        {
            id: 13,
            name: 'موبایل',
            date: '1401/12/09',
            date_send: '1400/02/15',
            price: 200000,
            code_order: 1988,
            username: 'مرضیه اسلامی',
            status: 1,
        },
    ]
}
import React,{useEffect,useState} from 'react';
import { RiAddFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import style from './myProducts.module.css'
import {listProduct} from "../../../api/api"


const MyProducts = ({ list }) => {
    const [listProduct,setListProduct] = useState([])
// ListProduct
  useEffect(() => {
    // setLoading(true);
    MyProducts().then((results) => {
        setListProduct(results);
    })
      .finally(() => {
        console.log(listProduct);
      });
  }, []);
  return (
    <div className={style.myproducts}>
        <div className={style.products}>
            <div className={style.header}>
                <h4>محصولات من</h4>
                <Link to="/profile/addproduct"><button><RiAddFill /></button></Link>
            </div>

            <div className={style.boxtable}>
                <table>
                    <thead>
                        <th><h4>محصول</h4></th>
                        <th><h4>زمان آماده سازی</h4></th>
                        <th><h4>موجودی</h4></th>
                        <th><h4>قیمت</h4></th>
                        <th><h4>وضعیت</h4></th>
                    </thead>

                    <tbody>
                        {list.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <h3>{item.name}</h3>
                                </td>
                                <td>
                                    <h3>{item.date}</h3>
                                </td>
                                <td>
                                    <h3>{item.stock}</h3>
                                </td>
                                <td>
                                    <h3>{item.price} تومان</h3>
                                </td>
                                <td>
                                    <h3 className={item.status ? style.itis : style.noting}>
                                        {item.status ? 'موجود در انبار' : 'ناموجود'}
                                    </h3>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                    
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyProducts;

MyProducts.defaultProps = {
    list: [
        {
            id: 1,
            name: 'پلاستیک فریزر',
            date: '1400/02/15',
            stock: 100,
            price: 50000,
            status: true,
        },
        {
            id: 1,
            name: 'پیراهن',
            date: '1399/05/12',
            stock: 100,
            price: 120000,
            status: true,
        },
        {
            id: 1,
            name: 'موبایل',
            date: '1401/12/09',
            stock: 0,
            price: 50000,
            status: false,
        },
    ]
}
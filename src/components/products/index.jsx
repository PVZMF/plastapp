import React, { useState, useEffect } from 'react'
import CardProduct from './cardProduct'
import { getCategories, getListProduct } from '../../api/api'

// Style
import style from './products.module.css'


const Products = () => {
  const [categorys, setCategorys] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  
  useEffect(() => {
    //Products 
    getListProduct().then(res => {
      setListProducts(res);
      }).catch(err => console.log(err))

    // Categories
    getCategories().then((results) => {
      setCategorys(results);
    })
      .finally(() => {
      });
  }, []);



  return (
    <div className={style.products}>
      <div className={style.sidebar}>
        <div className={style.productsgroup}>
          <h5>دسته بندی محصولات</h5>
          <ul>
            {categorys.map((item, index) => (
              <li key={index + "categorys"}><p>{item.title}</p></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.productsBox}>
        <div className={style.searchbox}>
          <input type="text" placeholder='جستجو محصول' />
        </div>
        <div className={style.group_categorys}>
          <select>
            <option>انتخاب دسته بندی</option>
            {categorys.map((item, index) => (
              <option key={index + "categorys"} value={item.title}>{item.title}</option>
            ))}
          </select>
        </div>

        <div className={style.items}>
          {console.log(listProducts)}
          {listProducts.map((item, index) => {
            return (
              <CardProduct item={item} key={index + "products"} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
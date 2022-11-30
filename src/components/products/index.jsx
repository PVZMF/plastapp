import React,{useState,useEffect} from 'react'
import CardProduct from './cardProduct'
import { getCategories } from '../../api/api'
// Images
import Product from '../../assets/imgs/pesteh.jpg'
import Product2 from '../../assets/imgs/pro1.jpg'
// Style
import style from './products.module.css'




const Products = ({ listProducts }) => {
  const [categorys, setCategorys] = useState([]);
   // Categories
 useEffect(() => {
  // setLoading(true);
  getCategories().then((results) => {
    setCategorys(results);
  })
    .finally(() => {
      
    });
}, []);

  return (
    <div className={style.products}>
      { console.log(categorys)}

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
                {listProducts.map((item, index) => (
                    <CardProduct item={item} key={index + "products"} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products


Products.defaultProps = {
    listProducts: [
      {
        id: 1,
        title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
        price: 550000,
        offer: 10,
        image: Product,
        number: 3,
        location: "تهران - لوازم خانگی گل سرخ"
      },
  
      {
        id: 2,
        title: "شلوار اسلش مردانه سایز بزرگ 3و4 و 5(کد301)",
        price: 48000,
        offer: 0,
        image: Product2,
        number: 1,
        location: "تهران - لوازم خانگی گل سرخ"
      },
      {
        id: 3,
        title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
        price: 550000,
        offer: 75,
        image: Product,
        number: 3,
        location: "تهران - لوازم خانگی گل سرخ"
      },
  
      {
        id: 4,
        title: "شلوار اسلش مردانه سایز بزرگ 3و4 و 5(کد301)",
        price: 48000,
        offer: 8,
        image: Product2,
        number: 1,
        location: "تهران - لوازم خانگی گل سرخ"
      },
      {
        id: 5,
        title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
        price: 550000,
        offer: 0,
        image: Product,
        number: 3,
        location: "تهران - لوازم خانگی گل سرخ"
      },
  
      {
        id: 6,
        title: "شلوار اسلش مردانه سایز بزرگ 3و4 و 5(کد301)",
        price: 48000,
        offer: 15,
        image: Product2,
        number: 1,
        location: "تهران - لوازم خانگی گل سرخ"
      },
    ]
}
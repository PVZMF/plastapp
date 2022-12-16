import React, { useState, useEffect } from "react";
import CardProduct from "./cardProduct";
import { getCategories, getListProduct } from "../../api/api";
// Style
import style from "./products.module.css";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const navigate=useNavigate()
  const {id} = useParams();
  console.log("params = " ,id)
  const [categorys, setCategorys] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [filtterdlistProducts, setFiltterdlistProducts] = useState([]);

  useEffect(() => {

    
    //Products
    getListProduct()
      .then((res) => {
        setListProducts(res);
      })
      .catch((err) => console.log(err));

    // Categories
    getCategories()
      .then((results) => {
        setCategorys(results);
      })
      .finally(() => {});
     

    }, []);
    useEffect(()=>{
      const data=  listProducts.filter(item=>item.category.id ==parseInt(id))
      setFiltterdlistProducts(data)
    },[listProducts])
    const changeCategory =  (id)=>{
      const data=  listProducts.filter(item=>item.category.id ==parseInt(id))
      setFiltterdlistProducts(data)
      navigate(`/category/${id}/products`)
    }
 

  return (
    <div className={style.products}>
      <div className={style.sidebar}>
        <div className={style.productsgroup}>
          <h5>دسته بندی محصولات</h5>
          <ul>
          <li  onClick={()=>{changeCategory("all")}}>
                <p>همه محصولات</p>
              </li>
            {categorys.map((item, index) => (
              <li key={index + "categorys"} onClick={()=>{changeCategory(item.id)}}>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.productsBox}>
        <div className={style.searchbox}>
          <input type="text" placeholder="جستجو محصول" />
        </div>
        <div className={style.group_categorys}>
          <select onChange={(e)=>{changeCategory(e.target.value)}}>
              <option >انتخاب دسته بندی</option>
              <option value={"all"}>همه محصولات</option>
            {categorys.map((item, index) => (
              <option key={index + "categorys"} value={item.id} >
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className={style.items}>
          {console.log(listProducts)}
          {id ==="all" ?[...listProducts].reverse().map((item, index) => {
            return (
              <CardProduct
                item={item}
                key={index + "products"}
                categorys={categorys}
              />
            );
          } ) : "" }
          {id !="all"?
            [...filtterdlistProducts].reverse().map((item, index) => {
              return (
                <CardProduct
                  item={item}
                  key={index + "products"}
                  categorys={categorys}
                />
              );
            }  ):"" 
          }
        </div>
      </div>
    </div>
  );
};

export default Products;

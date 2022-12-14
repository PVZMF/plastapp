import React, { useState, useEffect } from "react";
import CardProduct from "./cardProduct";
import { getCategories, getListProduct } from "../../api/api";
// Style
import style from "./products.module.css";
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

const Products = () => {
  const location = useLocation();
 
  const navigate = useNavigate();
  const { id, shopid } = useParams();
  const [categorys, setCategorys] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [filtterdlistProducts, setFiltterdlistProducts] = useState([]);
  const [filtterdlistProductsByStore, setFiltterdlistProductsByStore] =useState([]);
  const [searchParamas, setSearchParams] = useSearchParams("");
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    //Products
    getListProduct()
      .then((res) => {
        setListProducts(res);
        if (location.pathname == `/shop/${shopid}/products`) {
          const filterByStore = res.filter((item) => item.shop.id == shopid);
          setFiltterdlistProductsByStore(filterByStore);
         
        }
        if (location.pathname == `/category/${id}/products`) {
          const data = res.filter(
            (item) => item.category.id == parseInt(id)
          );
          console.log("data is data is data ",data)
          setFiltterdlistProducts(data);
         
        }
      })
      .catch((err) =>console.log(err))

    // Categories
    getCategories()
      .then((results) => {
        setCategorys(results);
      })
      .finally(() => {});
  }, []);
 useEffect(()=>{

  if (location.pathname == `/shop/${shopid}/products`) {
    const filterByStore = listProducts.filter((item) => item.shop.id == shopid);
    setFiltterdlistProductsByStore(filterByStore);
   
  }
  if (location.pathname == `/category/${id}/products`) {
    const data = listProducts.filter(
      (item) => item.category.id == parseInt(id)
    );
    console.log("data is data is data ",data)
    setFiltterdlistProducts(data);
   
  }

 },[location.pathname])
 
  const changeCategory = (id) => {
    const data = listProducts.filter(
      (item) => item.category.id == parseInt(id)
    );
    setFiltterdlistProducts(data);
    navigate(`/category/${id}/products`);
  };
  useEffect(() => {
   
  }, [searchParamas.get("filter")]);
 
  return (
    <div className={style.products}>
      <div className={style.sidebar}>
        <div className={style.productsgroup}>
          <h5>???????? ???????? ??????????????</h5>
          <ul>
            <li
              style={
                id == "all"
                  ? { background: "#69A8FF" }
                  : { background: "white" }
              }
              onClick={() => {
                changeCategory("all");
              }}
            >
              <p>?????? ??????????????</p>
            </li>
            {categorys.map((item, index) => (
              <li
                style={
                  id == item.id && item.id != "all"
                    ? { background: "#69A8FF" }
                    : { background: "white" }
                }
                key={index + "categorys"}
                onClick={() => {
                  changeCategory(item.id);
                }}
              >
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.productsBox}>
        <div className={style.searchbox}>
          <input
            type="text"
            value={searchParamas.get("filter") || ""}
            placeholder="?????????? ??????????"
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
        </div>
        <div className={style.group_categorys}>
          <select
            onChange={(e) => {
              changeCategory(e.target.value);
            }}
          >
            <option>???????????? ???????? ????????</option>
            <option value={"all"}>?????? ??????????????</option>
            {categorys.map((item, index) => (
              <option key={index + "categorys"} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className={style.items}>
          {console.log(listProducts)}
          {id === "all" && searchParamas.get("filter") == null
            ? [...listProducts].reverse().map((item, index) => {
                return (
                  <CardProduct
                    item={item}
                    key={index + "products"}
                    categorys={categorys}
                  />
                );
              })
            : ""}
          {id != "all" && searchParamas.get("filter") == null
            ? [...filtterdlistProducts].reverse().map((item, index) => {
                return (
                  <CardProduct
                    item={item}
                    key={index + "products"}
                    categorys={categorys}
                  />
                );
               
              })
            : ""}


          {location.pathname == `/shop/${shopid}/products` &&
          filtterdlistProductsByStore != [] && searchParamas.get("filter") ==null
            ? filtterdlistProductsByStore.map((item, index) => {
                return (
                  <CardProduct
                    item={item}
                    key={index + "products"}
                    categorys={categorys}
                  />
                );
              })
            : ""}

          {/*Show all products filtered by user search  */}
          {listProducts
            .filter((item) => {
              let filter = searchParamas.get("filter");
              if (!filter) return true;
              let name = item.title.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((item, index) => {
              if (searchParamas.get("filter")) {
                return (
                  <CardProduct
                    item={item}
                    key={index + "products"}
                    categorys={categorys}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;

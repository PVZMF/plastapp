import React, { useEffect, useState, useRef } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbClipboardList } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import { provinces } from "../../../assets/citiesName/CitiesName";
import { createProduct } from "../../../api/api";
import { useDispatch } from "react-redux";
import { TbTag } from "react-icons/tb";
import { getListShops, getCategories } from "../../../api/api";

// Icons
import { BsImage } from "react-icons/bs";
// Style
import style from "./addProduct.module.css";
import { BiCategory } from "react-icons/bi";

//Icons
import { myShopInfo } from "../../../api/api";
import { CleanHands, ImagesearchRoller } from "@mui/icons-material";
import getBase64 from "../../../functions/base64";
import Spinner from "../../../assets/spinner2.gif";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const [categorys, setCategorys] = useState([]);
  const [Shops, setListShops] = useState([]);
  const [base64, setBase64] = useState([]);
  const [img, setImg] = useState([]);
  const [imgTumbNails, setImgTumbNails] = useState("");
  const inputValueRef = useRef(null);
  const deleteTumbnails = () => {
    inputValueRef.current.value = null;
    setImgTumbNails("");
  };
  const handleFileInputChange = (e) => {
    let file = e.target.files[0];
    setImg(file);
    img ? setImg([...img, { file }]) : setImg([{ file }]);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form_data = new FormData(e.target);
    // form_data.append("image",[{ image: base64, product: 2 }]);

    let data = Object.fromEntries(form_data.entries());
    form_data.append("shop", "" + myShop.id);
    form_data.append("feature", JSON.stringify(att));
    data = Object.fromEntries(form_data.entries());
    console.log("data form", data);
    data.image = [{ image: img, product: 2 }];
    data = { ...data, img };
    console.log("data is data is =", data);
    // createProduct(data)
    //   .then((result) => {
    //     toast.success("محصول با موفقیت ثبت شد");
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("محصول ثبت نشد");
    //   });
  };

  const [myShop, setMyShop] = useState([]);
  // MyShopInfo
  useEffect(() => {
    // setLoading(true);
    myShopInfo()
      .then((results) => {
        setMyShop(results);
      })
      .catch((res) => console.log(res));
  }, []);

  // ListShop
  useEffect(() => {
    // setLoading(true);
    getListShops()
      .then((results) => {
        setListShops(results);
      })
      .finally(() => {});
  }, []);

  // Categories
  useEffect(() => {
    // setLoading(true);
    getCategories()
      .then((results) => {
        setCategorys(results);
      })
      .finally(() => {
        console.log(categorys);
      });
  }, []);

  // Images
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [cities, setCities] = useState([""]);

  const handleRemoveImg = (item, i) => {
    setImg(() => {
      return img.filter((imgP, index) => {
        return imgP !== item;
      });
    });
  };

  useEffect(() => {
    console.log("img = ", img);
  }, [img]);

  // Send Data
  const [active, setActive] = useState(false);
  const handleCities = (e) => {
    setCities(
      provinces.filter((item) => item.name == e.target.value)[0].cities
    );
  };

  // Attributes
  const [att, setAtt] = useState([{ key: "", value: "", id: uuidv4() }]);

  const handleAddClick = () => {
    setAtt([...att, { id: uuidv4(), key: "", value: "" }]);
  };

  const RemoveAtt = (item) => {
    setAtt(() => {
      return att.filter((itm) => {
        return itm !== item;
      });
    });
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...att];
    list[index][name] = value;
    setAtt(list);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className={style.addProduct}
        id="form"
        enctype="multipart/form-data"
      >
        {console.log(categorys)}
        {/* NameAndGrouping */}
        <div className={style.header}>
          <h5>خانه</h5>
          <span>{">"}</span>
          <h5>افزودن محصول</h5>
        </div>
        <div className={style.name_grouping}>
          <span className={style.icon}>
            <BiCategory />
          </span>
          <div className={style.box}>
            <h5 className={style.title}>- نام و دسته بندی</h5>
            <h4>قوانین محصولات ممنوعه در پلاست اپ</h4>
            <div className={style.boxinput}>
              <label>عنوان محصول</label>
              <input name="title" type="text" placeholder="مثلا کیسه زباله" />
            </div>
            <select name={"category"} form="form">
              <option>دسته بندی</option>
              {categorys.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Images */}
        <div className={style.images}>
          <span className={style.icon}>
            <BsImage />
          </span>
          <div className={style.box}>
            <h5 className={style.title}>- تصاویر</h5>

            <h4>
              دیدن جزئیات یک محصول از زوایای مختلف و با کیفیت خوب امکان خرید آن
              را افزایش می دهد.
            </h4>
            <h4>
              <BsImage /> برای هر محصول حداقل 1 و حداکثر 6 تصویر بارگذاری کنید.
            </h4>
            <div className={style.addImg}>
              <div className={style.boximage}>
                <input
                  name="images"
                  type="file"
                  onChange={handleFileInputChange}
                />
                <BsImage />
                <p>افزودن تصویر</p>
              </div>
              <div className={style.listImage}>
                {img.map((item, index) => (
                  <div className={style.img}>
                    <button onClick={() => handleRemoveImg(item, index)}>
                      -
                    </button>
                    {item.file.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={style.addImg}>
              <div className={style.boximage}>
                <input
                  name="thumbnails"
                  type="file"
                  ref={inputValueRef}
                  onChange={(e) => {
                    setImgTumbNails(e.target.files[0]);
                  }}
                />
                <BsImage />
                <p>افزودن تصویر پیش نمایشی</p>
              </div>

              <div className={style.listImage}>
                {imgTumbNails ? (
                  <div className={style.img}>
                    <button onClick={() => deleteTumbnails()}>-</button>
                    {imgTumbNails.name}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WeightAndPrice */}
        <div className={style.weight}>
          <span className={style.icon}>
            <TbTag />
          </span>
          <div className={style.box}>
            <h5 className={style.title}>- وزن، تعداد، قیمت و موجودی</h5>
            <div className={style.boxinput}>
              <label>واحد محصول</label>
              <div className={style.input}>
                <input name="weight" type="text" />
                {/* <span>گرم</span> */}
                <select form="form" name="sales_unit" defaultValue="کیلوگرم">
                  <option value="g">گرم</option>
                  <option value="kg">کیلوگرم</option>
                  <option value="roll">رول</option>
                  <option value="box">بسته</option>
                  <option value="pocket">کارتن</option>
                  <option value="numerical">تعداد</option>
                  <option value="tom">دستگاه</option>
                </select>
              </div>
            </div>
            <div className={style.boxinput}>
              <label>قیمت محصول</label>
              <div className={style.input}>
                <input name="price" type="number" />
                <span>تومان</span>
              </div>
            </div>
            <div className={style.boxinput}>
              <label>تعداد موجودی</label>
              <input className={style.boxadd} type="number" name="inventory" />
            </div>
          </div>
        </div>

        {/* Send Data */}
        <div className={style.send}>
          <span className={style.icon}>
            <TbTruckDelivery />
          </span>
          <div className={style.box}>
            <h5 className={style.title}>- اطلاعات ارسال</h5>
            <div className={style.boxinput}>
              <label>وضعیت محصول</label>
              <select id="form" name="statusProduct">
                <option>در دسترس</option>
                <option>تمام شده</option>
              </select>
            </div>

            <div className={style.boxradio}>
              <label>محدوده ارسال</label>
              <div className={style.input}>
                <label htmlFor="allcity">به سراسر ایران</label>
                <input
                  type="radio"
                  name="send_to_all_point"
                  id="allcity"
                  onChange={(e) => setActive(false)}
                  defaultChecked
                />
              </div>
              <div className={style.input}>
                <label htmlFor="city">انتخاب شهر</label>
                <input
                  type="radio"
                  name="send_to_all_point"
                  id="city"
                  onChange={(e) => setActive(true)}
                />
              </div>
            </div>

            {active && (
              <div className={style.boxinput}>
                <label>انتخاب شهر</label>
                <select
                  onChange={(e) => handleCities(e)}
                  name="city"
                  form="form"
                  required
                >
                  <option>انتخاب استان</option>
                  {provinces.map((item) => (
                    <option key={item.name}>{item.name}</option>
                  ))}
                </select>
                <select name="city" form="form" required>
                  <option>انتخاب شهر</option>
                  {cities.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            )}

            <div className={style.boxinput}>
              <label>زمان ارسال</label>
              <div className={style.input}>
                <input name="delivery_time" type="number" />
                <span>روز</span>
              </div>
            </div>

            <div className={style.boxinput}>
              <label>هزینه ارسال</label>
              <div className={style.input}>
                <input name="delivery_cost" type="number" />
                <span>تومان</span>
              </div>
            </div>

            <div className={style.boxinput}>
              <label>شرایط ارسال</label>
              <textarea name="transition" />
            </div>
          </div>
        </div>

        {/* Attributes */}
        <div className={style.attributes}>
          <span className={style.icon}>
            <TbClipboardList />
          </span>
          <div className={style.box}>
            <h5 className={style.title}>- سایر ویژگی های محصول (اختیاری)</h5>

            <div className={style.header}>
              <h4>ویژگی محصول</h4>
              <h4>مقدار</h4>
              <button onClick={handleAddClick}>+</button>
            </div>

            {att.map((item, index) => (
              <div className={style.boxattribute}>
                <input
                  type="text"
                  placeholder="مثلا وزن خالص..."
                  name="key"
                  onChange={(e) => handleInputChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="مثلا 120 گرم"
                  name="value"
                  onChange={(e) => handleInputChange(e, index)}
                />
                <button onClick={() => RemoveAtt(item)}>-</button>
              </div>
            ))}

            <div className={style.boxinput_checked}>
              <input type="checkbox" name="credit_sale" />
              <label>امکان خرید اعتباری دارد</label>
            </div>

            <div className={style.boxinput}>
              <label>توضیحات محصول (اختیاری)</label>
              <textarea name="description" />
            </div>
          </div>
        </div>

        <div className={style.footer}>
          {loading ? (
            <button type="submit">
              <img src={Spinner} alt="spinner" />
            </button>
          ) : (
            <button type="submit">انتشار محصول</button>
          )}
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default AddProduct;

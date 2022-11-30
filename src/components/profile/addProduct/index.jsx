import React, { useEffect, useState, useRef } from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { TbClipboardList } from 'react-icons/tb';
import { v4 as uuidv4 } from "uuid";
import { provinces } from "../../../assets/citiesName/CitiesName"
import { createProduct } from "../../../api/api"
import { useDispatch } from 'react-redux';
// Components
// import NameAndGrouping from './NameAndGrouping'
// import Images from './Images'
// import WeightAndPrice from './WeightAndPrice'
import { TbTag } from 'react-icons/tb';
// import SendData from './SendData'
// import Attributes from './Attributes'
import { getCategories } from '../../../api/api'

// Icons
import { BsImage } from 'react-icons/bs';
// Style
import style from './addProduct.module.css'
import { BiCategory } from 'react-icons/bi';

//Icons

const AddProduct = () => {

  const [categorys, setCategorys] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    createProduct(data).then(result => {
      console.log(result);
    }).catch(res => console.log(res))
  }

  // Categories
  useEffect(() => {
    // setLoading(true);
    getCategories().then((results) => {
      setCategorys(results);
    })
      .finally(() => {
        console.log(categorys);
      });
  }, []);


  // Images
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [cities, setCities] = useState([""])
  const handleFileChange = ({ target }) => {
    const imgUrl = fileInputRef.current.value;
    let imageFile = target.files[0];

    if (imageFile == null) return;
    setImages((prev) => {
      if (
        images.find((img) =>
          img.name === imageFile.name) ||
        imgUrl.file === ""
      ) {
        return [...prev];
      }
      return [
        ...prev,
        {
          // url: objectUrl,
          file: imageFile,
        },
      ];
    });
  };

  const handleRemoveImg = (item, i) => {
    setImages(() => {
      return images.filter((img, index) => {
        return img !== item;
      });
    });
  };

  // Send Data 
  const [active, setActive] = useState(true);
  const handleCities = (e) => {
    setCities(provinces.filter(item => item.name == e.target.value)[0].cities);
  }

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
    <form onSubmit={handleSubmit} className={style.addProduct} id="form">

      {/* NameAndGrouping */}
      <div className={style.header}>
        <h5>خانه</h5><span>{'>'}</span><h5>افزودن محصول</h5>
      </div>
      <div className={style.name_grouping}>
        <span className={style.icon}><BiCategory /></span>
        <div className={style.box}>
          <h5 className={style.title}>- نام و دسته بندی</h5>
          <h4>قوانین محصولات ممنوعه در پلاست اپ</h4>
          <div className={style.boxinput}>
            <label>عنوان محصول</label>
            <input name='titleProduct' type="text" placeholder='مثلا کیسه زباله' />
          </div>
          <select>
            <option>انتخاب دسته بندی</option>
            {categorys.map(item => (
              <option key={item.id} value={item.title}>{item.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Images */}
      <div className={style.images}>
        <span className={style.icon}><BsImage /></span>
        <div className={style.box}>
          <h5 className={style.title}>- تصاویر</h5>
          <h4>دیدن جزئیات یک محصول از زوایای مختلف و با کیفیت خوب امکان خرید آن را افزایش می دهد.</h4>
          <h4><BsImage /> برای هر محصول حداقل 1 و حداکثر 6 تصویر بارگذاری کنید.</h4>

          <div className={style.addImg}>
            <div className={style.boximage}>
              <input name="pictures" type='file' ref={fileInputRef} onChange={handleFileChange} />
              <BsImage />
              <p>افزودن تصویر</p>
            </div>

            <div className={style.listImage}>
              {images.map((item, index) => (
                <div className={style.img}>
                  <button onClick={() => handleRemoveImg(item, index)}>-</button>
                  {item.file.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WeightAndPrice */}
      <div className={style.weight}>
        <span className={style.icon}><TbTag /></span>
        <div className={style.box}>
          <h5 className={style.title}>- وزن، تعداد، قیمت و موجودی</h5>
          <div className={style.boxinput}>
            <label>واحد محصول</label>
            <div className={style.input}>
              <input name="weight" type="text" />
              {/* <span>گرم</span> */}
              <select form='form' name='unitWeight' defaultValue="کیلوگرم">
                <option value="گرم">گرم</option>
                <option value="کیلوگرم">کیلوگرم</option>
                <option value="رول">رول</option>
                <option value="بسته">بسته</option>
                <option value="کارتن">کارتن</option>
                <option value="تعداد">تعداد</option>
                <option value="دستگاه">دستگاه</option>
              </select>
            </div>
          </div>
          {/* <div className={style.boxinput}>
                <label>وزن با دسته بندی</label>
                <div className={style.input}>
                    <input type="text" />
                    <span>گرم</span>
                </div>
                <p>- وزن خالص محصول به اضافه وزن کارتن بسته بندی را اینجا ثبت کنید.</p>
                <p>- این وزن در محاسبه هزینه ارسال اهمیت دارد.</p>
            </div> */}
          <div className={style.boxinput}>
            <label>قیمت محصول</label>
            <div className={style.input}>
              <input value="price" type="text" />
              <span>تومان</span>
            </div>
          </div>

          <div className={style.boxinput}>
            <label>قیمت محصول با تخفیف (اختیاری)</label>
            <div className={style.input}>
              <input name="priceOffer" type="text" />
              <span>تومان</span>
            </div>
          </div>

          <div className={style.boxinput}>
            <label>تعداد موجودی</label>
            <div className={style.boxadd}>
              <button>+</button>
              <span>10</span>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>

      {/* Send Data */}
      <div className={style.send}>
        <span className={style.icon}><TbTruckDelivery /></span>
        <div className={style.box}>
          <h5 className={style.title}>- اطلاعات ارسال</h5>
          <div className={style.boxinput}>
            <label>وضعیت محصول</label>
            <select id='form' name="statusProduct">
              <option>در دسترس</option>
              <option>تمام شده</option>
            </select>
          </div>

          <div className={style.boxradio}>
            <label>محدوده ارسال</label>
            <div className={style.input}>
              <label htmlFor="allcity">به سراسر ایران</label>
              <input type="radio" name='allCity' id='allcity' value={true} onChange={(e) => setActive(e.target.value)} defaultChecked />
            </div>
            <div className={style.input}>
              <label htmlFor="city">انتخاب شهر</label>
              <input type="radio" name='allCity' id='city' value={false} onChange={(e) => setActive(e.target.value)} />
            </div>
          </div>

          <div className={style.boxinput}>
            <label>انتخاب شهر</label>
            <select onChange={e => handleCities(e)} name='city' form='form' required>
              <option>انتخاب استان</option>
              {provinces.map(item => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
            <select name='city' form='form' required>
              <option>انتخاب شهر</option>
              {cities.map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Attributes */}
      <div className={style.attributes}>
        <span className={style.icon}><TbClipboardList /></span>
        <div className={style.box}>
          <h5 className={style.title}>- سایر ویژگی های محصول (اختیاری)</h5>

          <div className={style.header}>
            <h4>ویژگی محصول</h4>
            <h4>مقدار</h4>
            <button onClick={handleAddClick}>+</button>
          </div>

          {att.map((item, index) => (
            <div className={style.boxattribute}>
              <input type="text" placeholder='مثلا وزن خالص...' name='key' onChange={(e) => handleInputChange(e, index)} />
              <input type="text" placeholder='مثلا 120 گرم' name='value' onChange={(e) => handleInputChange(e, index)} />
              <button onClick={() => RemoveAtt(item)}>-</button>
            </div>
          ))}

          <div className={style.boxinput_checked}>
            <input type="checkbox" />
            <label>امکان خرید اعتباری دارد</label>
          </div>

          <div className={style.boxinput}>
            <label>توضیحات محصول (اختیاری)</label>
            <textarea />
          </div>

        </div>
      </div>

      <div className={style.footer}>
        <button type="submit">انتشار محصول</button>
      </div>
    </form>
  )
}

export default AddProduct
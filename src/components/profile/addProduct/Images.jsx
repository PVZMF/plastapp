import React, { useRef, useState } from 'react';
import { BsImage } from 'react-icons/bs';
import style from './addProduct.module.css';

const Images = ({ list }) => {

  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
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

  return (
    <div className={style.images}>
      <span className={style.icon}><BsImage /></span>
      <div className={style.box}>
        <h5 className={style.title}>- تصاویر</h5>
        <h4>دیدن جزئیات یک محصول از زوایای مختلف و با کیفیت خوب امکان خرید آن را افزایش می دهد.</h4>
        <h4><BsImage /> برای هر محصول حداقل 1 و حداکثر 6 تصویر بارگذاری کنید.</h4>

        <div className={style.addImg}>
          <div className={style.boximage}>
            <input type='file' ref={fileInputRef} onChange={handleFileChange} />
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
  )
}

export default Images;

Images.defaultProps = {
  list: [
    {
      id: '1',
      name: 'محصولات نایلون و نایلکس'
    },
    {
      id: '2',
      name: 'محصولات سلولزی'
    },
    {
      id: '3',
      name: 'محصولات یک‌بار مصرف'
    },
    {
      id: '4',
      name: 'محصولات خانه و آشپزخانه'
    },
    {
      id: '5',
      name: 'محصولات بهداشت و حمام'
    },
    {
      id: '6',
      name: ' سفارشات چاپی'
    },
    {
      id: '7',
      name: ' مواد اولیه'
    },
    {
      id: '8',
      name: ' تجهیزات و دستگاه خط تولید'
    },
  ]
}
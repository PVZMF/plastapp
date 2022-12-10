import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { ImWarning } from "react-icons/im";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { getProductDetail } from "../../../../../../../api/api";

import { FlexImageBox } from "./styledImageBox";

import Product from "../../../../../../../assets/imgs/pesteh.jpg";
import Product2 from "../../../../../../../assets/imgs/shalwar.jpg";

const ImageBox = ({ detail }) => {
  const [activeImg, setActiveImg] = useState(0);
  const selectImg = (index) => setActiveImg(index);

  // temp
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    getProductDetail(id).then((res) => setProductDetail(res));
  }, []);

  console.log("Detail >>>", detail);

  //temp

  const NextImg = () => {
    if (detail?.images.length - 1 > activeImg) {
      setActiveImg(activeImg + 1);
    } else {
      setActiveImg(0);
    }
  };

  const PrevImg = () => {
    if (activeImg > 0) {
      setActiveImg(activeImg - 1);
    } else {
      setActiveImg(detail?.images.length - 1);
    }
  };

  const src = detail?.images[activeImg]?.img;
  const [styleImg, setStyleImg] = useState({
    backgroundImage: `url('${src}')`,
    backgroundPosition: "700% 200%",
  });
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyleImg({ backgroundPosition: `${x}% ${y}% !important` });
  };

  return (
    <FlexImageBox>
      <div className="right-imgbox">
        <div
          className="active_img"
          onMouseMove={(e) => handleMouseMove(e)}
          style={styleImg}
        >
          <img src={detail?.thumbnails} alt={detail?.title} />
          <button className="next-img" onClick={() => NextImg()}>
            <BsChevronRight />
          </button>
          <button className="prev-img" onClick={() => PrevImg()}>
            <BsChevronLeft />
          </button>
        </div>

        <div className="list-img">
          {detail?.images.map((item, index) => (
            <div
              className={activeImg === index ? "active-mini" : "mini-img"}
              key={index + "detail"}
              onClick={() => selectImg(index)}
            >
              <img src={item.image} alt="mini-img" />
            </div>
          ))}
        </div>
      </div>

      <div className="left-imgbox">
        <div className="header-detail">
          <h2>{detail?.title}</h2>
          <div className="icons-detail">
            <FiBookmark />
            <BiShareAlt />
            <ImWarning />
            <AiOutlineLineChart />
          </div>
        </div>

        <div className="footer-detail">
          <h4>
            <RiSecurePaymentLine /> ازدرگاه امن بانک پرداخت کن
          </h4>
          {detail?.credit_sale && (
            <h4>
              <RiSecurePaymentLine /> امکان خرید اعتباری
            </h4>
          )}
        </div>
      </div>
    </FlexImageBox>
  );
};

export default ImageBox;

ImageBox.defaultProps = {
  title: "مغز  پسته مناسب مصارف قنادی و ... با ارسال رایگان(500 گرمی)",
  price: 550000,
  image: Product,
  image_list: [
    {
      img: Product,
    },
    {
      img: Product2,
    },
    {
      img: Product,
    },
    {
      img: Product2,
    },
  ],
  number: 3,
};

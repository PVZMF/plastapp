import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icons
import { BsChevronLeft, BsBox, BsChevronDown } from 'react-icons/bs';
import { BiCategory, BiUserPin, BiStore, BiSupport } from 'react-icons/bi';
import { IoWallet, IoReceiptOutline, IoCloseSharp } from 'react-icons/io5';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';

// Images
import Shop from '../../../assets/imgs/adImage.png';

// Style
import style from './sidebar.module.css';

const MobileMenu = ({ ProfileImage, shopName, userName, cash, setMenu }) => {

    const [active, setActive] = useState(false);
    const pathName = useLocation().pathname;

  return (
    <div className={style.sidebar}>
        <div className={style.header}>
            <button onClick={() => setMenu(false)}><IoCloseSharp /></button>
        </div>
        <div className={style.details}>
            <div className={style.boxProfile}>
                <div className={style.profile}>
                    <img src={ProfileImage} alt={shopName} />
                    <div className={style.name}>
                        <h2>{shopName}</h2>
                        <h3>{userName}</h3>
                    </div>
                </div>
                <span><BsChevronLeft /></span>
            </div>
            <div className={style.boxwallet}>
                <div className={style.wallet}>
                    <h4><IoWallet /> کیف پول</h4>
                    <h5>{cash.toLocaleString('fa-IR')} <span>تومان</span></h5>
                </div>
                <span><BsChevronLeft /></span>
            </div>
        </div>


        <div className={style.items}>
            <h5 className={pathName === '/profile/addproduct' ? style.active : null}
             onClick={() => setMenu(false)}
            >
                <Link to='/profile/addproduct'><BiCategory /> افزودن محصول</Link>
            </h5>
            <h5 className={pathName === '/profile/myproducts' ? style.active : null}
             onClick={() => setMenu(false)}
            >
                <Link to='/profile/myproducts'><BsBox /> محصولات</Link>
            </h5>
            <h5 className={pathName === '/profile/orders' ? style.active : null}
             onClick={() => setMenu(false)}
            >
                <Link to="/profile/orders"><HiOutlineClipboardList /> سفارشات</Link>
            </h5>
            <div className={style.submenu}>
                <div className={style.h5box} onClick={() => setActive(!active)}>
                    <h5><BiSupport /> پشتیبانی</h5>
                    <span style={{transform: active ? 'rotate(180deg)' : 'rotate(0)'}}><BsChevronDown /></span>
                </div>
                <ul className={active ? style.down : null}>
                    <li>
                        <Link to="/support"><BiSupport /> تماس با پشتیبانی</Link>
                    </li>
                    <li>
                        <Link to="/support/newticket"><BiSupport /> ارسال تیکت</Link>
                    </li>
                    <li>
                        <Link to="/support/ticketslist"><BiSupport /> تیکت های من</Link>
                    </li>
                </ul>
            </div>
        </div>


        <div className={style.finish}>
            <div className={style.itemFinish}>
                <TbTruckDelivery />
                <div className={style.data}>
                    <h3>روش و هزینه های ارسال</h3>
                    <h4>روش،محدوده و هزینه ی ارسال</h4>
                </div>
            </div>
            <div className={style.itemFinish}>
                <IoReceiptOutline />
                <div className={style.data}>
                    <h3>تسویه حساب و امورمالی</h3>
                    <h4>شماره حساب، تسویه و تاریخچه مالی</h4>
                </div>
            </div>
            <div className={style.itemFinish}>
                <BiUserPin />
                <div className={style.data}>
                    <h3>مشتریان</h3>
                    <h4>لیست مشتریان، لیست تجربه خریدها</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu;

MobileMenu.defaultProps = {
    ProfileImage: Shop,
    userName: 'پلاست اپ',
    shopName: 'کیان کرم پور',
    cash: 1000000,
}
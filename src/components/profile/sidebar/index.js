import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icons
import { BsChevronLeft, BsBox, BsChevronDown } from 'react-icons/bs';
import { BiCategory, BiUserPin, BiSupport } from 'react-icons/bi';
import { IoWallet, IoReceiptOutline } from 'react-icons/io5';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import { setMyShop } from '../../../toolkit/slices/MyShop.slice';
// Images
import Shop from '../../../assets/imgs/adImage.png';

// Style
import style from './sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { isPending } from '@reduxjs/toolkit';
import { myShopInfo } from '../../../api/api';

const Sidebar = ({ ProfileImage, shopName, cash }) => {
    const pathName = useLocation().pathname;
    const auth = useSelector(state => state.auth);
    const [active, setActive] = useState(false);
    const [myShop, setMyShop] = useState([]);
    // const myShop2 = useSelector(state => state.myShop)
    // const dispatch = useDispatch();

    // MyShopInfo
    useEffect(() => {
        // setLoading(true);
        myShopInfo().then((results) => {
            setMyShop(results);
        }).catch(res => console.log(res))
    }, []);


    return (
        <div className={style.sidebar}>
            <div className={style.details}>
                <div className={style.boxProfile}>
                    <div className={style.profile}>
                        <img src={myShop.logo} alt={myShop.name} />
                        <div className={style.name}>
                            <h2>{!auth.rule ? "کاربر" : myShop.name}</h2>
                            <h3>{!auth.rule ? auth.username : [myShop.first_name+" "+myShop.last_name]}</h3>
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
                {auth.rule ? <h5 className={pathName === '/profile/addproduct' ? style.active : null}>
                    <Link to='/profile/addproduct'><BiCategory /> افزودن محصول</Link>
                </h5> : ""}
                {auth.rule ? <h5 className={pathName === '/profile/myproducts' ? style.active : null}>
                    <Link to='/profile/myproducts'><BsBox /> محصولات</Link>
                </h5> : ""}
                <h5 className={pathName === '/profile/orders' ? style.active : null}>
                    <Link to="/profile/orders"><HiOutlineClipboardList /> سفارشات</Link>
                </h5>
                <div className={style.submenu}>
                    <div className={style.h5box} onClick={() => setActive(!active)}>
                        <h5><BiSupport /> پشتیبانی</h5>
                        <span style={{ transform: active ? 'rotate(180deg)' : 'rotate(0)' }}><BsChevronDown /></span>
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

export default Sidebar;

Sidebar.defaultProps = {
    ProfileImage: Shop,
    userName: 'پلاست اپ',
    shopName: 'کیان کرم پور',
    cash: 1000000,
}
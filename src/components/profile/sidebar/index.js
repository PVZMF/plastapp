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
import { myShopInfo, infoAccount } from '../../../api/api';

const Sidebar = ({ ProfileImage, shopName, cash }) => {
    const pathName = useLocation().pathname;
    const auth = useSelector(state => state.auth);
    const [active, setActive] = useState(false);
    const [myShop, setMyShop] = useState([]);
    const [info, setInfo] = useState([]);
    // const myShop2 = useSelector(state => state.myShop)
    // MyShopInfo
    useEffect(() => {
        // setLoading(true);
        myShopInfo().then((results) => {
            setMyShop(results);
        }).catch(res =>console.log(res))

        infoAccount().then((results) => {
            setInfo(results);
        }).catch(res =>console.log(res))
    }, []);

    return (
        <div className={style.sidebar}>
            <div className={style.details}>
                <div className={style.boxProfile}>
                    <div className={style.profile}>
                        {auth.role === "business" ? <img src={myShop.logo} alt={myShop.name} /> : null}
                        <div className={style.name}>
                            <h2>{auth.role === "business" ? myShop.name : [info.first_name + " " + info.last_name]}</h2>
                            <h3>{auth.role === "business" ? [info.first_name + " " + info.last_name] : info.phone_number}</h3>
                        </div>
                    </div>
                    <span><BsChevronLeft /></span>
                </div>
                <div className={style.boxwallet}>
                    <div className={style.wallet}>
                        <h4><IoWallet /> ?????? ??????</h4>
                        <h5>{info.user_wallet} <span>??????????</span></h5>
                    </div>
                    <span><BsChevronLeft /></span>
                </div>
            </div>


            <div className={style.items}>
                {auth.role === "business" ? <h5 className={pathName === '/profile/addproduct' ? style.active : null}>
                    <Link to='/profile/addproduct'><BiCategory /> ???????????? ??????????</Link>
                </h5> : ""}
                {auth.role === "business" ? <h5 className={pathName === '/profile/myproducts' ? style.active : null}>
                    <Link to='/profile/myproducts'><BsBox /> ??????????????</Link>
                </h5> : ""}
                <h5 className={pathName === '/profile/orders' ? style.active : null}>
                    <Link to="/profile/orders"><HiOutlineClipboardList /> ??????????????</Link>
                </h5>
                <div className={style.submenu}>
                    <div className={style.h5box} onClick={() => setActive(!active)}>
                        <h5><BiSupport /> ????????????????</h5>
                        <span style={{ transform: active ? 'rotate(180deg)' : 'rotate(0)' }}><BsChevronDown /></span>
                    </div>
                    <ul className={active ? style.down : null}>
                        <li>
                            <Link to="/support"><BiSupport /> ???????? ???? ????????????????</Link>
                        </li>
                        <li>
                            <Link to="/support/newticket"><BiSupport /> ?????????? ????????</Link>
                        </li>
                        <li>
                            <Link to="/support/ticketslist"><BiSupport /> ???????? ?????? ????</Link>
                        </li>
                    </ul>
                </div>
            </div>


            {auth.role === "business"?
                <div className={style.finish}>
                    <Link to='/profile/sendprice'>
                        <div className={style.itemFinish}>
                            <TbTruckDelivery />
                            <div className={style.data}>
                                <h3>?????? ?? ?????????? ?????? ??????????</h3>
                                <h4>???????????????????? ?? ?????????? ?? ??????????</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to='/profile/finances'>
                        <div className={style.itemFinish}>
                            <IoReceiptOutline />
                            <div className={style.data}>
                                <h3>?????????? ???????? ?? ????????????????</h3>
                                <h4>?????????? ?????????? ?????????? ?? ?????????????? ????????</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to='/profile/customers'>
                        <div className={style.itemFinish}>
                            <BiUserPin />
                            <div className={style.data}>
                                <h3>??????????????</h3>
                                <h4>???????? ???????????????? ???????? ?????????? ????????????</h4>
                            </div>
                        </div>
                    </Link>
                </div>
                :
                null
            }
        </div>
    )
}

export default Sidebar;


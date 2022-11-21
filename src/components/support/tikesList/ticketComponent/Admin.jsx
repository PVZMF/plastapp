import React from 'react';
import Profile from '../../../../assets/imgs/detective.png';
import style from './ticketComponent.module.css';

const Admin = ({ item }) => {
  return (
    <div className={style.admin}>
        <div className={style.textbox}>
            <h4 className={style.title}>پلاست اپ | <span>{item.name}</span></h4>
            <div className={style.boxmessage}>
                <p>{item.text}</p>
            </div>
        </div>
        <div className={style.image}>
            <img src={item.profile ? item.profile : Profile} alt="admin" />
        </div>
    </div>
  )
}

export default Admin
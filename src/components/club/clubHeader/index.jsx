import React from 'react';
import style from './clubHeader.module.css';
import Logo from '../../../assets/imgs/logo.svg';
import ImgClub from '../../../assets/imgs/card-logo.webp';
import Point from '../../../assets/imgs/coins.webp';

const ClubHeader = () => {
  return (
      <div className={style.boxHeader}>
        <div className={style.clubHeader}>
            <h3>باشگاه مشتریان</h3>
            <img src={Logo} alt="plastapp" />
            <img src={ImgClub} alt="plastapp" />
        </div>

        <div className={style.point}>
            <h3>امتیاز شما:</h3>
            <h2>1500</h2>
            <img src={Point} alt="coin" />
        </div>
      </div>
  )
}

export default ClubHeader
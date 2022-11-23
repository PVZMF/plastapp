import React from 'react';
import ClubHeader from './clubHeader';
import OfferCards from './offerCards';
import style from './club.module.css';

const Club = () => {
  return (
    <div className={style.club}>
        <ClubHeader />
        <OfferCards
          requestForOffer={'5000'}
          errors={1}
          offerCodes={'1200'}
        />
    </div>
  )
}

export default Club
import React from 'react';
import { Link } from 'react-router-dom';

// Style
import { FlexMainTikesList } from './styledMainTikesList.js'
import Ticket from './Ticket.js';

const TikesListComponent = () => {
  return (
    <FlexMainTikesList>
      <div className='box-ticket'>

        <div className='header-tikes'>
          <h4>لیست درخواست های پشتیبانی</h4>
        </div>

        <div className='search-ticket'>
          <input type={'text'} placeholder='جستجو در عنوان...' />
          <button><Link to={'/newticket'}>ثبت درخواست جدید</Link></button>
        </div>

        <div className='list-ticket'>
          <div className='titles'>
              <div><h5>عنوان</h5></div>
              <div><h5>شماره</h5></div>
              <div><h5>تاریخ ثبت</h5></div>
              <div><h5>تاریخ به روزرسانی</h5></div>
              <div><h5>وضعیت</h5></div>
          </div>

          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>

      </div>
    </FlexMainTikesList>
  )
}

export default TikesListComponent
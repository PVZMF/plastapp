import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import { FlexMainTikesList } from './styledMainTikesList.js'
import Ticket from './Ticket.js';

const TikesListComponent = ({ list }) => {

  const [search, setSearch] = useState('');
  const [newitems, setNewitems] = useState([]);

  useEffect(() => {
    setNewitems([])
  }, [search])

  return (
    <FlexMainTikesList>
      <div className='box-ticket'>

        <div className='header-tikes'>
          <h4>لیست درخواست های پشتیبانی</h4>
        </div>

        <div className='search-ticket'>
          <input type={'text'} placeholder='جستجو در عنوان...' onChange={(e) => setSearch(e.target.value)} />
          <button><Link to={'/support/newticket'}>ثبت درخواست جدید</Link></button>
        </div>

        <div className='box-list-ticket'>
          <div className='list-ticket'>
            <div className='titles'>
                <div><h5>عنوان</h5></div>
                <div><h5>شماره</h5></div>
                <div><h5>تاریخ ثبت</h5></div>
                <div><h5>تاریخ به روزرسانی</h5></div>
                <div><h5>وضعیت</h5></div>
            </div>

            {list.filter(item => {
              if (search === '') {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            }).map(item => {
              newitems.push(item)
              {console.log(`/support/ticketsList/`+item.id)}
              return <Link to={`/support/ticketsList/`+item.id} key={item.id} className='link-ticket'><Ticket item={item} /></Link>
            })}

            {/* {newitems.length === 0 && <div className='notFound'><h3>چیزی یافت نشد</h3></div>} */}
          </div>
        </div>

      </div>
    </FlexMainTikesList>
  )
}

export default TikesListComponent;

TikesListComponent.defaultProps = {
  list : [
    {
      id: "1",
      title: 'درخواست فاکتور رسمی',
      number: '۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 2,
    },
    {
      id: "2",
      title: 'عدم انتقال تماس به داخلی ها',
      number: '۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 1,
    },
    {
      id: "3",
      title: 'تماس های خروجی',
      number: '۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 1,
    },
    {
      id: "4",
      title: 'درخواست فاکتور رسمی',
      number: '۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 2,
    },
  ]
}
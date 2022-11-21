import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Admin from './Admin';
import style from './ticketComponent.module.css'
import User from './User';

const TicketComponent = ({ list }) => {
  
  const [data, setData] = useState();
  const pathName = useParams();

  const fetchData = () => {
    list?.map(item => {
      if(item.id === pathName.id) {
        setData(item);
      }
    });
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(data)

  return (
    <div className={style.ticket}>
      <div className={style.box_ticket}>

        <div className={style.header}>
          <div className={style.message}>
            <h5>{data?.title}</h5>
            <h4>تیکت {data?.number.toLocaleString('fa-IR')}</h4>
          </div>
          <div className={style.status}>
            <h5>وضعیت تیکت  <span>تکمیل شده</span></h5>
            <h5>زمان ایجاد  <span>{data?.date.toLocaleString('fa-IR')}</span></h5>
          </div>
        </div>

        <div className={style.chats}>
          {data?.dialog.map(item => (
            item.position === 'user' ?
              <User key={item.id} item={item} />
              :
              <Admin key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TicketComponent;

TicketComponent.defaultProps = {
  message: 'عدم دسترسی به mailservice',
  number: 123545,
  date_start: '1400/12/05',
  list : [
    {
      id: "1",
      title: 'درخواست فاکتور رسمی',
      number: '۲۴۲۴۲۴۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 2,
      dialog: [
        {
          id: 'd1',
          text: 'با سلام و احترام؛ در حال حاضر پیرو بررسی صورت گرفته در DNS های دامنه علاوه بر DNS های CDN ایرانسرور - DNS های Cloudflare نیز تنظیم شده است که این مورد صحیح نمی باشد.',
          position: 'admin',
          name: 'علی راستگو'
        },
        {
          id: 'd2',
          text: 'سپاس مشکل حل شد.',
          position: 'user',
          name: 'مجید اکبری'
        },
        {
          id: 'd3',
          text: 'خواهش میکنم.',
          position: 'admin',
          name: 'علی راستگو'
        }
      ]
    },
    {
      id: "2",
      title: 'عدم انتقال تماس به داخلی ها',
      number: '۲۴۲۴۲۴۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 1,
      dialog: [
        {
          id: 'd1',
          text: 'با سلام و احترام؛ در حال حاضر پیرو بررسی صورت گرفته در DNS های دامنه علاوه بر DNS های CDN ایرانسرور - DNS های Cloudflare نیز تنظیم شده است که این مورد صحیح نمی باشد.',
          position: 'admin',
          name: 'علی راستگو'
        },
        {
          id: 'd2',
          text: 'سپاس مشکل حل شد.',
          position: 'user',
          name: 'مجید اکبری'
        },
        {
          id: 'd3',
          text: 'خواهش میکنم.',
          position: 'admin',
          name: 'علی راستگو'
        }
      ]
    },
    {
      id: "3",
      title: 'تماس های خروجی',
      number: '۲۴۲۴۲۴۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 1,
      dialog: [
        {
          id: 'd1',
          text: 'با سلام و احترام؛ در حال حاضر پیرو بررسی صورت گرفته در DNS های دامنه علاوه بر DNS های CDN ایرانسرور - DNS های Cloudflare نیز تنظیم شده است که این مورد صحیح نمی باشد.',
          position: 'admin',
          name: 'علی راستگو'
        },
        {
          id: 'd2',
          text: 'سپاس مشکل حل شد.',
          position: 'user',
          name: 'مجید اکبری'
        },
        {
          id: 'd3',
          text: 'خواهش میکنم.',
          position: 'admin',
          name: 'علی راستگو'
        }
      ]
    },
    {
      id: "4",
      title: 'درخواست فاکتور رسمی',
      number: '۲۴۲۴۲۴۲۴',
      date: '1400/05/12',
      update: '1401/12/12',
      status: 2,
      dialog: [
        {
          id: 'd1',
          text: 'با سلام و احترام؛ در حال حاضر پیرو بررسی صورت گرفته در DNS های دامنه علاوه بر DNS های CDN ایرانسرور - DNS های Cloudflare نیز تنظیم شده است که این مورد صحیح نمی باشد.',
          position: 'admin',
          name: 'علی راستگو'
        },
        {
          id: 'd2',
          text: 'سپاس مشکل حل شد.',
          position: 'user',
          name: 'مجید اکبری'
        },
        {
          id: 'd3',
          text: 'خواهش میکنم.',
          position: 'admin',
          name: 'علی راستگو'
        }
      ]
    },
  ],
}
import React from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Ticket = ({ title, number, date, update, status }) => {
  return (
    <div className='ticket'>
            <div>
                {status === 1 ? 
                    <span className='status1'><SettingsRoundedIcon /></span> 
                    : 
                    <span className='status2'><MailOutlineRoundedIcon /></span> 
                }
                <h4>{title}</h4>
            </div>
            <div><h4>{number}</h4></div>
            <div><h4>{date}</h4></div>
            <div><h4>{update}</h4></div>
            <div>
                <h4>
                    {status === 1 && 'درحال بررسی'}
                    {status === 2 && 'بسته شده'}
                </h4>
            </div>
    </div>
  )
}

export default Ticket;

Ticket.defaultProps = {
    title: 'درخواست فاکتور رسمی',
    number: '۲۴',
    date: '1400/05/12',
    update: '1401/12/12',
    status: 1,
}
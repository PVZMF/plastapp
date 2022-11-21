import React from 'react';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
// Style
import style from './style.module.css'

const NewTicketComponent = () => {
  return (
    <div className={style.newticket}>
      <div className={style.box_ticket}>
        <div className={style.header_tikes}>
          <h4>ثبت درخواست جدید</h4>
        </div>
        
      <form>
        <div className={style.box_input}>
          <label>عنوان <span>*</span></label>
          <input type="text" required />
        </div>

        <div className={style.box_input}>
          <textarea placeholder='متن پیام شما...' />
        </div>

        <div className={style.footer}>
          <div className={style.import}>
            <label>
              بارگزاری فایل <AttachFileRoundedIcon />
              <input type="file" />
            </label>
            <p>شرایط فایل بارگزاری شده</p>
          </div>

          <button>ثبت</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default NewTicketComponent;
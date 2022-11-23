import React from 'react';
import Input from './Input';
import JobImg from '../../assets/imgs/shop_1.jpg'
// Icons
import { ImUserTie } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';

// Style
import style from './careerOpportunity.module.css'

const Career_Opportunity = ({ description, jobs }) => {
  return (
    <div className={style.jobs}>
        <div className={style.title}>
            <h3>فرصت های شغلی</h3>
        </div>

        <div className={style.jobsBox}>
            <div className={style.imageBox}>
                <img src={JobImg} alt="career opportunity" />
            </div>

            <div className={style.formBox}>
                <p>{description}</p>
                <hr />
                
                <form>
                    <Input title='نام و نام خانوادگی' icon={<ImUserTie />} />
                    <Input title='شماره تماس' icon={<BsTelephoneFill />} type='tel' />
                    <Input title='ایمیل' icon={<MdEmail />} type='email' />
                    <Input title='مدرک تحصیلی' icon={<TbCertificate />} />
                    <Input title='ارسال رزومه' icon={<TbCertificate />} type='file' placeholder='ارسال فایل رزومه' />
                    <div className={style.selectbox}>
                        <label>انتخاب فرصت شغلی</label>
                        <select>
                            {jobs.map(item => (<option value={item.value}>{item.name}</option>))}
                        </select>
                    </div>

                    <button>ارسال</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Career_Opportunity

Career_Opportunity.defaultProps = {
    jobs: [
        {
            id: 1,
            value: '1',
            name: 'مدیرفنی',
        },
        {
            id: 2,
            value: '2',
            name: 'آبدارچی',
        },
        {
            id: 3,
            value: '3',
            name: 'برنامه نویس Front-End',
        },
        {
            id: 4,
            value: '4',
            name: 'منشی',
        },
    ],
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
}